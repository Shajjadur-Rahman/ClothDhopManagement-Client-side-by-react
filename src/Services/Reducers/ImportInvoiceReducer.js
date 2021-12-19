import * as actionType from '../Types'

const initialState = {
    invoices: [],
    loading: false,
    error: ''
}

const ImportInvoiceReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_IMPORT_INVOICE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_IMPORT_INVOICE_SUCCESS:
            return{
                ...state,
                invoices: action.payload
            }
        case actionType.CREATE_IMPORT_INVOICE:
            return{
                ...state,
                invoices: [action.payload, ...state.invoices]
            }
        case actionType.DELETE_IMPORT_INVOICE:
            return{
                ...state,
                invoices: state.invoices.filter(invoice => invoice.id !== action.id)
            }
        case actionType.UPDATE_IMPORT_INVOICE:
            return{
                ...state,
                invoices: state.invoices.map(invoice => invoice.id === action.id ? action.payload : invoice)
            }
        default:
            return state
    }
}
export default ImportInvoiceReducer