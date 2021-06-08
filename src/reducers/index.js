import { combineReducers } from 'redux';
import commentReducer from './commentReducer';

// combinador de reducer
export default combineReducers({
    comments: commentReducer
})