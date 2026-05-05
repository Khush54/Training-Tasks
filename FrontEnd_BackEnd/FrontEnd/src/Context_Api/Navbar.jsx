import React from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'
function Navbar() {
    const{user} = useContext(UserContext)
  return (
    <>
    <h1>Navbar</h1>
    {user ? (
        <>
        <p>Logged in as: {user.name}</p>
        </>
    ): (
        <>
        <p>Please log in to continue</p>
        </>
    )}
    </>
  )
}

export default Navbar