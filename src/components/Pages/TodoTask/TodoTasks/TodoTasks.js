import React, {useEffect} from "react"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ReactLoading from 'react-loading'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import { Modal } from "../../../../UI/Modal/Modal"
import vlidationInfo from '../TaskValidation'
import useForm from '../CreateTask/UseCreateTaskForm'



import CreateTask from "../CreateTask/CreateTask";
import "./TodoTasks.css";
import { 
  taskList,
  taskToggleComplete,
  taskDelete,
  taskCreate,
  taskUpdate
} from "../../../../Services/Actions/TaskActions";




const TodoTasks = ({
    user,
    loading,
    taskList,
    taskItems,
    taskCreate,
    taskUpdate,
    taskDelete,
    taskToggleComplete}) => {
     
    const {task, onChangeHandler, onSubmitHandler, searchHandler, editingTask, searchValue, errors, modalShow, modalHide, edit, show} = useForm(vlidationInfo, taskCreate, taskUpdate)

    useEffect(() => {
      document.title = "Task list" 
    }, [])


    useEffect(() => {
      taskList(searchValue)
  }, [taskList, taskDelete, searchValue])

return  <>
  <Modal show={show}>
    <CreateTask 
    edit={edit}
    task={task} 
    errors={errors} 
    modalHide={modalHide} 
    onChangeHandler={onChangeHandler}
    onSubmitHandler={onSubmitHandler}/>
  </Modal>
      <div className="page-header">
        <h2>{user.username}'s Task list</h2>
        <strong>{new Date().toLocaleDateString()}</strong>
      </div>
      <div className="task-container">
          <div className="task-item task-header">
                  <div className="task-description task-header2">
                      <h2>Task description</h2>
                      <div className="search-task">
                      <DatePickerComponent name="timestamp" value={searchValue.timestamp} placeholder="Search your task by date" onChange={searchHandler}/>
                      </div>
                  </div>
                  <div className="task-date">
                    <h2>Date</h2>
                  </div>
                  <div className="task-action">
                    <button onClick={modalShow} className="task--create--btn btn--info" >Create</button>
                    {user.user_type === "Admin" && <Link to='/all-tasks' className="task--create--btn btn--info" >View all</Link>}
                  </div>
            </div>
      
              {loading ? (<ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto'}} type='spin'/>) : (
  
                  taskItems.map(task_item => (
                            <div className="task-item" key={task_item.id}>
                                <div className="task-description">
                                    <p>{ task_item.task_description }</p>
                                    <div className={task_item.completed ? "disc-overlay toggle-task" : "disc-overlay"}></div> 
                                </div>
                            <div className="task-date">{new Date(task_item.timestamp).toLocaleString()}</div>
                                  <div className="task-action">
                                      <button className="task--btn task-delete--btn" onClick={() => taskDelete(task_item.id)} title="delete task item">
                                        <i className="far fa-times-circle"></i>
                                      </button>
                                      <button onClick={() => editingTask(task_item)} className="task--btn task-complete--btn" title="update task item">
                                        <i className="far fa-edit"></i>
                                      </button>
                                      <button className="task--btn task-complete--btn" onClick={() => taskToggleComplete(task_item)} title="toggle complete !">
                                        <i className="far fa-check-circle"></i>
                                      </button>
                                  </div>
                          </div>
                  ))
              
              )}
      </div>
    </>

};
const mapStateToProps = state => ({
  taskItems: state.taskReducer.taskItems,
  loading: state.taskReducer.loading,
  user: state.AuthReducer.user
})
export default connect(mapStateToProps, {taskList, taskToggleComplete, taskDelete, taskCreate, taskUpdate})(TodoTasks);
