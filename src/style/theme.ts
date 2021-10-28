import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { LinkStyle as Link } from './LinkStyle'
import { ContainerStyle as Container } from './ContainerStyle'

const theme = extendTheme({
  fonts: {
    heading: 'Mulish',
    body: 'Mulish',
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#fff',
        color: 'gray.600',
        minHeight: '100vh',
      },
    },
  },
  colors,
  components: {
    Link,
    Container,
  },
})

export default theme
