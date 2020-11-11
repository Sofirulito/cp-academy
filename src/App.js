import React from 'react';
import './App.css';
import { Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import Comments from './Components/Comments';
import Users from './Components/Users';

// const Greetings = (props) =>  <h1>Hello {props.name}</h1> 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            Contact 
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">New contact</Nav.Link>
          </Nav>
        </Navbar>
      </header>
      <Container fluid="lg">
        <Row>
          <Col xs="4">
            <Users/>
          </Col>
          <Col xs="8">
            <Comments/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
