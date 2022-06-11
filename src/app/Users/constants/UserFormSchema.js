import * as yup from 'yup';

export const userForm = [
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
      // { value: 'support', label: 'Support' },
    ],
  },
];

export const userSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .matches(
      /^[aA-zZ\d]+$/,
      'Only alphabets and numbers are allowed for this field '
    )
    .min(3, 'Min. 3 characters')
    .max(16, 'Max. 16 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Min. 6 characters')
    .max(16, 'Max. 16 characters'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password'), null], "Password doesn't match"),
  role: yup.string().required('Role is required'),
});

export const userInfoForm = [
  { type: 'text', label: 'Username', name: 'username' },
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

export const userInfoSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .matches(
      /^[aA-zZ\d]+$/,
      'Only alphabets and numbers are allowed for this field '
    )
    .min(3, 'Min. 3 characters')
    .max(16, 'Max. 16 characters'),
  role: yup.string().required('Role is required'),
});

export const userPasswordForm = [
  { type: 'password', label: 'Password', name: 'password' },
  { type: 'password', label: 'Confirm Password', name: 'confirmPassword' },
];

export const userPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Min. 6 characters')
    .max(16, 'Max. 16 characters'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password'), null], "Password doesn't match"),
});
