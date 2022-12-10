/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import UserCard001 from '../cards/UserCard001';
import { getAllUsers } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const DataSection = ({ handleOpenClick1 }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users)

  useEffect(() => {
    getAllUsers(dispatch)
  }, [dispatch])

  return (
    <section className="mt-20">
      <div className="text-center text-4xl font-light uppercase">
        <h2>Data Component</h2>
      </div>
      <p className='text-sm font-light pt-2 text-center'>The data below has been fetched from the jsonplaceholder API (
        <Link to="https://jsonplaceholder.typicode.com/users" className='text-red-400'> https://jsonplaceholder.typicode.com/users </Link>
        ) (Except for the image)</p>
      <p className='text-sm font-light pt-2 text-center'>Click the search icon to dynamically change the username</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 max-w-full mx-auto px-10 pt-10'>
      {
        users && users.map(user => <UserCard001 key={user.id} username={user?.username} handleOpenClick1={handleOpenClick1} id={user?.id} />)
      }
      </div>
    </section>
  );
};

export default DataSection;
