import * as yup from 'yup';

export const itemSaleForm = [
  { type: 'number', label: 'Quantity', name: 'quantity' },
  { type: 'number', label: 'Price (IDR)', name: 'price' },
  { type: 'number', label: 'Discount (IDR)', name: 'discount' },
  { type: 'date', label: 'Date', name: 'date' },
];

export const itemSaleSchema = yup.object().shape({
  quantity: yup.number().required('Quantity is required').min(1),
  price: yup.number().required('Cost of Goods Sold is required'),
  discount: yup.number().required('Cost of Goods Sold is required'),
  date: yup.date().required('Date is required'),
  customerId: yup.string().required('Customer is required'),
  itemId: yup.string().required('Item is required'),
});
