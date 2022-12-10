/* eslint-disable prettier/prettier */
import { RiDoubleQuotesL } from 'react-icons/ri';
import PropTypes from 'prop-types'

const Testimony = ({ imageUrl, name }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <img
          className="w-full h-72 md:h-80 object-center object-cover"
          src={imageUrl}
          alt="testimony image"
        />
      </div>
      <div className="px-5">
        <div className='md:pt-4'>
            <RiDoubleQuotesL className='w-12 md:w-16 h-12 md:h-16 text-gray-300'/>
        </div>
        <h4 className="text-3xl md:text-4xl font-light pt-1 md:pt-5 tracking-wide">{name}</h4>
        <p className="text-base font-light mt-5 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi error consequatur ab nam
          voluptatum exercitationem quos natus, numquam consectetur delectus!
        </p>
        <p className="text-base font-light tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloribus saepe atque
          necessitatibus!
        </p>
      </div>
    </div>
  );
};

Testimony.propTypes =  {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Testimony;
