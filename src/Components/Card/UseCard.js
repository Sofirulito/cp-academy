import React, { useEffect, useState } from 'react';
import Card from './CommentCard';

// uso de api con hooks
function Comments(){
    const [comments, setComment] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
            .then(response => response.json())
            .then(info => setComment(info))
    }, [])

    console.log('State', comments)

    return(
        <>
            <h1 style={{margin: '20px'}}>Lista de comentarios con HOOKS</h1>
            {comments.map(comment => (
                <Card key={comment.id} {...comment}>
                    {comment.body}
                </Card>
            ))}
        </>
    )
}

export default Comments