import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputForm from '../../../Common/components/Forms/InputForm';
import BackButton from '../../../Common/components/Buttons/BackButton';
import Button from '../../../Common/components/Buttons/Button';
import useUserService from '../../../../services/userService';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Min. 6 characters'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password'), null], "Password doesn't match"),
  role: yup.string().required('Role is required'),
});

const form = [
  { type: 'text', label: 'Username', name: 'username' },
  { type: 'password', label: 'Password', name: 'password' },
  { type: 'password', label: 'Confirm Password', name: 'confirmPassword' },
  {
    type: 'select',
    label: 'Role',
    name: 'role',
    options: [
      { value: 'superadmin', label: 'Superadmin' },
      { value: 'finance', label: 'Finance' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'purchasing', label: 'Purchasing' },
      { value: 'support', label: 'Support' },
    ],
  },
];

const CreateUserPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onTouched' });

  const { createState, createUser } = useUserService();

  const onSubmitHandlerCallback = useCallback((data) => {
    createUser(data);
  });

  return (
    <div className="space-y-4">
      <BackButton />
      <div className="flex justify-between mb-5">
        <h3 className="text-xl font-bold">Create New User</h3>
      </div>

      <form
        className="w-1/2 space-y-4"
        onSubmit={handleSubmit(onSubmitHandlerCallback)}
      >
        <div className="space-y-2">
          {form.map((input) => (
            <InputForm
              key={input.name}
              type={input.type}
              label={input.label}
              name={input.name}
              disabled={createState.loading}
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

export default CreateUserPage;
