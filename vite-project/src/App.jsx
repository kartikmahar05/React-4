import React from 'react';
import Nav from './Nav';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Location from './Location';
const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Location' element={<Location/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
    )

}

export default App