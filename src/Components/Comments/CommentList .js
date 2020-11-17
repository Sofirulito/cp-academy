import React from 'react';
import styled from 'styled-components';
import CommentItem from './CommentItem'

const List = styled.div`
    column-count: 2;
    column-gap: 20px;
    background-color: #d2d2d2;
    padding: 2vw;
    
    @media (max-width: 768px) {
        column-count: 1;
    }
`
// Componente de clase
class CommentList extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => this.setState({ comments: data.slice(0, 40) }));
    }

    render(){ 
        return(
            <List>
                <React.Fragment>
                    {this.state.comments == "" ?
                        <div>
                            <p>No hay comentarios</p>
                        </div> : this.state.comments.map(comment =>(
                            <CommentItem  {...comment} key={comment.id}>
                                {comment.body}
                            </CommentItem>
                        ))
                    }
                </React.Fragment>
            </List>
        )
    }
    
}

export default CommentList