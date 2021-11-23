import { HStack, Spacer, Box } from '@chakra-ui/react'
import ProductTable from '../ProductTable'
import ProductTableWithPagination from '../ProductTableWithPagination'

const data = [
  {
    id: '2oiiosdvso',
    name: 'Asrock a320m HDV',
    formFactor: 'm-Atx',
    memorySlots: 2,
    socket: 'AM4',
    price: 750000,
  },
  {
    id: 'ffhasikudfs',
    name: 'MSI B450-M',
    formFactor: 'Atx',
    memorySlots: 4,
    socket: 'AM4',
    price: 1500000,
  },
  {
    id: '2oiiosdvso',
    name: 'Asrock a320m HDV',
    formFactor: 'm-Atx',
    memorySlots: 2,
    socket: 'AM4',
    price: 750000,
  },
  {
    id: 'ffhasikudfs',
    name: 'MSI B450-M',
    formFactor: 'Atx',
    memorySlots: 4,
    socket: 'AM4',
    price: 1500000,
  },
  {
    id: '2oiiosdvso',
    name: 'Asrock a320m HDV',
    formFactor: 'm-Atx',
    memorySlots: 2,
    socket: 'AM4',
    price: 750000,
  },
  {
    id: 'ffhasikudfs',
    name: 'MSI B450-M',
    formFactor: 'Atx',
    memorySlots: 4,
    socket: 'AM4',
    price: 1500000,
  },
  {
    id: '2oiiosdvso',
    name: 'Asrock a320m HDV',
    formFactor: 'm-Atx',
    memorySlots: 2,
    socket: 'AM4',
    price: 750000,
  },
  {
    id: 'ffhasikudfs',
    name: 'MSI B450-M',
    formFactor: 'Atx',
    memorySlots: 4,
    socket: 'AM4',
    price: 1500000,
  },
  {
    id: '2oiiosdvso',
    name: 'Asrock a320m HDV',
    formFactor: 'm-Atx',
    memorySlots: 2,
    socket: 'AM4',
    price: 750000,
  },
  {
    id: 'ffhasikudfs',
    name: 'MSI B450-M',
    formFactor: 'Atx',
    memorySlots: 4,
    socket: 'AM4',
    price: 1500000,
  },
  {
    id: '2oiiosdvso',
    name: 'Asrock a320m HDV',
    formFactor: 'm-Atx',
    memorySlots: 2,
    socket: 'AM4',
    price: 750000,
  },
  {
    id: 'ffhasikudfs',
    name: 'MSI B450-M',
    formFactor: 'Atx',
    memorySlots: 4,
    socket: 'AM4',
    price: 1500000,
  },
  {
    id: '2oiiosdvso',
    name: 'Asrock a320m HDV',
    formFactor: 'm-Atx',
    memorySlots: 2,
    socket: 'AM4',
    price: 750000,
  },
  {
    id: 'ffhasikudfs',
    name: 'MSI B450-M',
    formFactor: 'Atx',
    memorySlots: 4,
    socket: 'AM4',
    price: 1500000,
  },
  {
    id: '2oiiosdvso',
    name: 'Asrock a320m HDV',
    formFactor: 'm-Atx',
    memorySlots: 2,
    socket: 'AM4',
    price: 750000,
  },
  {
    id: 'ffhasikudfs',
    name: 'MSI B450-M',
    formFactor: 'Atx',
    memorySlots: 4,
    socket: 'AM4',
    price: 1500000,
  },
  {
    id: '2oiiosdvso',
    name: 'Asrock a320m HDV',
    formFactor: 'm-Atx',
    memorySlots: 2,
    socket: 'AM4',
    price: 750000,
  },
  {
    id: 'ffhasikudfs',
    name: 'MSI B450-M',
    formFactor: 'Atx',
    memorySlots: 4,
    socket: 'AM4',
    price: 1500000,
  },
  {
    id: '2oiiosdvso',
    name: 'Asrock a320m HDV',
    formFactor: 'm-Atx',
    memorySlots: 2,
    socket: 'AM4',
    price: 750000,
  },
  {
    id: 'ffhasikudfs',
    name: 'MSI B450-M',
    formFactor: 'Atx',
    memorySlots: 4,
    socket: 'AM4',
    price: 1500000,
  },
]

const FilterResult = () => {
  return (
    <>
      <HStack>
        <Spacer />
      </HStack>
      <Box>
        <ProductTableWithPagination unMemoizedData={data} />
        {/* <ProductTable unMemoizedData={data} /> */}
      </Box>
    </>
  )
}

export default FilterResult
