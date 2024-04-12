
import { useStateContext } from '../../contexts/contextprovider';
import { Navigate, Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    const {user, token} =useStateContext();
  if(!token){

    return <Navigate to ='/sign-in'/>
  }
  return (
    <div className='relative flex items-center justify-center'>
      
        <Outlet/>
    </div>
  )
}

export default DefaultLayout