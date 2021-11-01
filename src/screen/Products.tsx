import { Box, Container, Flex, VStack, Divider } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import FilterResult from '../components/FilterResult'
import FilterCpu from '../components/FilterCpu'
import PriceFilter from '../components/PriceFilter'
import FilterMotherboard from '../components/FilterMotherboard'
import FilterGpu from '../components/FilterGpu'
import FilterRam from '../components/FilterRam'
import FilterStorage from '../components/FilterStorage'
import FilterPsu from '../components/FilterPsu'
import FilterMonitor from '../components/FilterMonitor'
import FilterCpuCooler from '../components/FilterCpuCooler'
import FilterCase from '../components/FilterCase'

const Products = () => {
  const { category } = useParams<{ category: string }>()

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
        return <p>kategori</p>
    }
  }

  return (
    <Container maxW='container.xl' py='5' minH='calc(100vh - 75px - 60px)'>
      <Flex justifyContent='space-between'>
        <Box w='20%'>
          <Box mb='2' fontWeight='medium'>
            Filter
          </Box>
          <VStack alignItems='flex-start'>
            <Divider borderColor='gray.400' />
            {categoryFilter()}
            <Divider borderColor='gray.500' />
            <PriceFilter />
          </VStack>
        </Box>
        <Box w='78%' p='2'>
          <FilterResult />
        </Box>
      </Flex>
    </Container>
  )
}

export default Products
