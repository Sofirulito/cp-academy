import React from 'react';
import ProcTypes from 'prop-types';

const Card = ({children, image, title, text}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
            <img src={image}/>
        </div>
    )
}

export default Card;

Card.procTypes = {
    title: ProcTypes.string.isRequired,
    image: ProcTypes.string,
    text: ProcTypes.string
}