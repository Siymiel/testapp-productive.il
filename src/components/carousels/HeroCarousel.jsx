/* eslint-disable react/prop-types *//* eslint-disable prettier/prettier */
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../../data';
// import { mobile } from '../../responsive';
import { RxFramerLogo } from 'react-icons/rx';

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media(max-width: 754px) {
    height: 50vh;
  };
`;
//   ${mobile({ display: 'none' })}

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 85%;
  width: 100%;
  object-fit: cover;
  @media(max-width: 480px) {
    height: 50%
  }
`;

const InfoContainer = styled.div`
  flex: 1;
`;
//   padding: 40px;

const Title = styled.h1`
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid;
  background-color: transparent;
  cursor: pointer;
`;

const HeroSlider = ({ handleOpenClick }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <AiOutlineArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
              
            <InfoContainer className='mt-5 lg:mt-20 p-4 lg:p-10'>
              <div className='grid'>
                <div className='w-36 h-36 p-2 rounded-full border border-red-400 grid justify-center items-center opacity-10'>
                  <RxFramerLogo className="w-20 h-20" />
                </div>
                <Title className="-mt-20 text-2xl md:text-4xl lg:text-5xl border-b z-10">{item.title}</Title>
              </div>
              <Desc className='text-sm md:text-lg lg:text-xl'>{item.desc}</Desc>
                <Button className='mt-1 md:mt-10 text-xs sm:text-sm md:text-base' onClick={handleOpenClick}>READ MORE</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <AiOutlineArrowRight />
      </Arrow>
    </Container>
  );
};

export default HeroSlider;
