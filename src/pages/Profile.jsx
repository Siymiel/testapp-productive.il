/* eslint-disable prettier/prettier */
import React from 'react';
import ProfileDetail from '../components/ProfileDetail';
import Attachement from '../components/Attachement';
import Navbar from '../components/Navbar';

const Profile = () => {
  return (
    <main>
      <Navbar />
    <section className='max-w-full mx-auto px-10 mt-10'>
      <div className='flex items-center space-x-5'>
        <img className='w-36 h-36 rounded-full object-cover object-center' src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="avatar"/>
        <div>
          <h3 className="text-4xl font-light leading-6 text-gray-900">User Profile</h3>
          <p className="mt-3 font-light max-w-2xl text-base text-gray-500">Profile details and attachments.</p>
        </div>
      </div>
      <section className="mt-5 border-t border-gray-200 max-w-4xl">
        <dl className="divide-y divide-gray-200">
          <ProfileDetail title="Full name" value="Samuel Kinuthia"/>
          <ProfileDetail title="Application for" value="Backend Developer"/>
          <ProfileDetail title="Email address" value="skinuthia.77@gmail.com"/>
          <ProfileDetail title="Salary expectation" value="$120,000"/>
          <ProfileDetail title="About" value="Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu"/>

          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <Attachement title="resume_back_end_developer.pdf"/>
                <Attachement title="coverletter_back_end_developer.pdf"/>
              </ul>
            </dd>
          </div>
        </dl>
    </section>
  </section>
  </main>
  )
}

export default Profile;