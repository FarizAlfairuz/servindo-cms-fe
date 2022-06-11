import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getMonthName } from '../../../helpers/getMonthName';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TotalBarChart = (props) => {
  const { datasets, year } = props;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${year} Report`,
      },
    },
  };

  const data = {
    labels: datasets.map((dataset) => getMonthName(dataset.month)),
    datasets: [
      {
        label: 'Debit',
        data: datasets.map((dataset) => dataset.debit),
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Credit',
        data: datasets.map((dataset) => dataset.credit),
        backgroundColor: 'rgb(54, 162, 235)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default React.memo(TotalBarChart);
