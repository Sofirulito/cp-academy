import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    name: '',
                    email: '',
                    body: ''
                });
            })
            .catch(error => console.error(error));
    }

    render() {
        console.log(this.state);

        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Name
                    <input name="name" type="text" value={this.state.name} onChange={this.onChange} />
                </label>
                <label>
                    Email
                    <input name="email" type="email" value={this.state.email} onChange={this.onChange} />
                </label>
                <label>
                    Body
                    <input name="body" type="text" value={this.state.body} onChange={this.onChange} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        )
    }
}

export default Form