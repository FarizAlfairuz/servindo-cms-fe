import * as yup from 'yup';

export const serviceForm = [
  { type: 'date', label: 'Date', name: 'date' },
  { type: 'text', label: 'Description', name: 'description' },
  { type: 'number', label: 'Price', name: 'price' },
  { type: 'number', label: 'Tax (%)', name: 'tax' },
];

export const serviceSchema = yup.object().shape({
  date: yup.date().required('Date is required').typeError('Date is required'),
  description: yup.string().required('Description is required'),
  price: yup
    .number()
    .required('Price is required')
    .min(0)
    .typeError('Price is required'),
  customerId: yup.string().required('Customer is required'),
  tax: yup
    .number()
    .required('Tax is required')
    .min(0)
    .max(30)
    .typeError('Tax is required'),
  image: yup
    .mixed()
    .required('No file chosen')
    .test({
      message: 'No file chosen',
      test: (arr) => arr.length > 0,
    }),
});
