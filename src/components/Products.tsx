import { Box, Container, Flex } from '@chakra-ui/react'
import Filter from '../components/Filter'
import FilterResult from '../components/FilterResult'

const Products = () => {
  return (
    <Container maxW='container.xl' py='5' minH='calc(100vh - 75px - 60px)'>
      <Flex justifyContent='space-between'>
        <Box w='20%' p='2'>
          <Filter />
        </Box>
        <Box w='78%' p='2'>
          <FilterResult />
        </Box>
      </Flex>
    </Container>
  )
}

export default Products
