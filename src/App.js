import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'
import CommentList from './Components/Comments/CommentList ';
import welcome from './images/welcome.jpg';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="App-container"> 
          <Switch>
            <Route path="/comments">
              <CommentList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
         </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="Home">
      <img src={welcome} alt="welcome" className="Home-img"/>
    </div>
  );
}

export default App;
