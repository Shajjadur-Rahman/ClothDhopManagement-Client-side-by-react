// login type

export const USER_LOGIN         = "USER_LOGIN"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILED  = "USER_LOGIN_FAILED"
export const USER_LOG_OUT       = "USER_LOG_OUT"
export const FETCH_DATA         = "FETCH_DATA"

export const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST"
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS"
export const GET_USER_INFO_FAILED  = "GET_USER_INFO_FAILED"



// Home

export const GET_ORDER_SUMMARY_REQUEST = "GET_ORDER_SUMMARY_REQUEST"
export const GET_ORDER_SUMMARY_SUCCESS = "GET_ORDER_SUMMARY_SUCCESS"

// Employee

export const CREATE_EMPLOYEE        = "CREATE_EMPLOYEE"
export const GET_EMPLOYEE_REQUEST   = "GET_EMPLOYEE_REQUEST"
export const GET_EMPLOYEE_SUCCESS   = "GET_EMPLOYEE_SUCCESS"
export const GET_EMPLOYEE_FAILED    = "GET_EMPLOYEE_FAILED"
export const DELETE_EMPLOYEE        = "DELETE_EMPLOYEE"
export const DELETE_EMPLOYEE_FAILED = "DELETE_EMPLOYEE_FAILED"
export const TOGGGLE_HOLD           = "TOGGGLE_HOLD"




// task 

export const TASK_REQUEST             = "TASK_REQUEST"
export const GET_TASK_SUCCESS         = "GET_TASK_SUCCESS"
export const GET_TASK_FAILED          = "GET_TASK_FAILED"
export const TASK_CREATE              = "TASK_CREATE"
export const TASK_CREATE_FAILD        = "TASK_CREATE_FAILD"
export const TASK_COMPLETE_INCOMPLETE = "TASK_COMPLETE_INCOMPLETE"
export const TASK_COMPLETE_FAILED     = "TASK_COMPLETE_FAILED"
export const TASK_UPDATE              = "TASK_UPDATE"
export const TASK_UPDATE_FAILD        = "TASK_UPDATE_FAILD"
export const TASK_DELETE              = "TASK_DELETE"
export const TASK_DELETE_FAILED       = "TASK_DELETE_FAILED"




// Import invoice
export const GET_IMPORT_INVOICE_REQUEST = "GET_IMPORT_INVOICE_REQUEST"
export const GET_IMPORT_INVOICE_SUCCESS = "GET_IMPORT_INVOICE_SUCCESS"
export const GET_IMPORT_INVOICE_FAILD   = "GET_IMPORT_INVOICE_FAILD"
export const CREATE_IMPORT_INVOICE      = "CREATE_IMPORT_INVOICE"
export const UPDATE_IMPORT_INVOICE      = "UPDATE_IMPORT_INVOICE"
export const DELETE_IMPORT_INVOICE      = "DELETE_IMPORT_INVOICE"




// Supplier Company
export const GET_COMPANY_REQUEST = "GET_COMPANY_REQUEST"
export const GET_COMAPNY_SUCCESS = "GET_COMAPNY_SUCCESS"
export const GET_COMPANY_FAILD   = "GET_COMPANY_FAILD"
export const CREATE_COMAPNY      = "CREATE_COMAPNY"
export const UPDATE_COMPANY      = "UPDATE_COMPANY"
export const DELETE_COMPANY      = "DELETE_COMPANY"




// category

export const GET_CATEGORY_REQUEST = "GET_CATEGORY_REQUEST"
export const GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS"
export const GET_CATEGORY_FAILD   = "GET_CATEGORY_FAILD"
export const CREATE_CATEGORY      = "CREATE_CATEGORY"
export const UPDATE_CATEGORY      = "UPDATE_CATEGORY"
export const DELETE_CATEGORY      = "DELETE_CATEGORY"



// stock / produc
export const GET_PRODUCT_REQUEST    = "GET_PRODUCT_REQUEST"
export const GET_PRODUCT_SUCCESS    = "GET_PRODUCT_SUCCESS"
export const GET_PRODUCT_FAILD      = "GET_PRODUCT_FAILD"
export const ADD_PRODUCT            = "ADD_PRODUCT"

export const UPDATE_PRODUCT       = "UPDATE_PRODUCT"
export const UPDATE_PRODUCT_FAILD = "UPDATE_PRODUCT_FAILD"

export const DEACTIVATE_PRODUCT        = "DEACTIVATE_PRODUCT"
export const GET_HIDE_PRODUCT_REQUEST  = "GET_HIDE_PRODUCT_REQUEST"
export const GET_HIDE_PRODUCT_SUCCESS  = "GET_HIDE_PRODUCT_SUCCESS"
export const GET_HIDE_PRODUCT_FAILD    = "GET_HIDE_PRODUCT_FAILD"
export const ACTIVATE_PRODUCT          = "ACTIVATE_PRODUCT"


// Invoice related product

export const GET_INVOICE_PRODUCT_REQUEST = "GET_INVOICE_PRODUCT_REQUEST"
export const GET_INVOICE_PRODUCT_SUCCESS = "GET_INVOICE_PRODUCT_SUCCESS"



// cart

export const GET_CART_ITEMS_REQUEST = "GET_CART_ITEMS_REQUEST"
export const GET_CART_ITEMS_SUCCESS = "GET_CART_ITEMS_SUCCESS"
export const GET_CART_ITEMS_FAILD   = "GET_CART_ITEMS_FAILD"
export const ADD_TO_CART            = "ADD_TO_CART"
export const REMOVE_PRODUCT         = "REMOVE_PRODUCT"
export const COMPLTETE_ORDER        = "COMPLTETE_ORDER"


// Sales record

export const GET_FULL_YEAR_SALES_REQUEST = "GET_FULL_YEAR_SALES_REQUEST"
export const GET_FULL_YEAR_SALES_SUCCESS = "GET_FULL_YEAR_SALES_SUCCESS"
export const GET_FULL_YEAR_SALES_FAILED  = "GET_FULL_YEAR_SALES_FAILED"
export const GET_SALE_DETAIL_REQUEST     = "GET_SALE_DETAIL_RWQUEST"
export const GET_SALE_DETAIL_SUCCESS     = "GET_SALE_DETAIL_SUCCESS"

export const GET_TODAY_SALES_REQUEST = "GET_TODAY_SALES_REQUEST"
export const GET_TODAY_SALES_SUCCESS = "GET_TODAY_SALES_SUCCESS"
export const GET_TODAY_SALES_FAILD   = "GET_TODAY_SALES_FAILD"

export const TODAY_DUE_SALES_REQUEST = "TODAY_DUE_SALES_REQUEST"
export const TODAY_DUE_SALES_SUCCESS = "TODAY_DUE_SALES_SUCCESS"
export const TODAY_DUE_SALES_FAILD   = "TODAY_DUE_SALES_FAILD"

export const TODAY_DUE_SALE_ITEMS_REQUEST = "TODAY_DUE_SALE_ITEMS_REQUEST"
export const TODAY_DUE_SALE_ITEMS_SUCCESS = "TODAY_DUE_SALE_ITEMS_SUCCESS"
export const TODAY_DUE_SALE_ITEMS_FAILED  = "TODAY_DUE_SALE_ITEMS_FAILED"


export const GET_TODAY_CASH_SALES_REQUEST = "GET_TODAY_CASH_SALES_REQUEST"
export const GET_TODAY_CASH_SALES_SUCCESS = "GET_TODAY_CASH_SALES_SUCCESS"
export const GET_TODAY_CASH_SALES_FAILD   = "GET_TODAY_CASH_SALES_FAILD"  


export const GET_TODAY_CASH_SALES_ITEMS_REQUEST = "GET_TODAY_CASH_SALES_ITEMS_REQUEST"
export const GET_TODAY_CASH_SALES_ITEMS_SUCCESS = "GET_TODAY_CASH_SALES_ITEMS_SUCCESS"
export const GET_TODAY_CASH_SALES_ITEMS_FAILD   = "GET_TODAY_CASH_SALES_ITEMS_FAILD" 

// clients

export const GET_CLIENT_REQUEST = "GET_CLIENT_REQUEST"
export const GET_CLIENT_SUCCESS = "GET_CLIENT_SUCCESS"
export const GET_CLIENT_FAILD   = "GET_CLIENT_FAILD"


// Clients Orders

export const GET_CLIENT_ORDER_REQUEST = "GET_CLIENT_ORDER_REQUEST"
export const GET_CLIENT_ORDER_SUCCESS = "GET_CLIENT_ORDER_SUCCESS"
export const GET_CLIENT_ORDER_FAILD   = "GET_CLIENT_ORDER_FAILD"

export const GET_CLIENT_DUE_ORDER_REQUEST = "GET_CLIENT_DUE_ORDER_REQUEST"
export const GET_CLIENT_DUE_ORDER_SUCCESS = "GET_CLIENT_DUE_ORDER_SUCCESS"
export const GET_CLIENT_DUE_ORDER_FAILD   = "GET_CLIENT_DUE_ORDER_FAILD"


export const PAY_DUE_AMOUNT       = "PAY_DUE_AMOUNT"
export const PAY_DUE_AMOUNT_FAILD = "PAY_DUE_AMOUNT_FAILD"

export const PAY_DUE_AMOUNT2       = "PAY_DUE_AMOUNT2"
export const PAY_DUE_AMOUNT_FAILD2 = "PAY_DUE_AMOUNT_FAILD2"


// Exopenses 


export const ADD_EXPENSE       = "ADD_EXPENSE"
export const ADD_EXPENSE_FAILD = "ADD_EXPENSE_FAILD"

export const UPDATE_ESPENSE       = "UPDATE_ESPENSE"
export const UPDATE_ESPENSE_FAILD = "UPDATE_ESPENSE_FAILD"

export const DELETE_EXPENSE       = "DELETE_EXPENSE"
export const DELETE_EXPENSE_FAILD = "DELETE_EXPENSE_FAILD"


export const GET_YEARLY_EXPENSES_REQUEST = "GET_YEARLY_EXPENSES_REQUEST"
export const GET_YEARLY_EXPENSES_SUCCESS = "GET_YEARLY_EXPENSES_SUCCESS"
export const GET_YEARLY_EXPENSES_FAILD   = "GET_YEARLY_EXPENSES_FAILD"

export const GET_MONTHLY_EXPENSE_REQUEST = "GET_MONTHLY_EXPENSE_REQUEST"
export const GET_MONTHLY_EXPENSE_SUCCESS = "GET_MONTHLY_EXPENSE_SUCCESS"
export const GET_MONTHLY_EXPENSE_FAILD   = "GET_MONTHLY_EXPENSE_FAILD"

export const GET_TODAY_EXPENSE_REQUEST = "GET_TODAY_EXPENSE_REQUEST"
export const GET_TODAY_EXPENSE_SUCCESS = "GET_TODAY_EXPENSE_SUCCESS"
export const GET_TODAY_EXPENSE_FAILD   = "GET_TODAY_EXPENSE_FAILD"


// Income 

export const GET_INCOME_REQUEST = "GET_INCOME_REQUEST"
export const GET_INCOME_SUCCESS = "GET_INCOME_SUCCESS"
export const GET_INCOME_FAILD   = "GET_INCOME_FAILD"



// Email

export const SEND_EMAIL               = "SEND_EMAIL"
export const SEND_EMAIL_FAILD         = "SEND_EMAIL_FAILD"
export const ALL_SENT_MAILS_REQUEST   = "ALL_SENT_MAILS_REQUEST"
export const ALL_SENT_MAILS_SUCCESS   = "ALL_SENT_MAILS_SUCCESS"
export const ALL_SENT_MAILS_FAILD     = "ALL_SENT_MAILS_FAILD"