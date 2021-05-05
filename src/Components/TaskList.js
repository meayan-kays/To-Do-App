import React from 'react'
import { connect } from 'react-redux'
import Task from './Task'

const TaskList = (props) => {
    return (
        <div>
            {
                props.todos.map(el => (<Task todo={el} key={el.id}/>))
            } 
        </div>
    )
}

const mapStateToProps = (state) => {
    return {todos : state.todos}
}

export default connect(mapStateToProps) (TaskList);
