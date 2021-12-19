import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CreateEmployeeValidation from './AddEmployee/CreateEmployeeValidation'
import {createEmployee, employeeList} from '../../../Services/Actions/EmployeeActions'
import AddEmployee from './AddEmployee/AddEmployee'
import Employees from './Employees/Employees'
import { Modal } from '../../../UI/Modal/Modal'




function Employee ({
  createEmployee, 
  employeeList, 
  employees,
  loading}){

  const [show, setShow] = useState(false)
  const modalShow = () => setShow(true)
  const modalHide = () => {
    setShow(false)
    clearForm()
  }

  useEffect(() => {
    document.title = show ? 'Add new employee' : 'Employee-list'
  }, [show])

  useEffect(() => {
    employeeList()
  }, [employeeList])



  const [employee, setEmployee] = useState({
      id: '',
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      password2: '',
      phone: '',
      nid_no: '',
      facebook_link: '',
      profile_image_url: '',
      gender: '',
      salary: '',
      address: ''
    })

    const [errors, setErrors] = useState({})

    const [profile_image, setProfileImage] = useState(null)
    const imageHandler = event => setProfileImage(event.target.files[0])
    console.log(profile_image)
    const clearForm = () => {
      setEmployee({
      id: '',
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      password2: '',
      phone: '',
      nid_no: '',
      facebook_link: '',
      profile_image_url: '',
      gender: '',
      salary: '',
      address: ''
      })
      setProfileImage(null)
    }
    const onChangeHandler = event => {
      setEmployee({
          ...employee,
          [event.target.name]: event.target.value
      })
    }


    const [click, setClick] = useState(false)
    const addImage = () => {
      setClick(!click)
      setEmployee({
        ...employee,
        profile_image_url: ''
      })
    }

    const addImageUrl = () => {
      setClick(!click)
      setProfileImage(null)
    }

    const onSubmitHandler = event => {
      event.preventDefault()
      setErrors(CreateEmployeeValidation(employee))

      if(Object.keys(errors).length === 0 ){
    
          let employeeObj = new FormData()
          employeeObj.append("first_name", employee.first_name)  
          employeeObj.append("last_name", employee.last_name)  
          employeeObj.append("username", employee.username)  
          employeeObj.append("email", employee.email)  
          employeeObj.append("password", employee.password)  
          employeeObj.append("password2", employee.password2)  
          employeeObj.append("phone", employee.phone)  
          employeeObj.append("nid_no", employee.nid_no)  
          employeeObj.append("facebook_link", employee.facebook_link)  
          employee.profile_image_url && employeeObj.append("profile_image_url", employee.profile_image_url)  
          profile_image && employeeObj.append("profile_image", profile_image) 
          employeeObj.append("gender", employee.gender)  
          employeeObj.append("salary", employee.salary)  
          employeeObj.append("address", employee.address)
        createEmployee(employeeObj)
        setShow(false)
        clearForm()
      }else{
        return false
      }
  }

console.log(employee.profile_image_url)
console.log(profile_image)
  return <>
            <Modal show={show}>
              <AddEmployee 
              click={click}
              errors={errors} 
              employee={employee}
              addImage={addImage}             
              modalHide={modalHide}   
              addImageUrl={addImageUrl}         
              imageHandler={imageHandler} 
              profile_image={profile_image} 
              onChangeHandler={onChangeHandler} 
              onSubmitHandler={onSubmitHandler}/>
            </Modal>
            <Employees modalShow={modalShow} 
            employeeList={employeeList} 
            employees={employees} 
            loading={loading}/>      
    </>
}
const mapStateToProps = state => ({
  employees: state.employeeReducer.employees,
  loading: state.employeeReducer.loading
})
export default connect(mapStateToProps, {createEmployee, employeeList})(Employee)