import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {

const {createNewUser,setUser, updateUserProfile}= useContext(AuthContext)
const [error, setError] = useState({});
const navigate = useNavigate();

const handleSubmit = event=>{
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get('name');
if(name.length<5){
    setError({...error, name: 'Must be more than 5 character long!!'})
}

    const email = form.get('email');
    const photo = form.get('photo');
    const password = form.get('password')
    console.log(name, email, photo,password)

createNewUser(email, password)
.then(result=>{
    const user = result.user;
    setUser(user)
    console.log(user)
    updateUserProfile({displayName: name, photoURL: photo })
    .then(()=>{
navigate('/')
    })
.catch(err=>{
    console.log('ERROR:', err.message)
})
    
})

.catch(error=>{
    console.log('Error:', error.message)
})

}



    return (
        <div className='flex items-center justify-center  min-h-screen '>
           
        <div className="card bg-[#FFFFFF] w-full max-h-screen  shrink-0 py-10 max-w-lg ">
         <h2 className='font-bold text-3xl text-[#403F3F] text-center mt-7' >Register your Account</h2>
   <form onSubmit={handleSubmit} className="card-body">

   <div className="form-control">
       <label className="label">
         <span className="label-text text-lg text-[#403F3F] font-bold ">Your Name  </span>
       </label>
       <input type="text" name='name' placeholder="Enter your name" className="input input-bordered text-[#9F9F9F] " required />
     </div>

{
    error.name &&   <p className='mt-4 text-center text-lg font-bold text-red-700 ' > {error.name} </p>
}

     <div className="form-control">
       <label className="label">
         <span className="label-text text-lg text-[#403F3F] font-bold ">Photo URL</span>
       </label>
       <input type="text" name='photo' placeholder="Enter your photo url" className="input input-bordered text-[#9F9F9F] " required />
     </div>


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
     </div>

     <p className='mt-4 text-center text-lg font-bold text-[#706F6F] ' >
          Accept Terms and Conditions 
        </p>

     <div className="form-control mt-6">
       <button className="btn btn-neutral rounded-lg bg-[#403F3F] text-white text-sm ">Register</button>
     </div>
    
   </form>
 </div>

     </div>
    );
};

export default Register;