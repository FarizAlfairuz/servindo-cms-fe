import * as yup from 'yup';

export const vendorForm = [
  { type: 'text', label: 'Name', name: 'name' },
  { type: 'text', label: 'Address', name: 'address' },
  { type: 'text', label: 'Contact Person', name: 'cp' },
  { type: 'text', label: 'Phone Number', name: 'phone' },
];

export const vendorSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  address: yup.string().required('Address is required'),
  cp: yup.string().required('Contact Person is required'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(/^[\d]+$/, 'Only numbers are allowed for this field '),
});
