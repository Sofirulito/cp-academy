import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header/Header'
import CommentList from './Components/Comments/CommentList ';

function App() {

  const Container = styled.div`
    margin: 2vw auto;
    max-width: 95%;
    column-count: 2;
    column-gap: 20px;

    @media (max-width: 768px) {
      column-count: 1;
    }
  `
  return (
    <div className="App">
      <Header/>
      <Container>
        <CommentList />
      </Container>
    </div>
  );
}

export default App;
