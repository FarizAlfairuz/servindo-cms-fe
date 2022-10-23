import * as yup from 'yup';

export const itemSaleForm = [
  { type: 'date', label: 'Date', name: 'date' },
  { type: 'number', label: 'Quantity', name: 'quantity' },
  { type: 'number', label: 'Price (IDR)', name: 'price' },
  { type: 'number', label: 'Discount (IDR)', name: 'discount' },
  { type: 'number', label: 'Tax (%)', name: 'tax' },
];

export const itemSaleSchema = yup.object().shape({
  quantity: yup
    .number()
    .required('Quantity is required')
    .min(1)
    .typeError('Quantity is required'),
  price: yup
    .number()
    .required('Price is required')
    .min(0)
    .typeError('Price is required'),
  tax: yup
    .number()
    .required('Tax is required')
    .min(0)
    .max(30)
    .typeError('Tax is required'),
  discount: yup
    .number()
    .required('Discount is required')
    .min(0)
    .typeError('Discount is required'),
  date: yup.date().required('Date is required').typeError('Date is required'),
  customerId: yup.string().required('Customer is required'),
  itemId: yup.string().required('Item is required'),
  image: yup
    .mixed()
    .required('No file chosen')
    .test({
      message: 'No file chosen',
      test: (arr) => arr.length > 0,
    }),
});
