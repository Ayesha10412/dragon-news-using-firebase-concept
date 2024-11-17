import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const {userLogin, setUser} = useContext(AuthContext)
const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
console.log(location)


const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    userLogin(email, password)
    .then(result=>{
        setUser(result.user);
        navigate(location?.state ? location.state : '/' )
    })
.catch(err=>{
    console.log('Error:', err.message)
    setError({...error, login:err.code })
})

}

    return (
        <div className='flex items-center justify-center  min-h-screen '>
           
           <div className="card bg-[#FFFFFF] w-full px-14  shrink-0 py-10 max-w-lg ">
            <h2 className='font-bold text-3xl text-[#403F3F] text-center mt-7' >Login your Account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-[#403F3F] font-bold ">Email Address</span>
          </label>
          <input type="email" name='email' placeholder="Enter your email address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-[#403F3F] font-bold ">Password</span>
          </label>
          <input type="password" name='password' placeholder="Enter your password" className="input input-bordered text-[#9F9F9F] " required />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-lg bg-[#403F3F] text-white text-sm ">Login</button>
        </div>

{
    error.login &&      <p className='mt-4 text-center text-lg font-bold text-red-700 ' > {error.login} </p>
}

        <p className='mt-4 text-center text-lg font-bold text-[#706F6F] ' >
            Don't have an account? <span className='text-[#FF8C47] ' >
                 <Link to='/auth/register' >Register</Link> </span> </p>
      </form>
    </div>

        </div>
    );
};

export default Login;