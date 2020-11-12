import React from 'react';
import styled from 'styled-components';

const Comment = styled.div`
    display: inline-block;
    margin: 10px 10px 10px 0;
    border-radius: 10px;
    padding: 1rem;
    background: #FFF;
    width: calc(50% - 10px);

    @media (max-width: 768px) {
        width: 100%;
    }
`
const Email = styled.p`
    display: inline-block;
    font-size: 1em;
    padding: .5rem;
    border-radius: 5px;
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
class Comments extends React.Component {
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

export default Comments;