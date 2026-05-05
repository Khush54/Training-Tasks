import React from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'
function Dashboard() {
    const {user} = useContext(UserContext);
  return (
    <>
    <h1>My Dshboard</h1>
    {user ? (
        <>
        <p>Welcome {user.name}, you are a {user.role}</p>
        </>
    ):(
        <>
        <p>Kindly log in to see your Dashboard</p>
        </>
    )
    }
    </>
  )
}

export default Dashboard