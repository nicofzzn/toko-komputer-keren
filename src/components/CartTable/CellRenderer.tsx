import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Square,
} from '@chakra-ui/react'
import { Cell } from 'react-table'

type Prop = {
  cell: Cell<{ qty?: number }, any>
  rowIndex: number
  onQtyChange: (rowIndex: number, value: number) => void
}

const CellRenderer = ({ cell, onQtyChange, rowIndex }: Prop) => {
  switch (cell.column.id) {
    case 'img':
      return <Square size='70px' bg='whitesmoke' />
    case 'qty':
      return (
        <NumberInput min={1} defaultValue={cell.value | 1}>
          <NumberInputField
            value={cell.value}
            onChange={e => {
              onQtyChange(rowIndex, +e.target.value)
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper
              onClick={e => {
                onQtyChange(rowIndex, cell.value + 1)
              }}
            />
            <NumberDecrementStepper
              onClick={e => {
                onQtyChange(rowIndex, cell.value - 1)
              }}
            />
          </NumberInputStepper>
        </NumberInput>
      )
    case 'price':
      return cell.row.original.qty ? cell.value * cell.row.original.qty : cell.value
    default:
      return cell.render('Cell')
  }
}

export default CellRenderer
