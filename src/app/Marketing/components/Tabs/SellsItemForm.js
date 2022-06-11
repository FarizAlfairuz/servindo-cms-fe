import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { itemSaleForm, itemSaleSchema } from '../../constants/SaleFormSchema';
import InputForm from '../../../Common/components/Forms/InputForm';
import useSaleService from '../../hooks/useSalesService';
import { useGetAllCustomers } from '../../hooks/useFetchCustomers';
import { getTime } from '../../../../helpers/getTime';
import Button from '../../../Common/components/Buttons/Button';
import CustomerSearchBar from '../SearchBar/CustomerSearchBar';
import { useGetAllItems } from '../../../Item/hooks/useFetchItems';
import ItemSearchBar from '../SearchBar/ItemSearchBar';
import FullPageLoader from '../../../Common/components/Loader/FullPageLoader';

const SellsItemForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
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
    const saleData = {
      items: {
        id: data.itemId,
        quantity: data.quantity,
        price: data.price,
        discount: data.discount,
        date: getTime(data.date, 'date'),
        tax: data.tax,
      },
      customer: {
        id: data.customerId,
      },
    };
    createSale(saleData);
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

  return (
    <form
      className="w-full md:w-1/2 space-y-4 mt-4"
      onSubmit={handleSubmit(onSubmitHandlerCallback)}
    >
      {createState.loading && <FullPageLoader />}
      <div className="space-y-2">
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
      </div>
      <div className="flex justify-end">
        <div>
          <Button size="small" submit>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SellsItemForm;
