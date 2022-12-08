/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

  const style = {
    height: "100vh",
    backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80)"
  };

  return (
    <div className='max-w-full mx-auto grid items-center bg-cover bg-center relative' style={style}>
      <div className='absolute inset-0 bg-black bg-opacity-25'></div>
      <section className='z-10'>
        <div className='max-w-md mx-auto'>
           <h3 className='text-3xl font-light pb-5 uppercase text-white text-center tracking-wide'>Login</h3>
        </div>
          
        <form className='max-w-lg mx-auto shadow-xl px-10 py-10 rounded bg-white'>
          <p className='text-xl font-light pb-5 tracking-wide'>Sign in to your account</p>
          <div className='grid'>
            <label htmlFor='email' className='mb-1 text-xl font-light'>Email</label>
            <input type="email" className='text-base font-light px-4 py-2 rounded border border-[#1fb6ff] focus:border-red-400' placeholder="Email Address"/>
          </div>
          <div className='pt-4 grid'>
            <label htmlFor='password' className='mb-1 text-xl font-light'>Password</label>
            <input type="password" className='text-base font-light px-4 py-2 rounded border border-[#1fb6ff]' placeholder='Password'/>
          </div>
          <div>
          <div className="flex justify-between items-center pt-5">
            <div className="flex space-x-2 items-center">
                <input type="checkbox" className="w-4 h-4 shadow-md"/>
                <span className="text-sm font-light">Remember me</span>
            </div>
            <Link to="/" className="text-base font-light text-[#1fb6ff]">Forgot password?</Link>
        </div>
          </div>
          <div className='pt-9'>
            <button className='px-6 py-2 w-full bg-[#1fb6ff] font-light tracking-wide text-white text-md rounded uppercase'>Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;