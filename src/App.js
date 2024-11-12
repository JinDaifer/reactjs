import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App';
import Home from './Home';
import Chess from './Chess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/reactjs' element={<Home />}>
        </Route>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/Chess' element={<Chess />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
