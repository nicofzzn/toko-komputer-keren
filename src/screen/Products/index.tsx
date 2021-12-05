import { Box, Container, Flex, VStack, Divider, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ProductList from '../../components/ProductList'
import FilterCpu from '../../components/FilterComponents/FilterCpu'
import FilterPrice from '../../components/FilterComponents/FilterPrice'
import FilterMotherboard from '../../components/FilterComponents/FilterMotherboard'
import FilterGpu from '../../components/FilterComponents/FilterGpu'
import FilterRam from '../../components/FilterComponents/FilterRam'
import FilterStorage from '../../components/FilterComponents/FilterStorage'
import FilterPsu from '../../components/FilterComponents/FilterPsu'
import FilterMonitor from '../../components/FilterComponents/FilterMonitor'
import FilterCpuCooler from '../../components/FilterComponents/FilterCpuCooler'
import FilterCase from '../../components/FilterComponents/FilterCase'

const Products = () => {
  const { category } = useParams()

  function categoryFilter() {
    switch (category) {
      case 'cpu':
        return <FilterCpu />
      case 'motherboard':
        return <FilterMotherboard />
      case 'gpu':
        return <FilterGpu />
      case 'ram':
        return <FilterRam />
      case 'storage':
        return <FilterStorage />
      case 'psu':
        return <FilterPsu />
      case 'monitor':
        return <FilterMonitor />
      case 'cpu-cooler':
        return <FilterCpuCooler />
      case 'case':
        return <FilterCase />
      default:
        return null
    }
  }

  return (
    <Container maxW='container.xl' py='5' minH='calc(100vh - 75px - 60px)'>
      {categoryFilter() ? (
        <Flex justifyContent='space-between'>
          <Box w='20%'>
            <Box mb='2' fontWeight='medium'>
              Filter
            </Box>
            <VStack alignItems='flex-start'>
              <Divider borderColor='gray.400' />
              {categoryFilter()}
              <Divider borderColor='gray.500' />
              <FilterPrice />
            </VStack>
          </Box>
          <Box w='78%' p='2'>
            <ProductList />
          </Box>
        </Flex>
      ) : (
        <Text>The page you requested could not be found</Text>
      )}
    </Container>
  )
}

export default Products
