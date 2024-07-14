// src/components/ExpenseTable.js
import React from 'react';
import { useTable, useFilters } from 'react-table';
import '../styles/main.scss';

const ExpenseTable = ({ expenses }) => {
  const data = React.useMemo(() => expenses, [expenses]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
        className: 'column-date', // Add className to control width
      },
      {
        Header: 'Description',
        accessor: 'description',
        className: 'column-description', // Add className to control width
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        className: 'column-amount', // Add className to control width
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable({ columns, data }, useFilters);

  return (
    <>
      <input
        className="filter-input"
        onChange={e => setFilter('description', e.target.value)}
        placeholder="Filter by description"
      />
      <table {...getTableProps()} className="expense-table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className={column.className}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className={cell.column.className}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;
