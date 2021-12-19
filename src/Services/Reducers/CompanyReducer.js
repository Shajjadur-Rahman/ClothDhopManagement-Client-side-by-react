import * as actionType from '../Types'


const initialState = {
    companies: [],
    loading: false,
    error: ''
}

const CompanyReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_COMPANY_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_COMAPNY_SUCCESS:
            return{
                ...state,
                companies: action.payload,
                loading: false
            }
        case actionType.CREATE_COMAPNY:
            return{
                ...state,
                companies: [action.payload, ...state.companies]
            }
        case actionType.UPDATE_COMPANY:
            return{
                ...state,
                companies: state.companies.map(company => company.id === action.id ? action.payload : company)
            }
        case actionType.DELETE_COMPANY:
            return{
                ...state,
                companies: state.companies.filter(company => company.id !== action.id)
            }
        default:
            return state
    }
}

export default CompanyReducer