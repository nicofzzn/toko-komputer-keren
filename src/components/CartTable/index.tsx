import { useMemo } from 'react'
import { Box, Table, Tbody, Tr, Td } from '@chakra-ui/react'
import { useTable, Column, useRowState } from 'react-table'
import CellRenderer from './CellRenderer'

type Prop<T> = {
  unMemoizedData: T[]
  onQtyChange: (rowIndex: number, value: number) => void
}

const CartTable = <
  T extends {
    id: string
    img: string
    name: string
    qty: number
    price: number
  }
>({
  unMemoizedData,
  onQtyChange,
}: Prop<T>) => {
  const data = useMemo(() => unMemoizedData, [unMemoizedData])

  const columns: readonly Column<object>[] = useMemo(
    () => [
      {
        Header: 'id',
        accessor: 'id',
      },
      {
        Header: '',
        accessor: 'img',
      },
      {
        Header: 'name',
        accessor: 'name',
      },
      {
        Header: 'qty',
        accessor: 'qty',
      },
      {
        Header: 'price',
        accessor: 'price',
      },
    ],
    []
  )

  function updateMyData() {}

  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: ['id'],
      },
      updateMyData,
    },
    useRowState
  )

  return (
    <Box>
      <Table size='lg' {...getTableProps()}>
        <Tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row, rowIndex) => {
              // Prepare the row for display
              prepareRow(row)
              return (
                // Apply the row props
                <Tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map(cell => {
                      // Apply the cell props
                      return (
                        <Td p='3' {...cell.getCellProps()} fontSize='lg'>
                          <CellRenderer
                            cell={cell}
                            onQtyChange={onQtyChange}
                            rowIndex={rowIndex}
                          />
                        </Td>
                      )
                    })
                  }
                </Tr>
              )
            })
          }
        </Tbody>
      </Table>
    </Box>
  )
}

export default CartTable
