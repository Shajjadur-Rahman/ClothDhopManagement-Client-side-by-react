import React, {useState, useEffect, useCallback } from "react"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ReactLoading from 'react-loading'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import { 
      allTaskList,
    } from "../../../../Services/Actions/TaskActions"
import "./TodoTasks.css";


const TodoTasks = ({
    loading,
    taskItems,
    user,
    allTaskList,
    taskToggleComplete,
    taskDelete}) => {
      
   

    const [searchValue, setSearchValue] = useState({
      timestamp: null
    })
    
    useEffect(() => {
      document.title = "Task list" 
    }, [])

    useEffect(() => {
      
        allTaskList(searchValue)
  
  }, [allTaskList, taskDelete, searchValue])






const searchHandler = useCallback(event => {
  setSearchValue({
    ...searchValue,
    [event.target.name]: event.target.value
  })
}, [searchValue])



return  <>

      <div className="page-header">
        <h2>All Employee's Task list</h2>
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
                    <Link to='/task-list' className="task--create--btn btn--info" >Back</Link>
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
                                  {
                                      user.user_type === "Admin" ? (
                                        <button className="task--btn task-delete--btn" style={{cursor: 'not-allowed'}} title="You have no permission ">
                                            <i className="far fa-times-circle"></i>
                                        </button>
                                       
                                      ) : (
                                        <button className="task--btn task-delete--btn" onClick={() => taskDelete(task_item.id)} title="delete task item">
                                            <i className="far fa-times-circle"></i>
                                        </button>
                                      )
                                    }
                                      
                                      {
                                      user.user_type === "Admin" ? (
                                        <button className="task--btn task-complete--btn" style={{cursor: 'not-allowed'}} title="You have no permission ">
                                            <i className="far fa-edit"></i>
                                        </button>
                                        
                                      ) : (
                                        <button className="task--btn task-complete--btn" title="update task item">
                                          <i className="far fa-edit"></i>
                                        </button>
                                      )
                                    }  
                                      
                                      {
                                      user.user_type === "Admin" ? (
                                        <button className="task--btn task-complete--btn" style={{cursor: 'not-allowed'}} title="You have no permission ">
                                            <i className="far fa-check-circle"></i>
                                        </button>
                                       
                                      ) : (
                                        <button className="task--btn task-complete--btn" onClick={() => taskToggleComplete(task_item)} title="toggle complete !">
                                            <i className="far fa-check-circle"></i>
                                        </button>
                                      )
                                    }  
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
export default connect(mapStateToProps, {allTaskList})(TodoTasks);
