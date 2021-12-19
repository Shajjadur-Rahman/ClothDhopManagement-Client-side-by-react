import * as actionType from '../Types'
import axios from 'axios'



// Fetching all tasks
export const taskList = dateObj => async dispatch =>{
        dispatch({
            type: actionType.TASK_REQUEST
        })

    const res = await axios({
        method: 'get',
        url: dateObj.timestamp ? `task/task-list/?timestamp=${new Date(dateObj.timestamp).toISOString().slice(0,10)}` : 'task/task-list/' 
    })
    try{
        dispatch({
            type: actionType.GET_TASK_SUCCESS,
            payload: res.data
        })
    }catch(error){
        // dispatch({
        //     type: actionType.GET_TASK_FAILED,
        //     error: error.response.message
        // })
        console.log(error)
    }

}



export const allTaskList = dateObj => async dispatch =>{
    dispatch({
        type: actionType.TASK_REQUEST
    })

const res = await axios({
    method: 'get',
    url: dateObj.timestamp ? `task/all-employee-task/?timestamp=${new Date(dateObj.timestamp).toISOString().slice(0,10)}` : 'task/all-employee-task/',

})
try{
    dispatch({
        type: actionType.GET_TASK_SUCCESS,
        payload: res.data
    })
}catch(error){
    // dispatch({
    //     type: actionType.GET_TASK_FAILED,
    //     error: error.response.message
    // })
    console.log(error)
}

}

// task create function
export const taskCreate =  task => dispatch => {
    axios({
        method: "post",
        url: 'task/create/',
        data: task 
    })
    .then((response) => {
        dispatch({
            type: actionType.TASK_CREATE,
            payload: response.data
        })
    }) 
    .catch(err => (
        // dispatch({
        //     type: actionType.TASK_COMPLETE_FAILED,
        //     error: err.reposnse.data
        // })
        console.log(err)
    ))
}

// task toggle complete function
export const taskToggleComplete = task_item => dispatch => {
    let task = task_item
        task.completed = !task.completed
    axios({
        method: "post",
        url: `task/task-complete/${task_item.id}/`,
        data: task
    })
    .then(reposnse =>{
        dispatch({
            type: actionType.TASK_COMPLETE_INCOMPLETE,
            id: task_item.id,
            completed: task.completed
        })
    })
    // .catch(error => {
    //     dispatch({
    //         type: actionType.TASK_COMPLETE_FAILED,
    //         error: error.response.data
    //     })
    // })
}


export const taskUpdate = task => dispatch => {
    if(window.confirm("Are you sure to update this task ??")){
        axios({
            method: 'post',
            url: `task/update-task/${task.id}/`,
            data: task
        })
        .then((response) => {
            dispatch({
                type: actionType.TASK_UPDATE,
                payload: response.data,
                id: task.id
            })
        })
        .catch((error) => (
            console.log(error)
        ))
    }
}




// task delete function
export const taskDelete = taskId => dispatch => {
    if(window.confirm("Are you sure to delete this task ??")){
        axios({
            method: 'delete',
            url: `task/delete-task/${taskId}/`
        })
            
        .then((response) => (
            dispatch({
                type: actionType.TASK_DELETE,
                id: taskId
            })
        ))
        .catch((error) => (
            console.log(error)
        ))
    }
}