import * as actionType from '../Types'

const initialState = {
    totalOrder: {},
    loading: false
}

const homeReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_ORDER_SUMMARY_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_ORDER_SUMMARY_SUCCESS:
            return{
                ...state,
                totalOrder: action.payload,
                loading: false
            }
        default:
            return state
    }
}
export default homeReducer