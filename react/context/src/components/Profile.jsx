import React,{useContext} from 'react'
import UserContext from '../context/userContext'


function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <div>Please Login</div>
 
    return <div>Welcome {user.username} Password {user.password} </div>
}

export default Profile