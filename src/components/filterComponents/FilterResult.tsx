import { HStack, Spacer, Box } from '@chakra-ui/react'
import ProductTable from '../ProductTable'

const FilterResult = () => {
  return (
    <>
      <HStack>
        <Spacer />
      </HStack>
      <Box>
        <ProductTable
          unMemoizedData={[
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
          ]}
        />
      </Box>
    </>
  )
}

export default FilterResult
