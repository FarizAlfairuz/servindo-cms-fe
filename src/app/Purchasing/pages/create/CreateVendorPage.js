import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useVendorService from '../../hooks/useVendorService';
import { vendorForm, vendorSchema } from '../../constants/VendorFormSchema';
import BackButton from '../../../Common/components/Buttons/BackButton';
import InputForm from '../../../Common/components/Forms/InputForm';
import Button from '../../../Common/components/Buttons/Button';

const CreateVendorPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(vendorSchema), mode: 'onTouched' });

  const { createState, createVendor } = useVendorService();

  const onSubmitHandlerCallback = useCallback((data) => {
    createVendor(data);
  });

  return (
    <div className="space-y-4">
      <BackButton />
      <div className="flex justify-between mb-5">
        <h3 className="text-xl font-bold">Create New Vendor</h3>
      </div>

      <form
        className="w-1/2 space-y-4"
        onSubmit={handleSubmit(onSubmitHandlerCallback)}
      >
        <div className="space-y-2">
          {vendorForm.map((input) => (
            <InputForm
              key={input.name}
              type={input.type}
              label={input.label}
              name={input.name}
              disabled={createState.loading}
              register={register}
              error={errors}
              options={input.options}
              requierd
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

export default CreateVendorPage;
