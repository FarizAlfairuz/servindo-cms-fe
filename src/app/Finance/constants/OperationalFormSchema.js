import * as yup from 'yup';

export const operationalForm = [
  { type: 'date', label: 'Date', name: 'date' },
  { type: 'text', label: 'Description', name: 'description' },
  { type: 'number', label: 'Total', name: 'total' },
];

export const operationalSchema = yup.object().shape({
  date: yup.date().required('Date is required'),
  description: yup.string().required('Description is required'),
  total: yup.number().required('Total is required'),
});