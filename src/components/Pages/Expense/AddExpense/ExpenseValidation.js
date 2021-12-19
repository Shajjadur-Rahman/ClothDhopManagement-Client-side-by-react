const vlidationInfo = values => {
    let errors = {}
    if(!values.expense_type.trim()){
        errors.expense_type = "Expense type is required  !!"
    }
    if(!values.expense_amount){
        errors.expense_amount = "Expense amount is required  !!"
    }
    if(values.timestamp === null){
        errors.timestamp = "Expense date is required  !!"
    }
    return errors
}

export default vlidationInfo