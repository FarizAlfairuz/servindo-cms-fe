import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  operationalForm,
  operationalSchema,
} from '../constants/OperationalFormSchema';
import useOperationalService from '../hooks/useOperationalService';
import InputForm from '../../Common/components/Forms/InputForm';
import Button from '../../Common/components/Buttons/Button';
import ImageForm from '../../Common/components/Forms/ImageForm';
import FullPageLoader from '../../Common/components/Loader/FullPageLoader';

const OperationalForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(operationalSchema), mode: 'onTouched' });

  const { createState, createOperational } = useOperationalService();

  const onSubmitHandlerCallback = useCallback((data) => {
    const uploadedImage = data.image ? data.image[0] : undefined;
    const operationalFormData = document.getElementById('operational_form');

    const formData = new FormData(operationalFormData);
    formData.set('image', uploadedImage);

    createOperational(formData);
  });

  const watchImage = watch('image');

  return (
    <form
      id="operational_form"
      className="flex flex-col sm:flex-row space-x-4"
      onSubmit={handleSubmit(onSubmitHandlerCallback)}
    >
      {createState.loading && <FullPageLoader />}
      <div className="w-full space-y-2">
        {operationalForm.map((input) => (
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

export default OperationalForm;
