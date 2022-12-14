/* eslint-disable prettier/prettier */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { attemptLogout } from '../redux/apiCalls'
import { useNavigate, useLocation } from 'react-router-dom';
import Avatar from '../images/avatar.jpg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const authUser = useSelector(state => state.user.currentUser)

  const handleLogout = (e) => {
    e.preventDefault()
    attemptLogout(dispatch)
    if(authUser === null) navigate('/login')
  }

  return (
      <nav className='sticky top-0 z-20'>
      <div className='bg-black py-3'></div>
        <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <div>
          <div className="mx-auto max-w-7xl py-2 px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <Logo />
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <Link
                    to="/"
                    className={`inline-flex items-center transition-all ${path === '/' ? 'border-b-2 border-[#1fb6ff]' : '' } px-1 text-lg font-light text-gray-900 hover:text-blue-500`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/profile"
                    className={`inline-flex items-center px-1 text-lg font-light text-gray-900 hover:text-blue-500 transition-all  ${path === '/profile' ? 'border-b-2 border-[#1fb6ff]' : '' }`}
                  >
                    Profile
                  </Link>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <RxMagnifyingGlass className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      <p>{open}</p>
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-[#1fb6ff] focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1fb6ff] sm:text-sm font-light"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-[#1fb6ff]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <RxCross2 className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <RxHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1fb6ff] focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full object-cover object-center"
                        src={Avatar}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-gray-700 font-light')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-gray-700 font-light cursor-pointer')}
                            onClick={handleLogout}
                          >
                            Sign out
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full object-cover object-center"
                    src={Avatar}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-lg font-light text-gray-800">Samuel</div>
                  <div className="text-xs font-light text-gray-500">skinuthia77@gmail.com</div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1fb6ff] focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                </button>
              </div>
              <div className="mt-3">
                <Link
                  to="/profile"
                  className="block px-4 py-1 text-base font-light text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Your Profile
                </Link>
                <div
                  className="block px-4 py-1 text-base font-light text-gray-500 hover:bg-gray-100 hover:text-gray-800 cursor-pointer"
                  onClick={handleLogout}
                >
                  Sign out
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
    </nav>
  )
}

export default Navbar