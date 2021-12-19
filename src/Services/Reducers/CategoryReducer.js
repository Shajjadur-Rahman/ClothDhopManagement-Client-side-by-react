import * as actionType from '../Types'

const initialState = {
    categories: [],
    loading: false,
    error: ''
}

const CategoryReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_CATEGORY_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_CATEGORY_SUCCESS:
            return{
                ...state,
                categories: action.payload,
                loading: false
            }
        case actionType.CREATE_CATEGORY:
            return{
                ...state,
                categories: [action.payload, ...state.categories]
            }
        case actionType.UPDATE_CATEGORY:
            return{
                ...state,
                categories: state.categories.map(category => category.id === action.payload.id ? action.payload : category)
            }
        case actionType.DELETE_CATEGORY:
            return{
                ...state,
                categories: state.categories.filter(category => category.id !== action.id)
            }
        default:
            return state
    }
}

export default CategoryReducer