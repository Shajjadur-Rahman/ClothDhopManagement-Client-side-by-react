import React from 'react'

const ProfileHeader = (props) => {
    return <div className="page-header">
                <h2>{props.user && props.user.username ? props.user.username : props.user.email}'s profile</h2>
                <strong>{ new Date().toLocaleDateString()}</strong>
           </div>
}
export default ProfileHeader