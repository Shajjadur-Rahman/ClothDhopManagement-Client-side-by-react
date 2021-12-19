import React from 'react'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import './CreateTask.css'



const CreateTask = ({
    task,
    edit,
    errors,
    modalHide,
    onChangeHandler,
    onSubmitHandler}) => {


    return <div className="custom-form">
                <button className="custom--btn" onClick={() => modalHide()} title='Close'>X</button>
                <div className="page-header">
                    <h2>{edit ? "Update task" : "Add new task"}</h2>
                    <strong>{new Date().toLocaleDateString()}</strong>
                </div>
                <form onSubmit={(event) => onSubmitHandler(event)}>
                        <div className="form--input--wrapper">
                            <div className="form--input">
                                {errors.task_description && <span style={{color: 'red', paddingBottom: '10px', display: 'block'}}>{errors.task_description}</span>}
                                <textarea className="textarea" cols='10' rows='5' pattern="[A-Za-z]{3}" id="task_description" name="task_description" value={task.task_description} onChange={onChangeHandler} placeholder='Input your task in detail ...........'></textarea>
                            </div>
                        </div>
                        <div className="form--input--wrapper">
                            <div className="form--input">
                            {errors.timestamp && <span style={{color: 'red', paddingBottom: '10px', display: 'block'}}>{errors.timestamp}</span>}
                                <DateTimePickerComponent 
                                style={{padding: '5px 10px'}} 
                                value={task.timestamp}
                                name="timestamp" placeholder="Chose date and time"
                                onChange={onChangeHandler}
                                className="date-time-input" />
                                {/* https://www.npmjs.com/package/@syncfusion/ej2-react-calendars#datetimepicker */}
                            </div>
                        </div>
                        
                        <div className="form--footer">
                            {
                               task.timestamp &&  <>
                               <button type="button" className="back" onClick={() => modalHide()}>Back</button>
                               <button type="submit" className="submit">{edit ? "Update": "Create"}</button>
                               </>
                            }
                        </div>
                </form>
            </div>

}
export default CreateTask