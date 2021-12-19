import * as actionType from '../Types'
import axios from 'axios'




// Fetching all employee

export const employeeList = () => async dispatch => {
    dispatch({
        type: actionType.GET_EMPLOYEE_REQUEST
    })
    const response = await axios({
        method: 'get',
        url: 'account/employee-list/'
    })
    try{
        dispatch({
            type: actionType.GET_EMPLOYEE_SUCCESS,
            payload: response.data.data,
            total_salary: response.data.total_salary,
            total_employee: response.data.total_employee
        })
    }catch(error){
        console.log(error)
    }
}

// Create employee

export const createEmployee = employee => dispatch => {
   
    axios({
        method: 'post',
        url: 'account/employee-create/',
        data: employee
    })
    .then(response => {
        dispatch({
            type: actionType.CREATE_EMPLOYEE,
            payload: response.data.data,
            total_salary: response.data.total_salary
        })
    })
    .catch(error => (
        console.log(error)
    ))
} 


// Hold employee for active status update

export const toggleHold = (user, em_id) => dispatch =>{
        let user_obj = user
            user_obj.is_active = !user.is_active
            if(window.confirm(`Are you sure to diactivate ${user.username} ??`)){
                axios({
                    method: 'post',
                    url: `account/hold-employee/${user.id}/`,
                    data: user_obj
                })
                .then(response => {
                    dispatch({
                        type: actionType.TOGGGLE_HOLD,
                        is_active: user_obj.is_active,
                        id: em_id
                    })
                })
                .catch(error => {
                    console.log(error)
                })
            }
}


// delete employee

export const deleteEmployee = (userId, employee) => dispatch => {
   if(window.confirm(`Are you sure to delete this "${employee.user.username}" ???`)){
    axios({
        method: 'delete',
        url: `account/delete-employee/${userId}/`
    })
    .then(response => {
        dispatch({
            type: actionType.DELETE_EMPLOYEE,
            id: employee.id,
            salary: employee.salary
        })
    })
    .catch(error => {
        console.log(error)
    })
   }

}