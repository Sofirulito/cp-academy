// accion pura que toma un estado previo y una acción y la retorna en el siguiente estado
const initialState = {
    items: []
}

export default function(state = initialState, action){
    switch(action.type){
        default: return state;
    }
}