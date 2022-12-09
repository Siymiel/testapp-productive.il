/* eslint-disable prettier/prettier */
import React from 'react';

// eslint-disable-next-line react/prop-types
const ProfileDetail = ({ title, value }) => {
  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
      <dt className="text-base font-medium text-gray-700">{title}</dt>
      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        <span className="flex-grow tracking-wide">{value}</span>
        <span className="ml-4 flex-shrink-0">
          <button
            type="button"
            className="rounded-md bg-white font-medium text-[#30a5e0] hover:text-[#1fb6ff] focus:outline-none focus:ring-2 focus:ring-[#1fb6ff] focus:ring-offset-2">
            Update
          </button>
        </span>
      </dd>
    </div>
  )
}

export default ProfileDetail;