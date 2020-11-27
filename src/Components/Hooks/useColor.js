import { useState, useEffect } from 'react';

export default function useColor(){
    const [color, setColor] = useState('#FFF')

    useEffect(() =>{
        function onKeyUp(event){
            if(event.keyCode === 67){
                setColor('#DDD')
            } else{
                setColor('#FFF')
            }
        }

        window.addEventListener('keyup', onKeyUp);

        // borro efecto
        return() => {
            window.removeEventListener('keyup', onKeyUp)
        }
    }, []);

    return [color]
} 
