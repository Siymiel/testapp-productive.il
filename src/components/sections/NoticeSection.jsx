/* eslint-disable prettier/prettier */

const NoticeSection = () => {
  const style = {
    backgroundImage:
      "url('https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
  };
  return(
    <div className="w-full h-72 md:h-96 mt-28 bg-cover bg-center relative grid items-center justify-center" style={style}>
        <div className="inset-0 absolute bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <p className="text-3xl font-light text-center text-white">We can endure much more than we think we can; all human experience testifies to that.</p>
          <span className="italic text-lg font-light float-right text-gray-300 pt-4">~Rabbi Harold S. Kushner</span>
        </div>
    </div>
  )
};

export default NoticeSection;
