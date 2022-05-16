/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTable } from 'react-table';

const Table = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table
      {...getTableProps()}
      className="overflow-hidden w-full border-separate rounded-md bg-white shadow"
    >
      <thead className="bg-cyan-800 text-white">
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th key={column.id} {...column.getHeaderProps()} className="py-2">
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="">
        {data.length > 0 ? (
          rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                key={row.id}
                {...row.getRowProps()}
                className="odd:bg-slate-100"
              >
                {row.cells.map((cell, index) => (
                  <td key={index} className="py-2 px-8">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })
        ) : (
          <tr>
            <td className="text-center py-8" colSpan={columns.length}>
              No data
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default React.memo(Table);
