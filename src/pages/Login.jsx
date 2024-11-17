import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex items-center justify-center  min-h-screen '>
           
           <div className="card bg-[#FFFFFF] w-full px-14  shrink-0 py-10 max-w-lg ">
            <h2 className='font-bold text-3xl text-[#403F3F] text-center mt-7' >Login your Account</h2>
      <form className="card-body">
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
        <p className='mt-4 text-center text-lg font-bold text-[#706F6F] ' >
            Don't have an account? <span className='text-[#FF8C47] ' >
                 <Link to='/auth/register' >Register</Link> </span> </p>
      </form>
    </div>

        </div>
    );
};

export default Login;