import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import ReactLoading from 'react-loading'
import {deleteEmployee, toggleHold} from '../../../../Services/Actions/EmployeeActions'
import './Employees.css'
import Employee from './Employee';







const Employees = ({
  employeeList,
  employees,
  toggleHold,
  loading,
  modalShow,
  deleteEmployee,
  user,
  total_salary
}) => {

  useEffect(() => {
    employeeList()
  }, [employeeList])


    let role = user.user_type === "Admin"  // Logged in user
    let user_id = user.id   // Logged in user

    return <Fragment>
                    <div className="page-header">
                        <h2>Office employee-list</h2>
                  
                        <strong>{ new Date().toLocaleDateString()}</strong>
                    </div>
                    {loading ? (
                      <ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto', display: 'block'}} type='spin'/>
                    ) : (
                      <table className="data-table">
                        <thead>
                          <tr>
                          <th scope="col">Employee ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Image</th>
                            <th scope="col">
                              {role ? (
                                <button className="employee--btn btn--info" onClick={() => modalShow()}>Add</button>
                              ) : (
                                <button className="employee--btn btn--info" disabled={true} style={{ cursor: 'not-allowed'}}>Add</button>
                              )}
                              
                              </th>
                          </tr>
                        </thead>
                        <tbody>
                         
                         {
                           employees && employees.map(employee => (
                            <Employee key={employee.id} employee={employee} toggleHold={toggleHold} deleteEmployee={deleteEmployee} role={role} user_id={user_id}/>
                           ))
                         }
                          <tr>
                            <th colSpan="2" style={{ textAlign: 'center' }}>Total employee : 3</th>
                            <th>Total monthly salary</th>
                            <th style={{textAlign: 'center'}}>{total_salary.toFixed(2)}</th>
                            <th colSpan="2"></th>
                          </tr>
                        </tbody>
                      </table> 
                    )}
                    
                     
    </Fragment>
}
const mapStateToProps = state => ({
  employees: state.employeeReducer.employees,
  total_salary: state.employeeReducer.total_salary,
  loading: state.employeeReducer.loading,
  user: state.AuthReducer.user
})
export default connect(mapStateToProps, {deleteEmployee, toggleHold})(Employees)