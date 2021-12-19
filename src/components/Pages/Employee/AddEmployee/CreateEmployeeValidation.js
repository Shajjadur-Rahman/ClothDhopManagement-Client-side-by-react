const validateInfo  = values => {
    let errors = {}
    
    if(!values.first_name.trim()){
        errors.first_name = "First name is required !"
    }
    if(!values.last_name.trim()){
        errors.last_name = "Last name is required !"
    }
    if(!values.username.trim()){
        errors.username = "Username is required !"
    }
    if(!values.email){
        errors.email = "Email is required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Email address is invalid !"
    }
    if(!values.password){
        errors.password = "Password is required !"
    }else if(values.password.length < 6){
        errors.password = "Password needs to be 6 charactera or more !"
    }

    if(!values.password2){
        errors.password2 = "Password required !"
    }else if(values.password2 !== values.password){
        errors.password2 = "Password do not match !"
    }else if(values.password.length < 6){
        errors.password2 = "Password needs to be 6 charactera or more !"
    }
    if(!values.phone){
        errors.phone = "Username is required !"
    }
 
    if(!values.gender){
        errors.gender = "Select gender !"
    }
    if(!values.salary){
        errors.salary = "Salary is required !"
    }
    if(!values.address){
        errors.address = "Please input employee detail address !"
    }
    return errors;
}

export default validateInfo