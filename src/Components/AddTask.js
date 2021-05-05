import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../Redux/Action/action';

const AddTask = (props) => {
    const [newTask, setNewTask] = useState('');
    let id = props.todos.length;

    const handleAdd = () => {
        const task = {
            id : ++id,
            description : newTask,
            isDone : false
        }
        props.addNewTask(task)
        setNewTask('')
    }

 
     

    return (
        <div className="add-task">
            <input type="text" placeholder="Add New Task ..." 
            value={newTask} onChange = {(e) => setNewTask(e.target.value)} />
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
