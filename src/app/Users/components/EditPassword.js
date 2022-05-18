import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useUserService from '../hooks/useUserService';
import {
  userPasswordForm,
  userPasswordSchema,
} from '../constants/UserFormSchema';
import InputForm from '../../Common/components/Forms/InputForm';
import Button from '../../Common/components/Buttons/Button';

const EditPassword = (props) => {
  const { user } = props;
  const { updateState, updateUser } = useUserService();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userPasswordSchema),
    mode: 'onTouched',
  });

  const onSubmitHandlerCallback = useCallback((data) => {
    updateUser(user.id, data);
    console.log(data)
  });

  console.log(updateState);

  return (
    <form
      className="w-1/2 space-y-4"
      onSubmit={handleSubmit(onSubmitHandlerCallback)}
    >
      <div className="space-y-2">
        {userPasswordForm.map((input) => (
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
  );
};

export default React.memo(EditPassword);
