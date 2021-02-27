import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
//components:
import Header from './components/Header/Header'
import { Content } from './components/Content/Content';

function App() {
  return (
    <div className="container">
      <Header />
      <Route exact path="/" component={ Content } /> 
    </div>
  );
}

export default App;
