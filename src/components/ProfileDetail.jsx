/* eslint-disable prettier/prettier */
import React from 'react';

// eslint-disable-next-line react/prop-types
const ProfileDetail = ({ title, value }) => {
  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
      <dt className="text-base font-normal text-gray-500">{title}</dt>
      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        <span className="flex-grow">{value}</span>
        <span className="ml-4 flex-shrink-0">
          <button
            type="button"
            className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Update
          </button>
        </span>
      </dd>
    </div>
  )
}

export default ProfileDetail;