import {
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Box,
  Container,
  Center,
} from '@chakra-ui/react'
import { Motherboard } from '../style/icons'

const Home = () => {
  return (
    <>
      <Box bg='accent.50'>
        <Container maxW='container.xl'>
          <Grid h='350px' placeItems='center'>
            <GridItem>
              <Heading fontSize='5xl'>Welcome to the nicofz store</Heading>
              <Text fontSize='large'>We help you find the best part for your PC</Text>
              <Button
                my='1em'
                borderRadius='none'
                bg='accent.500'
                _hover={{ bg: 'accent.400' }}
                color='gray.100'
              >
                Build your PC
              </Button>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Container maxW='700px' py='20'>
        <Grid templateColumns='repeat(4, 1fr)' gap='20'>
          <GridItem>
            <Center>
              <Box w='80px' color='accent.500'>
                <Motherboard />
              </Box>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Box w='80px' color='accent.500'>
                <Motherboard />
              </Box>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Box w='80px' color='accent.500'>
                <Motherboard />
              </Box>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Box w='80px' color='accent.500'>
                <Motherboard />
              </Box>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Box w='80px' color='accent.500'>
                <Motherboard />
              </Box>
            </Center>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default Home
