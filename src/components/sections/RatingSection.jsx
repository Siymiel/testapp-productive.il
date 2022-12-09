/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import UserCard001 from '../cards/UserCard001';
import { getAllUsers } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';


const RatingSection = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.allUsers)
  console.log(users)

  useEffect(() => {
    getAllUsers(dispatch)
  }, [dispatch])

  return (
    <section className="mt-20">
      <div className="text-center text-4xl font-light uppercase">
        <h2>Announcements</h2>
      </div>
      {/* {
        users.map(user => {
          return (
            <UserCard001 />
          )
        })
      } */}
      <UserCard001 />
    </section>
  );
};

export default RatingSection;
