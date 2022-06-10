import * as yup from 'yup';

export const itemLeaseForm = [
  { type: 'date', label: 'Date', name: 'date' },
  { type: 'number', label: 'Quantity', name: 'quantity' },
  { type: 'number', label: 'Price (IDR)', name: 'price' },
];

export const itemLeaseSchema = yup.object().shape({
  quantity: yup.number().required('Quantity is required').min(1),
  price: yup.number().required('Price is required'),
  date: yup.date().required('Date is required'),
  customerId: yup.string().required('Customer is required'),
  itemId: yup.string().required('Item is required'),
});
