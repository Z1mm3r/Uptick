import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import StreetView from './screens/StreetView'

function App() {
  return (
    <div className="App">
      <Header/>
      <StreetView/>
    </div>
  );
}

export default App;
