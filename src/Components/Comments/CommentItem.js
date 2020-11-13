import React from 'react';
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

// Componente de clase
class CommentItem extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => this.setState({ comments: data }));
    }

    
    render() {
        return (
            <React.Fragment>
                {this.state.comments == "" ?
                    <Comment>
                        <Text>No hay comentarios</Text>
                    </Comment> : this.state.comments.slice(0, 20).map(item => (
                        <Comment key={item.id}>
                            <Email>{item.email}</Email>
                            <Name>{item.name}</Name>
                            <Text>{item.body}</Text>
                        </Comment>
                    ))}
            </React.Fragment>
        )
    }
}

export default CommentItem;