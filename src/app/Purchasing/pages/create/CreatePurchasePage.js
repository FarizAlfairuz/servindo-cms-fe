import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  purchaseForm,
  purchaseSchema,
} from '../../constants/PurchaseFormSchema';
import BackButton from '../../../Common/components/Buttons/BackButton';
import InputForm from '../../../Common/components/Forms/InputForm';
import Button from '../../../Common/components/Buttons/Button';
import usePurchaseService from '../../hooks/usePurchaseService';
import VendorSearchBar from '../../components/VendorSearchBar';
import usePagination from '../../../Common/hooks/usePagination';
import { useGetAllVendors } from '../../hooks/useFetchVendors';
import FullPageLoader from '../../../Common/components/Loader/FullPageLoader';
import ImageForm from '../../../Common/components/Forms/ImageForm';

const CreatePurchasePage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(purchaseSchema), mode: 'onTouched' });

  const { query, setQuery } = usePagination();

  const { createState, createPurchase } = usePurchaseService();
  const { vendors } = useGetAllVendors(query);

  const onSubmitHandlerCallback = useCallback((data) => {
    const uploadedImage = data.image ? data.image[0] : undefined;
    const purchaseFormData = document.getElementById('purchase_form');

    const formData = new FormData(purchaseFormData);
    formData.set('image', uploadedImage);
    formData.append('vendorId', data.vendorId);

    createPurchase(formData);
  });

  const searchCallbackHandler = useCallback((data) => {
    setQuery({
      search: data,
    });
  });

  const watchImage = watch('image');

  return (
    <div className="space-y-4">
      {createState.loading && <FullPageLoader />}
      <BackButton />
      <div className="flex justify-between mb-5">
        <h3 className="text-xl font-bold">Purchase New Item</h3>
      </div>

      <form
        id="purchase_form"
        className="flex flex-col sm:flex-row space-x-4"
        onSubmit={handleSubmit(onSubmitHandlerCallback)}
      >
        <div className="w-full space-y-2">
          {purchaseForm.map((input) => (
            <InputForm
              key={input.name}
              type={input.type}
              label={input.label}
              name={input.name}
              disabled={createState.loading}
              register={register}
              error={errors}
              options={input.options}
              required
            />
          ))}
          <div className="text-sm">Vendor</div>
          <VendorSearchBar
            data={vendors}
            register={setValue}
            error={errors}
            searchCallback={searchCallbackHandler}
          />
          <div className="flex justify-end">
            <div>
              <Button size="small" submit>
                Submit
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full">
          <ImageForm
            label="Receipt"
            name="image"
            register={register}
            watchImage={watchImage}
            error={errors && errors.image}
          />
        </div>
      </form>
    </div>
  );
};

export default CreatePurchasePage;
