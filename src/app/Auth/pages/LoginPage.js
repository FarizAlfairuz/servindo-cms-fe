import React, { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { login } from '../../../redux';
import InputForm from '../../Common/components/Forms/InputForm';
import Button from '../../Common/components/Buttons/Button';
import { AlertContext } from '../../../contexts/AlertContext';
import logo from '../../../assets/images/logo_servindo.png';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Min. 6 characters'),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const snackbarRef = useContext(AlertContext);

  const onSubmitHandlerCallback = useCallback(
    (data) => {
      dispatch(login(data));
      snackbarRef.current.show();
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
        <div className="flex justify-center">
          <img src={logo} className="w-20 h-22" alt="" />
          <div className="flex flex-col justify-center">
            <h5 className="font-bold text-xl">CV. Servindo</h5>
            <h6 className="font-semibold text-sm italic">General and Sevice</h6>
          </div>
        </div>
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
