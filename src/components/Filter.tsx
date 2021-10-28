import { Box, VStack, Divider } from '@chakra-ui/react'
import CategoryFilter from './CategoryFilter'
import PriceFilter from './PriceFilter'

const Filter = () => {
  return (
    <>
      <Box mb='2' fontWeight='medium'>
        Filter
      </Box>
      <VStack alignItems='flex-start'>
        <Divider bg='gray.500' />
        <CategoryFilter />
        <Divider bg='gray.500' />
        <PriceFilter />
      </VStack>
    </>
  )
}

export default Filter
