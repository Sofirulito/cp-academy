import React from 'react';
import styled from 'styled-components';
import CommentItem from './CommentItem'

const List = styled.div`
    margin: 0 auto;
    padding: 2vw;
    max-width: 95%;
    column-count: 2;
    column-gap: 20px;

    @media (max-width: 768px) {
        column-count: 1;
    }
`

function CommentList(){
    return(
        <List>
            <CommentItem />
        </List>
    )
}

export default CommentList