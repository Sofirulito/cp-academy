import React from 'react';
import styled from 'styled-components';
import CommentItem from './CommentItem'

const List = styled.div`
    column-count: 2;
    column-gap: 20px;

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
            .then(data => this.setState({ comments: data }));
    }

    render(){ 
        return(
            <List>
                <React.Fragment>
                    {this.state.comments == "" ?
                        <div>
                            <p>No hay comentarios</p>
                        </div> : this.state.comments.slice(0, 40).map(comment =>(
                            <CommentItem  {...comment} key={comment.id} />
                        ))
                    }
                </React.Fragment>
            </List>
        )
    }
    
}

export default CommentList