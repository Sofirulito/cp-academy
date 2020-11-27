import react, { useEffect, useState } from 'react';
import './form.css'
import useColor from '../Hooks/useColor'

// Formulario con Hooks 
function Formulario() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        body: ''
    })

    // esto hace nada realmente, hace un envío de datos vacío 
    useEffect(() =>{
        sendComment()
    }, [])

    // funcion para envío de comentario
    const sendComment = () =>{
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then(data => setFormData({
                name: '',
                email: '',
                body: ''
            }))
            .catch((err) => console.log(err))
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        sendComment()
    }

    const [color] = useColor()

    return (
        <div className="form">  
            <p>Presiona la tecla <b>'C'</b> para cambiar el color de fondo</p>
            <form onSubmit={handleSubmit} style={{backgroundColor: color}}>
                <label>
                    Name
                    <input name="name" type="text" onChange={handleChange} value={formData.name} required />
                </label>
                <label>
                    Email
                    <input name="email" type="email" onChange={handleChange} value={formData.email} />
                </label>
                <label>
                    Body
                    <input name="body" type="text" onChange={handleChange} value={formData.body} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
        
    )
}

export default Formulario
