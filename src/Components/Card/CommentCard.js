import React from 'react';
import styled from 'styled-components';

const CommentCard = styled.div`
    margin: 20px;
    border-radius: 10px;
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    padding: 1rem;
    background: #FFF;
    display: inline-block;
    width: calc(100% / 4);

    @media (max-width: 768px) {
        width: 100%;
    }
`

const Card = props =>{
    return(
        <CommentCard>
            <b>{props.name}</b>
            <p>{props.email}</p>
            <p>{props.body}</p>
        </CommentCard>
    )
}

export default Card