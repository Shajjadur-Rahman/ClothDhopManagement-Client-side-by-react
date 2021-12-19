import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import userImage from '../../../../media/employee2.jpg'



function EmployeeDetail ({match, access}) {

    let em_id = match.params.id
    const [employee, setEmployee] = useState(null)


    useEffect(() => {

        document.title = `Employee detail info`
    })

    useEffect(() => {
        axios({
            method: 'get',
            url: `account/employee-detail/${em_id}/`
        })
        .then(response => {
            setEmployee(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [em_id])


    return <>
                 <div className="page-header">
                    <h2>{employee && employee.user.username}'s detail info</h2>
                    <strong>{ new Date().toLocaleDateString()}</strong>
                </div>

            {
               employee && 
               <div className="employee-detail-container">
                    <div className="detail-heading">
                        <div className="profile-image">
                            {employee.profile_image ? 
                               <img src={employee.profile_image} alt='Employee' />
                                : employee.profile_image_url ? <img src={employee.profile_image_url} alt='Employee' /> : <img src={userImage} alt='Employee' />
                         }
                            
                            <div className="over-lay">
                                <strong>{employee.user.first_name}{" "}{employee.user.last_name}</strong>
                                <h4>+88{employee.phone}</h4>
                                <button className="image--btn">Change Image</button>
                            </div>
                        </div>
                        <div className="profile-heading-text">
                            <h2>{employee.user.first_name}{" "}{employee.user.last_name}</h2>
                            <h3>{employee.user.user_type}</h3>
                            <Link to='/employee-list' className="detail--btn update">Update</Link>
                            <Link to='/employee-list' className="detail--btn back">Back</Link>
                        </div>
                    </div>
                    <div className="detail-info">
                        <div className="info-left">
                            <h3>Name</h3>
                            <h3>Email</h3>
                            <h3>Phone</h3>
                            <h3>NID</h3>
                            <h3>Facebook</h3>
                            <h3>Salary</h3>
                            <h3>Gender</h3>
                            <h3>Address</h3>
                        </div>
                        <div className="info-right">
                            <h3>{employee.user.first_name}{" "}{employee.user.last_name}</h3>
                            <h3>{employee.user.email}</h3>
                            <h3>+88{employee.phone}</h3>
                            <h3>{employee.nid_no ? employee.nid_no : "None"}</h3>
                            <h3>{employee.facebook_link ? ( <a href="https://www.facebook.com/Shajjad143" rel="noReferrer" target="_blank">https://www.facebook.com/Shajjad143</a> ) : "None"}</h3>
                            <h3>{employee.salary ? employee.salary.toFixed(2) : "None"}</h3>
                            <h3>{employee.gender}</h3>
                            <h3>{employee.address}</h3>
                        </div>
                    </div>
                </div> 
            }    
</>

}
const mapStateToProps = state => ({
    access: state.AuthReducer.access
})
export default connect(mapStateToProps)(EmployeeDetail)