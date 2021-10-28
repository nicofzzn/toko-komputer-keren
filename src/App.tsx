import { ChakraProvider } from '@chakra-ui/react'
import theme from './style/theme'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '@fontsource/mulish'
// components
import Navbar from './components/Navbar'
import Home from './screen/Home'
import Footer from './components/Footer'
import Products from './screen/Products'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products/:category?'>
          <Products />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </ChakraProvider>
)
