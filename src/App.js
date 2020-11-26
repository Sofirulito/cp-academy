import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Form from './Components/Form';
import CommentList from './Components/Comments/CommentList ';
import welcome from './images/welcome.jpg';
import Comments from './Components/Card/UseCard'
import Formulario from './Components/Form/Form'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="App-container"> 
          <Switch>
            <Route path="/Form">
              <Formulario />
            </Route>
            <Route path="/comments">
              <CommentList />
              <Comments />
            </Route>
            <Route path="/">
              <Home />
              <Form />
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
