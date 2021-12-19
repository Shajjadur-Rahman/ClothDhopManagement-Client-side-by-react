import * as actionType from '../Types'

const initialState = {
    employees: [],
    loading: false,
    total_salary: 0,
    total_employee: 0,
    error: ''
}

const employeeReducer = (state=initialState, action) => {
    switch(action.type){
        case actionType.GET_EMPLOYEE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_EMPLOYEE_SUCCESS:
            return{
                ...state,
                employees: action.payload,
                total_salary: action.total_salary,
                total_employee: action.total_employee,
                loading: false
            }
        case actionType.GET_EMPLOYEE_FAILED:
            return{
                ...state,
                loading: false
            }
        case actionType.CREATE_EMPLOYEE:
            return{
                ...state,
                employees: [action.payload, ...state.employees],
                total_salary: state.total_salary + action.total_salary
            }
        case actionType.TOGGGLE_HOLD:
            return{
                ...state,
                employees: state.employees.map(employee => employee.id === action.id ? {...employee, user: {...employee.user, is_active: action.is_active}} : employee)
            }
        case actionType.DELETE_EMPLOYEE:
            return{
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.id),
                total_salary: state.total_salary - action.salary
            }
        default:
            return state
    }
}

export default employeeReducer