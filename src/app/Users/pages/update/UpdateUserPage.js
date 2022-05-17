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

const UpdateUserPage = () => {
  const { id } = useParams();
  const { user, loading } = useGetSingleUser(id);
  const { updateState, updateUser } = useUserService();

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

  return (
    <div className="space-y-4">
      <BackButton />
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
    </div>
  );
};

export default UpdateUserPage;
