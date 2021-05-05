import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../Redux/Action/action';

const AddTask = (props) => {
    const [newTaskDescription, setNewTaskDescription] = useState('');
    let id = props.todos.length;

    const handleAdd = () => {
        if(newTaskDescription.trim() === ""){
            alert("Please Add Your Task ...")
        }
        else{
            const newTask = {
                id : ++id,
                description : newTaskDescription,
                isDone : false
            }
            props.addNewTask(newTask)
            setNewTaskDescription('')
        }
        
    }

    return (
        <div className="add-task">
            <input type="text" placeholder="Add New Task ..." 
            value={newTaskDescription} onChange = {(e) => setNewTaskDescription(e.target.value)} />
            <button className="add-btn" onClick={handleAdd}>Add</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewTask : todo => dispatch(addTask(todo))
    }
    
}

const mapStateToProps = (state) => {
    return {
        todos : state.todos
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (AddTask);
