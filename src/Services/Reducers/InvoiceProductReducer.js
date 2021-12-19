import * as actionType from '../Types'

const initialState = {
    invoiceProducts: [],
    total_import: 0,
    total_item: 0,
    import_expense: 0,
    loading: false,
    error: ''
}

const invoiceRelatedProduct = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_INVOICE_PRODUCT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_INVOICE_PRODUCT_SUCCESS:
            return{
                ...state,
                invoiceProducts: action.payload,
                total_import: action.total_import,
                total_item: action.total_item,
                import_expense: action.import_expense,
                loading: false
            }
        default:
            return state
    }
}
export default invoiceRelatedProduct