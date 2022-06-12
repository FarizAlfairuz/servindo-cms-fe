import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams } from 'react-router-dom';
import BackButton from '../../../Common/components/Buttons/BackButton';
import {
  otherIncomeForm,
  otherIncomeSchema,
} from '../../constants/OtherIncomeFormSchema';
import InputForm from '../../../Common/components/Forms/InputForm';
import Button from '../../../Common/components/Buttons/Button';
import { useGetSingleOtherIncome } from '../../hooks/useFetchOtherIncome';
import useOtherIncomeService from '../../hooks/useOtherIncomeService';
import useModal from '../../../Common/hooks/useModal';
import ConfirmModal from '../../../Common/components/Modals/ConfirmModal';

const UpdateOtherIncomePage = () => {
  const { id } = useParams();
  const { otherIncome } = useGetSingleOtherIncome(id);
  const { isOpen, openModal, closeModal } = useModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(otherIncomeSchema), mode: 'onTouched' });

  useEffect(() => {
    if (otherIncome) {
      reset(otherIncome);
    }
  }, [otherIncome]);

  const { updateState, updateOtherIncome, deleteOtherIncome } =
    useOtherIncomeService();

  const onSubmitHandlerCallback = useCallback((data) => {
    updateOtherIncome(otherIncome.id, data);
  });

  const deleteHandlerCallback = useCallback(() => {
    deleteOtherIncome(otherIncome.id);
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <BackButton />
        <div>
          <Button size="small" variant="danger" onClick={openModal}>
            Delete
          </Button>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <h3 className="text-xl font-bold">Edit Other Income</h3>
      </div>

      <form
        className="w-full md:w-1/2 space-y-4"
        onSubmit={handleSubmit(onSubmitHandlerCallback)}
      >
        <div className="space-y-2">
          {otherIncomeForm.map((input) => (
            <InputForm
              key={input.name}
              type={input.type}
              label={input.label}
              name={input.name}
              disabled={updateState.loading}
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
      <ConfirmModal
        title="Delete this data?"
        description="You can't undo this action once you deleted this data."
        isOpen={isOpen}
        onClickConfirm={deleteHandlerCallback}
        closeModal={closeModal}
      />
    </div>
  );
};

export default UpdateOtherIncomePage;
