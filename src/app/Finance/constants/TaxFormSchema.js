import * as yup from 'yup';

export const taxForm = [
  { type: 'date', label: 'Date', name: 'date' },
  { type: 'number', label: 'Total', name: 'total' },
];

export const taxSchema = yup.object().shape({
  date: yup.date().required('Date is required'),
  total: yup.number().required('Total is required'),
});
