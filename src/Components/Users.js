import React from 'react';

// Componente de clase
class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({ users: data }));
    }

    render() {
        return (
            <React.Fragment>
                {this.state.users == "" ? 'No tienes contactos' : this.state.users.map(item => (
                    <ul key={item.id}>
                        <li>{item.name}</li>
                        <li>email: {item.email}</li>
                        <li>Phone: {item.phone}</li>
                    </ul>
                ))}
            </React.Fragment>
        )
    }
}

export default Users;