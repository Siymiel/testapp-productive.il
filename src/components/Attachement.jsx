/* eslint-disable prettier/prettier */
import React from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const Attachement = ({ title }) => {
  return (
    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-base">
        <div className="flex w-0 flex-1 items-center">
        <AiOutlinePaperClip className="h-5 w-5 flex-shrink-0 text-[#30a5e0]" aria-hidden="true" />
        <span className="ml-2 w-0 flex-1 truncate">{title}</span>
        </div>
        <div className="ml-4 flex flex-shrink-0 space-x-4">
        <button
            type="button"
            className="rounded-md bg-white text-sm font-medium text-[#30a5e0] hover:text-[#1fb6ff] focus:outline-none focus:ring-2 focus:ring-[#1fb6ff] focus:ring-offset-2"
        >
            Update
        </button>
        <span className="text-[#30a5e0]" aria-hidden="true">
            |
        </span>
        <button
            type="button"
            className="rounded-md bg-white text-sm font-medium text-[#30a5e0] hover:text-[#1fb6ff] focus:outline-none focus:ring-2 focus:ring-[#1fb6ff] focus:ring-offset-2"
        >
            Remove
        </button>
        </div>
    </li>
  )
}

export default Attachement