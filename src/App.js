import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import PortFolio from './pages/PortFolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <>
      <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/competences" element={<Knowledges />}/>
       <Route path="/portfolio" element={<PortFolio />}/>
       <Route path="/contact" element={<Contact />}/>
       <Route path="/portfolio" element={<PortFolio />}/>
       <Route patch="*" component={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App