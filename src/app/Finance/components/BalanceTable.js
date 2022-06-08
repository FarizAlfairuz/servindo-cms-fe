import React, { useState } from 'react';
import useBalanceColumnGenerator from './BalanceColumnGenerator';
import { useGetAllBalances } from '../hooks/useFetchBalance';
import Table from '../../Common/components/Table/Table';

const BalanceTable = () => {
  const { column } = useBalanceColumnGenerator();
  const [year, setYear] = useState(2022);

  const { balance, loading } = useGetAllBalances(year);

  const options = [
    { value: 2022, label: '2022' },
    { value: 2021, label: '2021' },
    { value: 2020, label: '2020' },
    { value: 2019, label: '2019' },
    { value: 2018, label: '2018' },
  ];

  return (
    <div className="space-y-4 mt-6 w-full md:w-1/2">
      <div className="flex items-center justify-end py-2">
        <select
          className="mx-1 rounded p-1 focus:outline-none shadow"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value, 10))}
        >
          {options.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <Table data={balance} columns={column} loading={loading} />
      </div>
    </div>
  );
};

export default BalanceTable;
