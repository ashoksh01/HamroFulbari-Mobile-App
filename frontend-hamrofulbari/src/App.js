import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Frontend from './Layout/frontend';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Frontend/>
    </div>
  </BrowserRouter>
  );
}

export default App;
