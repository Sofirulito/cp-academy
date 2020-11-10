import './App.css';
import { Navbar, Nav } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="">
            Contact 
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="">New contact</Nav.Link>
          </Nav>
        </Navbar>
      </header>
    </div>
  );
}

export default App;
