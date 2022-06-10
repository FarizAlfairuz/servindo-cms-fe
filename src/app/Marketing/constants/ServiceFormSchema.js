import * as yup from 'yup';

export const serviceForm = [
  { type: 'date', label: 'Date', name: 'date' },
  { type: 'text', label: 'Description', name: 'description' },
  { type: 'number', label: 'Price', name: 'price' },
];

export const serviceSchema = yup.object().shape({
  date: yup.date().required('Date is required'),
  description: yup.string().required('Description is required'),
  price: yup.number().required('Price is required'),
  customerId: yup.string().required('Customer is required'),
});
