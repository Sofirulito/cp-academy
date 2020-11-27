import React, { useState, useEffect } from 'react';

function ChangeColor() {
    const [color, setColor] = useState(false);

    useEffect(() => {
        function PressKey(event) {
            if(event.keyCode === 67) {
                setColor('red')
            } else{
                setColor('white')
            }
        }

        window.addEventListener('keyup', PressKey);

    }, [])


    return (
        <div style={{backgroundColor: color}}>
            <p>Mi color es: {color}</p>
        </div>
    );
}

export default ChangeColor;