/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';
import { attemptLogin } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginImg from '../images/login.jpg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const authUser = useSelector(state => state.user.currentUser)

  const handleSubmit = (e) => {
    e.preventDefault()
    attemptLogin(dispatch, { email, password })
    if(authUser !== null) {
      navigate('/')
    }
  }

  return (
    <div
      className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center bg-cover bg-center"
      style={{ height: '100vh' }}>
      <section>
        <div className="max-w-md mx-auto flex items-center space-x-3 px-10">
          <div className="w-12 h-12 p-2 rounded-full border border-gray-900 grid items-center justify-center">
            <CiUser className="w-8 h-8" />
          </div>
          <h3 className="text-3xl font-light uppercase text-center tracking-wide">Login</h3>
        </div>

        <form className="max-w-lg mx-auto  px-10 py-10 rounded bg-white" onSubmit={handleSubmit}>
          <div className="grid">
            <label htmlFor="email" className="mb-1 text-xl font-light">
              Email
            </label>
            <input
              type="email"
              className="text-base font-light px-4 py-2 rounded border border-[#1fb6ff] focus:border-red-400"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pt-4 grid">
            <label htmlFor="password" className="mb-1 text-xl font-light">
              Password
            </label>
            <input
              type="password"
              className="text-base font-light px-4 py-2 rounded border border-[#1fb6ff]"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <div className="flex justify-between items-center pt-5">
              <div className="flex space-x-2 items-center">
                <input type="checkbox" className="w-4 h-4 shadow-md" />
                <span className="text-sm font-light">Remember me</span>
              </div>
              <Link to="/" className="text-base font-light text-[#1fb6ff]">
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="pt-4">
            <Link
              to="/register"
              className="text-base font-light tracking- hover:text-[#1fb6ff] transition-all">
              Dont have an account?
            </Link>
          </div>
          <div className="pt-9">
            <button
              className="px-6 py-2 w-full bg-[#1fb6ff] font-light tracking-wide text-white text-md rounded uppercase"
              type="submit">
              Submit
            </button>
          </div>
          <div className='pt-3 font-light text-sm'>
            <h2 className='underline pb-1 text-base'>Mock Credentials</h2>
            <p>Email: Sincere@april.biz</p>
            <p>Password: 12345678</p>
          </div>
        </form>

      </section>
      <section
        className="h-full bg-cover bg-center hidden md:block"
        style={{
          backgroundImage:
            `url(${LoginImg})`
        }}></section>
    </div>
  );
};

export default Login;
