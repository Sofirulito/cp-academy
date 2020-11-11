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
                <h3>Mis contactos</h3>
                <ul className="userList">
                    {this.state.users == "" ? 'No tienes contactos' : this.state.users.map(item => (
                        <li key={item.id}>{item.name}<br />{item.email}</li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}

export default Users;