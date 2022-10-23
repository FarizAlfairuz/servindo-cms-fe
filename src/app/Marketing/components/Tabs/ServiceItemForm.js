import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { serviceForm, serviceSchema } from '../../constants/ServiceFormSchema';
import InputForm from '../../../Common/components/Forms/InputForm';
import useServiceService from '../../hooks/useServiceService';
import Button from '../../../Common/components/Buttons/Button';
import { useGetAllCustomers } from '../../hooks/useFetchCustomers';
import CustomerSearchBar from '../SearchBar/CustomerSearchBar';
import FullPageLoader from '../../../Common/components/Loader/FullPageLoader';
import ImageForm from '../../../Common/components/Forms/ImageForm';

const ServiceItemForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
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
    const uploadedImage = data.image ? data.image[0] : undefined;
    const serviceFormData = document.getElementById('service_form');

    const formData = new FormData(serviceFormData);
    formData.set('image', uploadedImage);
    formData.append('customerId', data.customerId);
    createService(formData);
  });

  const searchCustomerCallbackHandler = useCallback((data) => {
    setCustomerQuery({
      search: data,
    });
  });

  const watchImage = watch('image');

  return (
    <form
      id="service_form"
      className="flex flex-col sm:flex-row space-x-4"
      onSubmit={handleSubmit(onSubmitHandlerCallback)}
    >
      {createState.loading && <FullPageLoader />}
      <div className="w-full space-y-2">
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

export default ServiceItemForm;
