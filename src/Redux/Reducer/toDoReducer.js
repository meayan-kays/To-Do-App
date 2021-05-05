import { ADD_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "../Action/actionTypes";

const initialState = [];

const toDoReducer= (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK :
            return [...state, action.payload]
        case DELETE_TASK :
            return state.filter(el => el.id !== action.payload)
        case FILTER_TASK :
            return state.map(el => el.id === action.payload ? {...el, isDone :!el.isDone} : el)
        case EDIT_TASK :
            return state.map(el => el.id === action.payload.id ? action.payload : el)
        default :
            return state
    }
}

export default toDoReducer;