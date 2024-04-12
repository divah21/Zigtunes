import React from 'react'
import { useStateContext } from '../../contexts/contextprovider';
import { Navigate, Outlet } from 'react-router-dom';

const GuestsLayout = () => {
    const {user, token} =useStateContext();
    if(token){
        return <Navigate to = '/'/>
    }
  return (
    <div relative flex items-center justify-center>
      
        <Outlet/>
    </div>
  )
}

export default GuestsLayout