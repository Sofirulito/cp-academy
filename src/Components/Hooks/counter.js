import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useColor from '../Hooks/useColor'

const Count = styled.div`
  padding: 2vw;
  margin: 0 auto;
  max-width: 50%;
  text-align: center
`

const CountNumb = styled.b`
  display: block;
  font-size: 2rem;
`

const CountButton = styled.button`
  background: palevioletred;
  color: #FFF;
  font-size: 1em;
  margin: 1em;
  cursor: pointer;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    return () => {
      document.title = 'React App'
    }
  }, [count]);

  const [color] = useColor()

  return (
    <Count style={{backgroundColor: color}}>
      <p>Presiona la tecla <b>'C'</b> para cambiar el color de fondo</p>
      <br/>
      <CountNumb>{count}</CountNumb>
      <CountButton onClick={() => setCount(count + 1)}>Increment <b>+</b></CountButton>
      <CountButton onClick={() => setCount(count - 1)}>Decrement <b>-</b></CountButton>
    </Count>
  );
}

export default Counter;