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

const VerticalBarChart = (props) => {
  const { datasets, year } = props;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${year} Sales`,
      },
    },
  };

  const data = {
    labels: datasets.map((dataset) => getMonthName(dataset.month)),
    datasets: [
      {
        label: 'Gross Sale',
        data: datasets.map((dataset) => dataset.gross),
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Net Sale',
        data: datasets.map((dataset) => dataset.netSales),
        backgroundColor: 'rgb(255, 205, 86)',
      },
      {
        label: 'Net Profit',
        data: datasets.map((dataset) => dataset.netProfit),
        backgroundColor: 'rgb(54, 162, 235)',
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default VerticalBarChart;
