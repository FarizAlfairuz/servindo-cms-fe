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
import { getTime } from '../../../../helpers/getTime';

const CreatePurchasePage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(purchaseSchema), mode: 'onTouched' });

  const { query, setQuery } = usePagination();

  const { createState, createPurchase } = usePurchaseService();
  const { vendors } = useGetAllVendors(query);

  const onSubmitHandlerCallback = useCallback((data) => {
    const purchaseData = {
      items: {
        name: data.name,
        quantity: data.quantity,
        cogs: data.cogs,
        type: data.type,
        date: getTime(data.date, 'date'),
      },
      vendor: {
        id: data.vendorId,
      },
    };
    createPurchase(purchaseData);
  });

  const searchCallbackHandler = useCallback((data) => {
    setQuery({
      search: data,
    });
  });

  return (
    <div className="space-y-4">
      <BackButton />
      <div className="flex justify-between mb-5">
        <h3 className="text-xl font-bold">Purchase New Item</h3>
      </div>

      <form
        className="w-full md:w-1/2 space-y-4"
        onSubmit={handleSubmit(onSubmitHandlerCallback)}
      >
        <div className="space-y-2">
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
        </div>
        <div className="flex justify-end">
          <div>
            <Button size="small" submit>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePurchasePage;
