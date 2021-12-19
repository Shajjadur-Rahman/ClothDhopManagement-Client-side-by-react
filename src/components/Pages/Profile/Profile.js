import axios from 'axios'
import React, {useEffect, useState} from 'react'
import ProfileBody from './ProfileBody'
import ProfileHeader from './ProfileHeader'




export const Profile = ({match}) => {
    axios.defaults.baseURL = 'http://localhost:8000/';
    let id = match.params.id
    let {access} = JSON.parse(localStorage.getItem("auth"))
    useEffect(() =>{
        document.title = "Profile"
    })

    const [user, setUser] = useState(null)

    useEffect(() =>{
        axios({
            method: 'get',
            url: `account/profile/${id}/`,
            timeout: 5000,
            headers: {
                Authorization: "Bearer " + access,
                "Content-Type": "application/json",
                "accept": "application/json"
            }
        })
        .then(response => {
            setUser(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [id, access])



    console.log(user)
    return <>
    {
        user && 
        <>
        <ProfileHeader user={user}/>
        <ProfileBody user={user}/>
        </>
    }
</>
}

export default Profile
