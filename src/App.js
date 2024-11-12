import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App';
import Home from './Home';
import Chess from './Chess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= {process.env.PUBLIC_URL +'/reactjs'} element={<Home/>}>
        </Route>
        <Route path={process.env.PUBLIC_URL +'/'} element={<Home/>}>
        </Route>
        <Route path={process.env.PUBLIC_URL +'/Chess'} element={<Chess/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
