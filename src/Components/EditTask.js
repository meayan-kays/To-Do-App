import React,{ useState } from 'react'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editTask } from '../Redux/Action/action'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenFancy} from '@fortawesome/free-solid-svg-icons'

const EditTask = (props) => {
    const [taskDescription , setTaskDescription] = useState ('')
    const [showModal , setShowModal] = useState(false)

    const handleShow = () => {setShowModal(true)}
    const closeShow = () => {setShowModal(false)} 

    const handleSubmit =(e)=>{
        e.preventDefault()
            if(taskDescription.trim() === ""){
                alert("Please Enter Your Updated Task...")
            }
            else{
                const updateTask = { 
                ...props.todo , 
                description : taskDescription
                }
                props.editTask(updateTask) 
            }
        setTaskDescription('')
        closeShow()    
    }

    return (
        <div>
            <button className="edit" onClick={handleShow}>
                <FontAwesomeIcon className="edit-icon" icon={faPenFancy} />
            </button>
            <Modal  className="Modal" show={showModal} onHide={closeShow}
            aria-labelledby="contained-modal-title-vcenter"centered>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title" id="contained-modal-title-vcenter">Update Your Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" placeholder="Enter The New Task ..." 
                    value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <button className="update" onClick={handleSubmit}>Update</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {editTask : id => dispatch(editTask(id))}
}

export default connect(null,mapDispatchToProps) (EditTask);
