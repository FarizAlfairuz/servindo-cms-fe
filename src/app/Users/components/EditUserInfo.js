import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useUserService from '../hooks/useUserService';
import InputForm from '../../Common/components/Forms/InputForm';
import { userInfoForm, userInfoSchema } from '../constants/UserFormSchema';
import Button from '../../Common/components/Buttons/Button';

const EditUserInfo = (props) => {
  const { user } = props;
  const { updateState, updateUser } = useUserService();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userInfoSchema),
    mode: 'onTouched',
  });

  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        role: user.role,
      });
    }
  }, [user]);

  const onSubmitHandlerCallback = useCallback((data) => {
    updateUser(user.id, data);
  });

  return (
    <form
      className="w-1/2 space-y-4"
      onSubmit={handleSubmit(onSubmitHandlerCallback)}
    >
      <div className="space-y-2">
        {userInfoForm.map((input) => (
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
  );
};

export default React.memo(EditUserInfo);
