/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTable } from 'react-table';
import Loader from '../Loader/Loader';

const Table = ({ columns, data, loading, withFooter }) => {
  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = tableInstance;

  return (
    <table
      {...getTableProps()}
      className="overflow-hidden w-full border-separate rounded-xl bg-white shadow"
    >
      <thead className="bg-cyan-800 text-white rounded-t-xl">
        {headerGroups.map((headerGroup) => (
          <tr
            key={headerGroup.id}
            {...headerGroup.getHeaderGroupProps()}
            className="rounded-t-lg"
          >
            {headerGroup.headers.map((column) => (
              <th
                key={column.id}
                {...column.getHeaderProps()}
                className="py-2 text-sm"
              >
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
                  <td key={index} className="py-2 px-4 text-sm">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })
        ) : loading ? (
          <tr>
            <td className="text-center py-8" colSpan={columns.length}>
              <Loader />
            </td>
          </tr>
        ) : (
          <tr>
            <td className="text-center py-8" colSpan={columns.length}>
              No data found
            </td>
          </tr>
        )}
      </tbody>
      {withFooter && (
        <tfoot className="bg-cyan-800 text-white rounded-b-xl">
          {footerGroups.map((footerGroup) => (
            <tr
              key={footerGroup.id}
              {...footerGroup.getFooterGroupProps()}
              className="rounded-b-lg"
            >
              {footerGroup.headers.map((column) => (
                <td
                  key={column.id}
                  {...column.getFooterProps()}
                  className="py-2 text-sm text-center font-bold"
                >
                  {column.render('Footer')}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      )}
    </table>
  );
};

export default React.memo(Table);
