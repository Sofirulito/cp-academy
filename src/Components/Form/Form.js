import react, { useEffect, useState } from 'react';
import './form.css'

// Formulario con Hooks 

function Formulario(){
    const [data, setData] = useState({
        name: '',
        email: '',
        body: ''
    })

    useEffect(() => {
        sendComments()
        return(
            document.getElementsByTagName('input').value = 'empty'
        )
    }, [])

    const sendComments = () => {
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            setData({
                name: '',
                email: '',
                body: ''
            });
        })
        .catch((err) => console.log('error'))
    }

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        sendComments()
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input name="name" type="text" onChange={handleChange} value={data.name} required/>
                </label>
                <label>
                    Email
                    <input name="email" type="email" onChange={handleChange} value={data.email} />
                </label>
                <label>
                    Body
                    <input name="body" type="text" onChange={handleChange} value={data.body} />
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    )
}

export default Formulario
