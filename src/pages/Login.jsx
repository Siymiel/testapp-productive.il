/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci'

const Login = () => {

  const style = {
    height: "100vh",
  };

  const style1 = {
    backgroundImage: "url('https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60')"
  }

  return (
    <div className='max-w-full mx-auto grid grid-cols-2 items-center bg-cover bg-center' style={style}>
      <section>
        <div className='max-w-md mx-auto flex items-center space-x-3'>
            <div className='w-12 h-12 p-2 rounded-full border border-gray-900 grid items-center justify-center'>
              <CiUser className='w-8 h-8'/>
            </div>
           <h3 className='text-3xl font-light uppercase text-center tracking-wide'>Login</h3>
        </div>
          
        <form className='max-w-lg mx-auto  px-10 py-10 rounded bg-white'>
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
          <div className='pt-4'>
           <Link to="/register" className='text-base font-light tracking- hover:text-[#1fb6ff] transition-all'>Dont have an account?</Link>
          </div>
          <div className='pt-9'>
            <button className='px-6 py-2 w-full bg-[#1fb6ff] font-light tracking-wide text-white text-md rounded uppercase'>Submit</button>
          </div>
        </form>
      </section>
      <section className='h-full bg-cover bg-center' style={style1}></section>
    </div>
  );
}

export default Login;