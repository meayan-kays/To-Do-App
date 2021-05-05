import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, filterTask} from '../Redux/Action/action';
import EditTask from './EditTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FaRegCheckCircle} from 'react-icons/fa'
import { BsFillCaretRightFill } from 'react-icons/bs'


const Task = (props) => {
    return (
        <div className="task">
            <h4 className={props.todo.isDone ? 'done' : 'unDone'}><BsFillCaretRightFill />  {props.todo.description}</h4>    
            <div className="task-actions">
                <EditTask todo={props.todo}/>
                <button className="delete" onClick={() => props.deleteCurrentTask(props.todo.id)}>
                    <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
                </button>
                <button className="filter" onClick={() => props.filterTask(props.todo.id)}>
                    {props.todo.isDone ? 
                    <FaRegCheckCircle className="un-complete" /> : <FontAwesomeIcon className="complete" icon={faCheckCircle} /> }
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCurrentTask : id => dispatch(deleteTask(id)),
        filterTask : id => dispatch(filterTask(id)),
    }
}

export default connect(null,mapDispatchToProps) (Task)
