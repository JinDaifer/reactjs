import React from 'react';
import {HashRouter, Link, Route, Routes} from 'react-router-dom';
import './App';
import Home from './Home';
import Chess from './Chess';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/reactjs' element={<div>Hola mundo</div>}>
        </Route>
        <Route path='/' element={<div>Hola m3333undo</div>}>
        </Route>
        <Route path='/Chess' element={<div>Hol4323434a mundo</div>}>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
