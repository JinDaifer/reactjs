import React from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import './App';
import Home from './Home';
import Chess from './Chess';

function RouteWithLocation() {
  console.log("Ruta actual:", process.env.PUBLIC_URL);  // Muestra la ruta actual en la consola
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <RouteWithLocation />
      <Routes>
        <Route path={process.env.PUBLIC_URL+'/'} element={<Home />} />
        <Route path= {process.env.PUBLIC_URL+'/Chess'} element={<Chess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
