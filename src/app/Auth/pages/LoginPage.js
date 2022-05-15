import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { login } from '../../../redux';
import InputForm from '../../Common/components/InputForm';
import Button from '../../Common/components/Buttons/Button';

const schema = yup.object().shape({
  username: yup.string().required('Username tidak boleh kosong'),
  password: yup
    .string()
    .required('Password tidak boleh kosong')
    .min(6, 'Minimal 6 karakter'),
});

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmitHandlerCallback = React.useCallback(
    (data) => {
      dispatch(login(data));
    },
    [dispatch, login]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onTouched' });

  return (
    <div className="bg-slate-100 h-screen flex justify-center items-center">
      <div className="bg-white w-1/3 lg:w-1/5 mx-auto p-6 rounded-md shadow-xl space-y-4">
        <div className="text-2xl flex justify-center">Logo</div>
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmitHandlerCallback)}
        >
          <InputForm
            type="text"
            placeholder="Username"
            name="username"
            error={errors}
            register={register}
            required
          />
          <InputForm
            type="password"
            placeholder="Password"
            name="password"
            error={errors}
            register={register}
            required
          />
          <Button submit>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
