import user from '../assets/user.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex justify-between mt-10'>
            
<div></div>
<div className="nav space-x-5">
    <Link to='/' >Home</Link>
    <Link to='/career'  >Career</Link>
    <Link to='/about' >About</Link>

</div>

<div className="login flex items-center gap-2">
    <img src={user} alt="" />
    <Link to='/auth/login' className= 'bg-[#403F3F] text-white rounded-none btn px-4'>Login</Link>
</div>

        </div>
    );
};

export default NavBar;