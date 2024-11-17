import {  useContext } from 'react';
import userImg from '../assets/user.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {

const {user, logOut} = useContext(AuthContext);

    return (
        <div className='flex justify-between mt-10'>
            
<div>{user && user.email}</div>
<div className="nav space-x-5">
    <Link to='/' >Home</Link>
    <Link to='/career'  >Career</Link>
    <Link to='/about' >About</Link>

</div>

<div className="login flex items-center gap-2">
<div>
<img src={userImg} alt="" />
</div>
{
    user && user?.email ? 
 (   <button onClick={logOut} className= 'bg-[#403F3F] text-white rounded-none btn px-4' >LogOut</button>)

    :( <Link to='/auth/login' className= 'bg-[#403F3F] text-white rounded-none btn px-4'>Login</Link>
)
}
</div>

        </div>
    );
};

export default NavBar;