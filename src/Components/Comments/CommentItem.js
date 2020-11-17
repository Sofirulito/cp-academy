import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Comment = styled.div`
    margin-bottom:20px;
    border-radius: 10px;
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    padding: 1rem;
    background: #FFF;
    min-height: 180px; 

    @media (max-width: 768px) {
        width: 100%;
    }
`
const Email = styled.p`
    display: inline-block;
    font-size: 1em;
    padding: .2rem .6rem;
    border-radius: 4px;
    border: 1px solid grey;
    color: palevioletred;
`
const Name = styled.b`
    display: block;
    margin: 5px 0;
`
const Text = styled.p`
    color: #333;
`

const CommentItem = props => {
    return (
        <Comment>
            <Email>{props.email}</Email>
            <Name>{props.name}</Name>
            <Text>{props.body}</Text>
        </Comment>
    );
}

CommentItem.propTypes = {
    email: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string
};

export default CommentItem;