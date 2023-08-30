import React, { useState } from 'react'

const Login = () => {
    const [userName,setUserName]=useState("")
    const [password,setPassWord]=useState("")
    const [isLoggedIn, setIsLoggedIn]=useState(false)

    const handleLogin= ()=>{
        if (userName === 'quangvinh'&& password==='quang'){
            setIsLoggedIn(true)
        }
        else{
            alert("invalid username or password")
        }
    }

    const handleLogOut=()=>{
        setIsLoggedIn(false);
        setUserName("")
        setPassWord("")
    }

    if (isLoggedIn){
        return(
            <div>
            <h2>welcome {userName}</h2>
            <button onClick={handleLogOut}>Logout</button>
            </div>

        )
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text"
            placeholder='username'
            value={userName}
            onChange={e=>setUserName(e.target.value)} />

        <input type="password"
                placeholder='password'
                value={password}
                onChange={e=>setPassWord(e.target.value)} />  

        <button onClick={handleLogin}>Login</button>  
    </div>
  )
}

export default Login