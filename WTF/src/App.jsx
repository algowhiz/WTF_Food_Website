import './App.css'
import Nav from './Compenets/Nav'
import Body from './Compenets/Body'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Compenets/About';
import Contact from './Compenets/Contact';
import Cart from './Compenets/Cart';
import Error from './Compenets/Error';
import RestMenue from './Compenets/RestMenue';
function App() {
  

  return (
    <>
    <Router>
      <Nav />
      <Routes>
          <Route path="/" element={<Body />}  errorElement={<Error />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/rest/:resId" element={<RestMenue />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

