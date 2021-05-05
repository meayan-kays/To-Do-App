import { ADD_TASK, EDIT_TASK, DELETE_TASK, FILTER_TASK} from './actionTypes'

export const addTask = newTask => {

    return{
        type : ADD_TASK,
        payload : newTask
    }
}

export const editTask = (updatedTask) => {
    return{
        type : EDIT_TASK,
        payload : updatedTask
    }
}

export const deleteTask = (id) => {
    return{
        type : DELETE_TASK,
        payload : id
    }
}

export const filterTask = (id) => {
    return{
        type : FILTER_TASK,
        payload : id
    }
}