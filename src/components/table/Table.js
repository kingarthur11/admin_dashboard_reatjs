import React, {useMemo} from 'react';
import { useTable, usePagination } from 'react-table'
import ROWS from './rows'
import COLUMNS from './columns'
import './Table.css'

const Table = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => ROWS, [])

  const tableInstance = useTable({
    columns,
    data
  },
    usePagination
    )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    canNextPage,
    canPreviousPage,
    previousPage,
    pageOptions,
    state
  } = tableInstance

  const {pageIndex} = state
  return (
  <>
    <table {...getTableProps()} >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
               <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
        </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
        </tr>
          )
        })}
      </tbody>
    </table>
    <div>
      
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
      <span>
        Page{''}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{''}
      </span>
      <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
    </div>
  </>
  )
}
export default Table;