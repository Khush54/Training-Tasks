import React, { useState } from 'react'
import { UserContext } from './UserContext'
function UserProvider({children}) {
    const[user,setUser] = useState(null);

    function login(){
        console.log('User Logged in Successfully');
        setUser({name: 'Khushpreet', role: 'Developer'})
    };

    function logout(){
        console.log('User logged out Successfully');
        setUser(null);
    }

    const value = {user , login, logout};
  return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider