import React from 'react'
import {Link} from 'react-router-dom'
import userImage from '../../../media/employee1.jpg'



const ProfileBody = ({user}) => {
    return <div className="employee-detail-container">
    <div className="detail-heading">
        <div className="profile-image">
            {user.profile_info && user.profile_info.profile_image ? 
               <img src={user.profile_info.profile_image} alt='Employee' />
                : user.profile_info && user.profile_info.profile_image_url ? <img src={user.profile_info.profile_image_url} alt='Employee' /> : <img src={userImage} alt='Employee' />
         }
            
            <div className="over-lay">
                <strong>{user.first_name ? user.first_name : "None"}{" "}{user.first_name ? user.last_name : "None"}</strong>
                <h4>+88{user.phone}</h4>
                <button className="image--btn">Change Image</button>
            </div>
        </div>
        <div className="profile-heading-text">
            <h2>{user.first_name ? user.first_name : "None"}{" "}{user.first_name ? user.last_name : "None ."}</h2>
            <h3>{user.user_type}</h3>
            <br/>
            {!user.profile_info && <h3 style={{color: 'red'}}>You should update your profile !</h3>}
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
            <h3>{user.first_name ? user.first_name : "None"}{" "}{user.first_name ? user.last_name : "None"}</h3>
            <h3>{user.email}</h3>
            {user.phone ? <h3>+88{user.phone}</h3> : <h3>None</h3>}
            <h3>{user.profile_info ? user.profile_info.nid_no : "None"}</h3>
            <h3>{user.profile_info ? ( <a href={user.profile_info.facebook_link} rel="noReferrer" target="_blank">{user.profile_info.facebook_link}</a> ) : "None"}</h3>
            <h3>{user.profile_info ? user.profile_info.salary.toFixed(2) : 0.00}</h3>
            <h3>{user.profile_info ? user.profile_info.gender : "None"}</h3>
            <h3>{user.profile_info ? user.profile_info.address : "None"}</h3>
        </div>
    </div>
</div> 
}
export  default ProfileBody