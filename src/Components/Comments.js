import React from 'react';

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
                <h3>Comentarios de jsonplace</h3>
                <ul>
                    {this.state.comments == "" ? 'No hay comentarios' : this.state.comments.slice(0, 10).map(item => (
                        <li key={item.id}>{item.id}. {item.body}</li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}

export default Comments;