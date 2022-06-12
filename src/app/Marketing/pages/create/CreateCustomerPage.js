import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useCustomerService from '../../hooks/useCustomerService';
import {
  customerForm,
  customerSchema,
} from '../../constants/CustomerFormSchema';
import BackButton from '../../../Common/components/Buttons/BackButton';
import InputForm from '../../../Common/components/Forms/InputForm';
import Button from '../../../Common/components/Buttons/Button';

const CreateCustomerPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(customerSchema), mode: 'onTouched' });

  const { createState, createCustomer } = useCustomerService();

  const onSubmitHandlerCallback = useCallback((data) => {
    createCustomer(data);
  });

  return (
    <div className="space-y-4">
      <BackButton />
      <div className="flex justify-between mb-5">
        <h3 className="text-xl font-bold">Create New Customer</h3>
      </div>

      <form
        className="w-full md:w-1/2 space-y-4"
        onSubmit={handleSubmit(onSubmitHandlerCallback)}
      >
        <div className="space-y-2">
          {customerForm.map((input) => (
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

export default CreateCustomerPage;
