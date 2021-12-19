import * as actionType from '../Types'

const initialState = {
    taskItems: [],
    error: '',
    loading: false
}

const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.TASK_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_TASK_SUCCESS:
            return{
                ...state,
                taskItems: action.payload,
                loading: false
            }
        case actionType.GET_TASK_FAILED:
            return{
                ...state,
                error: action.error
            }
        case actionType.TASK_COMPLETE_INCOMPLETE:
            return{
                ...state,
                taskItems: state.taskItems.map(task => task.id === action.id ? {...task, completed: action.completed} : task)
            }
        case actionType.TASK_CREATE:
            return{
                ...state,
                taskItems: [...state.taskItems, action.payload]
            }
        case actionType.TASK_COMPLETE_FAILED:
            return{
                ...state,
                error: action.error
            }
        case actionType.TASK_UPDATE:
            return{
                ...state,
                taskItems: state.taskItems.map(task => task.id === action.id ? action.payload : task)
            }    
        case actionType.TASK_DELETE:
            return{
                ...state,
                taskItems: state.taskItems.filter(task => task.id !== action.id)
            }
        default:
            return state    
    }
}

export default taskReducer