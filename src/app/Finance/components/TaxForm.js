import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { taxForm, taxSchema } from '../constants/TaxFormSchema';
import useTaxService from '../hooks/useTaxService';
import { getTime } from '../../../helpers/getTime';
import InputForm from '../../Common/components/Forms/InputForm';
import Button from '../../Common/components/Buttons/Button';

const TaxForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(taxSchema), mode: 'onTouched' });

  const { createState, createTax } = useTaxService();

  const onSubmitHandlerCallback = useCallback((data) => {
    const taxData = {
      date: getTime(data.date, 'date'),
      description: data.description,
      total: data.total,
    };
    createTax(taxData);
  });
  return (
    <form
      className="w-1/2 space-y-4"
      onSubmit={handleSubmit(onSubmitHandlerCallback)}
    >
      <div className="space-y-2">
        {taxForm.map((input) => (
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
  );
};

export default TaxForm;
