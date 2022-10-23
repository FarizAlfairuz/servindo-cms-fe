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
import ImageForm from '../../../Common/components/Forms/ImageForm';
import FullPageLoader from '../../../Common/components/Loader/FullPageLoader';

const UpdateOtherIncomePage = () => {
  const { id } = useParams();
  const { otherIncome } = useGetSingleOtherIncome(id);
  const { isOpen, openModal, closeModal } = useModal();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, dirtyFields },
  } = useForm({ resolver: yupResolver(otherIncomeSchema), mode: 'onTouched' });

  useEffect(() => {
    if (otherIncome) {
      reset(otherIncome);
    }
  }, [otherIncome]);

  const { updateState, updateOtherIncome, deleteOtherIncome } =
    useOtherIncomeService();

  const onSubmitHandlerCallback = useCallback((data) => {
    const formData = new FormData();

    Object.keys(dirtyFields).forEach((field) => {
      if (field === 'image') {
        const uploadedImage = data.image ? data.image[0] : undefined;
        if (uploadedImage) formData.append('image', uploadedImage);
      }
      formData.append(field, data[field]);
    });

    updateOtherIncome(otherIncome.id, formData);
  });

  const deleteHandlerCallback = useCallback(() => {
    deleteOtherIncome(otherIncome.id);
  });

  const watchImage = watch('image');

  return (
    <div className="space-y-4">
      {updateState.loading && <FullPageLoader />}
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
        id="update_other_income_form"
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
              disabled={updateState.loading}
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
