import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BackButton from '../../../Common/components/Buttons/BackButton';
import InputForm from '../../../Common/components/Forms/InputForm';
import Button from '../../../Common/components/Buttons/Button';
import {
  otherIncomeForm,
  otherIncomeSchema,
} from '../../constants/OtherIncomeFormSchema';
import useOtherIncomeService from '../../hooks/useOtherIncomeService';
import ImageForm from '../../../Common/components/Forms/ImageForm';
import FullPageLoader from '../../../Common/components/Loader/FullPageLoader';

const CreateOtherIncomePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(otherIncomeSchema), mode: 'onTouched' });

  const { createState, createOtherIncome } = useOtherIncomeService();

  const onSubmitHandlerCallback = useCallback((data) => {
    const uploadedImage = data.image ? data.image[0] : undefined;
    const otherIncomeFormData = document.getElementById('other_income_form');

    const formData = new FormData(otherIncomeFormData);
    formData.set('image', uploadedImage);

    createOtherIncome(formData);
  });

  const watchImage = watch('image');

  return (
    <div className="space-y-4">
      {createState.loading && <FullPageLoader />}
      <BackButton />
      <div className="flex justify-between mb-5">
        <h3 className="text-xl font-bold">Add Other Income</h3>
      </div>

      <form
        id="other_income_form"
        className="flex flex-col sm:flex-row space-x-4"
        onSubmit={handleSubmit(onSubmitHandlerCallback)}
      >
        <div className="w-full space-y-2">
          {otherIncomeForm.map((input) => (
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
    </div>
  );
};

export default CreateOtherIncomePage;
