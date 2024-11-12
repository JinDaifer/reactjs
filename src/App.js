import React from 'react';
import {HashRouter, Link, Route, Routes} from 'react-router-dom';
import './App';
import Home from './Home';
import Chess from './Chess';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/reactjs' element={<Home />}>
        </Route>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/Chess' element={<Chess />}>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
