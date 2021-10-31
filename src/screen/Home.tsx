import {
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Box,
  Container,
  Center,
  VStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {
  Motherboard,
  Cpu,
  Fan,
  Gpu,
  Monitor,
  Storage,
  Ram,
  Psu,
  Mouse,
  Keyboard,
} from '../style/icons'

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
      <Container py='20' maxW='900px'>
        <Text ml='8' mb='10' fontSize='1.5em'>
          Find product by categories
        </Text>
        <Grid templateColumns='repeat(4, 1fr)' gap='4em'>
          <GridItem>
            <Center>
              <Link to='products/motherboard'>
                <VStack
                  p='2'
                  _hover={{
                    color: 'accent.500',
                    cursor: 'pointer',
                    position: 'relative',
                    transform: 'translateY(-3px)',
                    transitionDuration: '.1s',
                  }}
                  transitionDuration='.1s'
                >
                  <Box w='80px'>
                    <Motherboard />
                  </Box>
                  <Text>Motherboard</Text>
                </VStack>
              </Link>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Link to='products/cpu'>
                <VStack
                  p='2'
                  _hover={{
                    color: 'accent.500',
                    cursor: 'pointer',
                    position: 'relative',
                    transform: 'translateY(-3px)',
                    transitionDuration: '.1s',
                  }}
                  transitionDuration='.1s'
                >
                  <Box w='80px'>
                    <Cpu />
                  </Box>
                  <Text>CPU</Text>
                </VStack>
              </Link>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <VStack
                p='2'
                _hover={{
                  color: 'accent.500',
                  cursor: 'pointer',
                  position: 'relative',
                  transform: 'translateY(-3px)',
                  transitionDuration: '.1s',
                }}
                transitionDuration='.1s'
              >
                <Box w='80px'>
                  <Gpu />
                </Box>
                <Text>GPU</Text>
              </VStack>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <VStack
                p='2'
                _hover={{
                  color: 'accent.500',
                  cursor: 'pointer',
                  position: 'relative',
                  transform: 'translateY(-3px)',
                  transitionDuration: '.1s',
                }}
                transitionDuration='.1s'
              >
                <Box w='80px'>
                  <Ram />
                </Box>
                <Text>RAM</Text>
              </VStack>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <VStack
                p='2'
                _hover={{
                  color: 'accent.500',
                  cursor: 'pointer',
                  position: 'relative',
                  transform: 'translateY(-3px)',
                  transitionDuration: '.1s',
                }}
                transitionDuration='.1s'
              >
                <Box w='80px'>
                  <Storage />
                </Box>
                <Text>Storage</Text>
              </VStack>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <VStack
                p='2'
                _hover={{
                  color: 'accent.500',
                  cursor: 'pointer',
                  position: 'relative',
                  transform: 'translateY(-3px)',
                  transitionDuration: '.1s',
                }}
                transitionDuration='.1s'
              >
                <Box w='80px'>
                  <Psu />
                </Box>
                <Text>Power Supply</Text>
              </VStack>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <VStack
                p='2'
                _hover={{
                  color: 'accent.500',
                  cursor: 'pointer',
                  position: 'relative',
                  transform: 'translateY(-3px)',
                  transitionDuration: '.1s',
                }}
                transitionDuration='.1s'
              >
                <Box w='80px'>
                  <Monitor />
                </Box>
                <Text>Monitor</Text>
              </VStack>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <VStack
                p='2'
                _hover={{
                  color: 'accent.500',
                  cursor: 'pointer',
                  position: 'relative',
                  transform: 'translateY(-3px)',
                  transitionDuration: '.1s',
                }}
                transitionDuration='.1s'
              >
                <Box w='80px'>
                  <Fan />
                </Box>
                <Text>Fan</Text>
              </VStack>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <VStack
                p='2'
                _hover={{
                  color: 'accent.500',
                  cursor: 'pointer',
                  position: 'relative',
                  transform: 'translateY(-3px)',
                  transitionDuration: '.1s',
                }}
                transitionDuration='.1s'
              >
                <Box w='80px'>
                  <Mouse />
                </Box>
                <Text>Mouse</Text>
              </VStack>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <VStack
                p='2'
                _hover={{
                  color: 'accent.500',
                  cursor: 'pointer',
                  position: 'relative',
                  transform: 'translateY(-3px)',
                  transitionDuration: '.1s',
                }}
                transitionDuration='.1s'
              >
                <Box w='80px'>
                  <Keyboard />
                </Box>
                <Text>Keyboard</Text>
              </VStack>
            </Center>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default Home
