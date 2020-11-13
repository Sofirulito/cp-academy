import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import CommentList from './Components/Comments/CommentList ';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-container">
        <CommentList />
      </div>
    </div>
  );
}

export default App;
