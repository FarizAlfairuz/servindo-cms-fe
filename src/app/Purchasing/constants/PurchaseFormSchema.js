import * as yup from 'yup';

export const purchaseForm = [
  { type: 'text', label: 'Item Name', name: 'name' },
  { type: 'number', label: 'Quantity', name: 'quantity' },
  { type: 'number', label: 'Cost of Goods Sold (IDR)', name: 'cogs' },
  { type: 'date', label: 'Purchase Date', name: 'date' },
  {
    type: 'select',
    label: 'Type',
    name: 'type',
    options: [
      { value: 'unit', label: 'Unit' },
      { value: 'supplies', label: 'Supply' },
    ],
  },
];

export const purchaseSchema = yup.object().shape({
  name: yup.string().required('Item name is required'),
  quantity: yup.number().required('Quantity is required').min(1),
  cogs: yup.number().required('Cost of Goods Sold is required'),
  date: yup.date().required('Date is required'),
  type: yup.string().required('Type is required'),
  vendorId: yup.string().required('Vendor is required'),
});
