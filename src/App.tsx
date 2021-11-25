import { ChakraProvider } from '@chakra-ui/react'
import theme from './style/theme'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '@fontsource/mulish'
// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './screen/Home'
import Products from './screen/Products'
import Login from './screen/Login'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Navbar />
        </Route>
      </Switch>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products/:category?'>
          <Products />
        </Route>
      </Switch>

      <Route exact path='/'>
        <Footer />
      </Route>
    </Router>
  </ChakraProvider>
)
