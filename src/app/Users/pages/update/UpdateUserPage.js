import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import BackButton from '../../../Common/components/Buttons/BackButton';
import Button from '../../../Common/components/Buttons/Button';
import InputForm from '../../../Common/components/Forms/InputForm';
import { useGetSingleUser } from '../../hooks/useFetchUsers';
import { userSchema, userForm } from '../../constants/UserFormSchema';
import useUserService from '../../hooks/useUserService';
import ConfirmModal from '../../../Common/components/Modals/ConfirmModal';
import useModal from '../../../Common/hooks/useModal';

const UpdateUserPage = () => {
  const { id } = useParams();
  const { user } = useGetSingleUser(id);
  const { updateState, updateUser, deleteUser } = useUserService();
  const { isOpen, openModal, closeModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userSchema),
    mode: 'onTouched',
  });

  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        password: '',
        confirmPassword: '',
        role: user.role,
      });
    }
  }, [user]);

  const onSubmitHandlerCallback = useCallback((data) => {
    updateUser(id, data);
  });

  const deleteUserCallback = useCallback(() => {
    deleteUser(id);
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
        <h3 className="text-xl font-bold">Edit User {user && user.id}</h3>
      </div>

      <form
        className="w-1/2 space-y-4"
        onSubmit={handleSubmit(onSubmitHandlerCallback)}
      >
        <div className="space-y-2">
          {userForm.map((input) => (
            <InputForm
              key={input.name}
              type={input.type}
              label={input.label}
              name={input.name}
              disabled={updateState.loading}
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
      <ConfirmModal
        title="Delete this user?"
        description="You can't undo this action once you deleted this user."
        isOpen={isOpen}
        onClickConfirm={deleteUserCallback}
        closeModal={closeModal}
      />
    </div>
  );
};

export default UpdateUserPage;
