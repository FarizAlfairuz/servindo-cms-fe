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
import { getTime } from '../../../../helpers/getTime';

const CreateOtherIncomePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(otherIncomeSchema), mode: 'onTouched' });

  const { createState, createOtherIncome } = useOtherIncomeService();

  const onSubmitHandlerCallback = useCallback((data) => {
    const otherIncomeData = {
      date: getTime(data.date, 'date'),
      description: data.description,
      total: data.total,
    };
    createOtherIncome(otherIncomeData);
  });

  return (
    <div className="space-y-4">
      <BackButton />
      <div className="flex justify-between mb-5">
        <h3 className="text-xl font-bold">Add Other Income</h3>
      </div>

      <form
        className="w-1/2 space-y-4"
        onSubmit={handleSubmit(onSubmitHandlerCallback)}
      >
        <div className="space-y-2">
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

export default CreateOtherIncomePage;
