import React from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'

function Profile() {
    const {user,login,logout} = useContext(UserContext);
  return (
    <>
    <h1>My Profile</h1>
    {user ? (
        <>
        <p>Logged in as : {user.name}</p>
        <p>Role : {user.role}</p>
        <button onClick={logout}> Log Out</button>
        </>
    ): (
        <>
        <button onClick={login}>Log in</button>
        </>
    )}
    </>
  )
}

export default Profile