import React from 'react';
import {BrowserRouter, useLocation , Route, Routes} from 'react-router-dom';
import './App';
import Home from './Home';
import Chess from './Chess';

function RouteWithLocation() {
  const location = useLocation();
  console.log("Ruta actual:", location.pathname);  // Muestra la ruta actual en la consola
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <RouteWithLocation />
      <Routes>
        <Route path='/reactjs' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/Chess' element={<Chess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
