import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { itemSaleForm, itemSaleSchema } from '../../constants/SaleFormSchema';
import InputForm from '../../../Common/components/Forms/InputForm';
import useSaleService from '../../hooks/useSalesService';
import { useGetAllCustomers } from '../../hooks/useFetchCustomers';
import Button from '../../../Common/components/Buttons/Button';
import CustomerSearchBar from '../SearchBar/CustomerSearchBar';
import { useGetAllItems } from '../../../Item/hooks/useFetchItems';
import ItemSearchBar from '../SearchBar/ItemSearchBar';
import FullPageLoader from '../../../Common/components/Loader/FullPageLoader';
import ImageForm from '../../../Common/components/Forms/ImageForm';

const SellsItemForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(itemSaleSchema), mode: 'onTouched' });
  const [itemQuery, setItemQuery] = useState({
    limit: 10,
    page: 1,
    search: null,
  });
  const [customerQuery, setCustomerQuery] = useState({
    limit: 10,
    page: 1,
    search: null,
  });

  const { createState, createSale } = useSaleService();
  const { customers } = useGetAllCustomers(customerQuery);
  const { items } = useGetAllItems(itemQuery);

  const onSubmitHandlerCallback = useCallback((data) => {
    const uploadedImage = data.image ? data.image[0] : undefined;
    const saleFormData = document.getElementById('sales_form');

    const formData = new FormData(saleFormData);
    formData.set('image', uploadedImage);
    formData.append('itemId', data.itemId);
    formData.append('customerId', data.customerId);

    createSale(formData);
  });

  const searchItemCallbackHandler = useCallback((data) => {
    setItemQuery({
      search: data,
    });
  });

  const searchCustomerCallbackHandler = useCallback((data) => {
    setCustomerQuery({
      search: data,
    });
  });

  const watchImage = watch('image');

  return (
    <form
      id="sales_form"
      className="flex flex-col sm:flex-row space-x-4"
      onSubmit={handleSubmit(onSubmitHandlerCallback)}
    >
      {createState.loading && <FullPageLoader />}
      <div className="w-full space-y-2">
        <div className="text-sm">Item</div>
        <ItemSearchBar
          data={items}
          register={setValue}
          error={errors}
          searchCallback={searchItemCallbackHandler}
        />
        {itemSaleForm.map((input) => (
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
        <div className="text-sm">Customer</div>
        <CustomerSearchBar
          data={customers}
          register={setValue}
          error={errors}
          searchCallback={searchCustomerCallbackHandler}
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
  );
};

export default React.memo(SellsItemForm);
