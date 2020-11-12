import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import List from './Components/Comments/List';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-container">
        <List />
      </div>
    </div>
  );
}

export default App;
