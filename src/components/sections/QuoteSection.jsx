/* eslint-disable prettier/prettier */
import Quote from '../../images/quote.jpeg'

const NoticeSection = () => {
  const style = {
    backgroundImage:
      `url(${Quote})`
  };
  return(
    <div className="w-full h-56 md:h-96 mt-20 md:mt-28 bg-cover bg-center relative grid items-center justify-center" style={style}>
        <div className="inset-0 absolute bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-2">
          <p className="text-base md:text-2xl lg:text-3xl font-light text-center text-white">We can endure much more than we think we can; all human experience testifies to that.</p>
          <span className="italic text-xs md:text-sm md:text-base lg:text-lg font-light float-right text-gray-300 pt-4">~Rabbi Harold S. Kushner</span>
        </div>
    </div>
  )
};

export default NoticeSection;
