const vlidationInfo = values => {
    let errors = {}
    if(!values.task_description.trim()){
        errors.task_description = "Task description is required  !!"
    }
    if(values.timestamp === null){
        errors.timestamp = "Task date is required  !!"
    }
    return errors
}

export default vlidationInfo