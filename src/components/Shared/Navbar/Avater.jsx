import  { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import avatarImg from '../../../assets/logo/placeholder.jpg'

const Avater = () => {
    const { user } = useContext(AuthContext)
   
    return (
      <img
        className='rounded-full'
        src={user && user.photoURL ? user.photoURL : avatarImg}
        alt='profile'
        height='36'
        width='36'
       title={user?.displayName}
      />
    )
};

export default Avater;