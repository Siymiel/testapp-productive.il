/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ url, title }) => {
  return (
    <>
      <div className="max-w-md px-5">
        <div href="#" className="group">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img
              src={url}
              alt="category-img"
              className="h-64 w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-2 text-md font-light text-gray-900">{title}</h3>
        </div>
      </div>
    </>
  );
};

UserCard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
};

export default UserCard;
