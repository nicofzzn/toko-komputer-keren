import { Heading, Container, Flex, VStack, Divider, Spacer, Box } from '@chakra-ui/react'

const Cart = () => {
  return (
    <Container maxW='container.xl' py='10' minH='calc(100vh - 75px - 60px)'>
      <Heading size='md'>Cart</Heading>
      <Flex bg='red'>
        <Box flex='5' bg='tomato'>
          1
        </Box>
        <Spacer />
        <Box flex='1' bg='lime'>
          2
        </Box>
      </Flex>
    </Container>
  )
}

export default Cart
