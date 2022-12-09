/* eslint-disable prettier/prettier */
import TestimonialSlider from "../carousels/TestimonialSlider";

const NoticeSection = () => {
  const style = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
  };
  return(
    <div className="w-full h-96 mt-28 bg-cover bg-center relative grid items-center justify-center" style={style}>
        <div className="inset-0 absolute bg-black bg-opacity-25"></div>
        <TestimonialSlider />
    </div>
  )
};

export default NoticeSection;
