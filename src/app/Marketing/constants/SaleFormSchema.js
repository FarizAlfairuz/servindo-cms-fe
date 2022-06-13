import * as yup from 'yup';

export const itemSaleForm = [
  { type: 'number', label: 'Quantity', name: 'quantity' },
  { type: 'number', label: 'Price (IDR)', name: 'price' },
  { type: 'number', label: 'Discount (IDR)', name: 'discount' },
  { type: 'number', label: 'Tax (%)', name: 'tax' },
  { type: 'date', label: 'Date', name: 'date' },
];

export const itemSaleSchema = yup.object().shape({
  quantity: yup.number().required('Quantity is required').min(1),
  price: yup.number().required('Price is required').min(0),
  tax: yup.number().required('Tax is required').min(0).max(30),
  discount: yup.number().required('Discount is required').min(0),
  date: yup.date().required('Date is required'),
  customerId: yup.string().required('Customer is required'),
  itemId: yup.string().required('Item is required'),
});
