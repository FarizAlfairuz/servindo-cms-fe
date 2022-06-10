import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { serviceForm, serviceSchema } from '../../constants/ServiceFormSchema';
import InputForm from '../../../Common/components/Forms/InputForm';
import useServiceService from '../../hooks/useServiceService';
import Button from '../../../Common/components/Buttons/Button';
import { useGetAllCustomers } from '../../hooks/useFetchCustomers';
import CustomerSearchBar from '../SearchBar/CustomerSearchBar';

const ServiceItemForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(serviceSchema), mode: 'onTouched' });

  const [customerQuery, setCustomerQuery] = useState({
    limit: 10,
    page: 1,
    search: null,
  });

  const { createState, createService } = useServiceService();
  const { customers } = useGetAllCustomers(customerQuery);

  const onSubmitHandlerCallback = useCallback((data) => {
    createService(data);
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
      <div className="space-y-2">
        {serviceForm.map((input) => (
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

export default ServiceItemForm;
