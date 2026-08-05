import React, {useState, useContext} from 'react'
import UserContext from '../context/userContext'


function Login() {

const [username, setUserName] = useState('')
const [password, setPassword] = useState('')
const {setUser} = useContext(UserContext)

const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})

}
  return (
    <div>
        <h3 className='text-3xl bg-red-300'>Login Page</h3>
        <input type="text" placeholder='username'  value={username} onChange={(e)=>setUserName(e.target.value)}/>
        <br />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login