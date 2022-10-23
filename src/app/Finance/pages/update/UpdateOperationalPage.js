import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams } from 'react-router-dom';
import BackButton from '../../../Common/components/Buttons/BackButton';
import {
  operationalForm,
  operationalSchema,
} from '../../constants/OperationalFormSchema';
import InputForm from '../../../Common/components/Forms/InputForm';
import Button from '../../../Common/components/Buttons/Button';
import { useGetSingleOperational } from '../../hooks/useFetchOperational';
import useOperationalService from '../../hooks/useOperationalService';
import useModal from '../../../Common/hooks/useModal';
import ConfirmModal from '../../../Common/components/Modals/ConfirmModal';
import ImageForm from '../../../Common/components/Forms/ImageForm';
import FullPageLoader from '../../../Common/components/Loader/FullPageLoader';

const UpdateOperationalPage = () => {
  const { id } = useParams();
  const { operational } = useGetSingleOperational(id);
  const { isOpen, openModal, closeModal } = useModal();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, dirtyFields },
  } = useForm({ resolver: yupResolver(operationalSchema), mode: 'onTouched' });

  useEffect(() => {
    if (operational) {
      reset(operational);
    }
  }, [operational]);

  const { updateState, updateOperational, deleteOperational } =
    useOperationalService();

  const onSubmitHandlerCallback = useCallback((data) => {
    const formData = new FormData();

    Object.keys(dirtyFields).forEach((field) => {
      if (field === 'image') {
        const uploadedImage = data.image ? data.image[0] : undefined;
        if (uploadedImage) formData.append('image', uploadedImage);
      }
      formData.append(field, data[field]);
    });

    updateOperational(operational.id, formData);
  });

  const deleteHandlerCallback = useCallback(() => {
    deleteOperational(operational.id);
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
        <h3 className="text-xl font-bold">Edit Operational</h3>
      </div>

      <form
        id="update_operational_form"
        className="flex flex-col sm:flex-row space-x-4"
        onSubmit={handleSubmit(onSubmitHandlerCallback)}
      >
        <div className="w-full space-y-2">
          {operationalForm.map((input) => (
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

export default UpdateOperationalPage;
