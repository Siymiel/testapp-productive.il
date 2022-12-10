/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { RiSearchLine } from 'react-icons/ri';
import DataUser from '../../images/datauser.avif'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  z-index: 2;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Div = styled.div`
`;
const Span = styled.span``;

// eslint-disable-next-line react/prop-types
const DataCard = ({username, id, handleOpenClick1}) => {
  return (
    <Container>
      <Div className="absolute z-10 top-2 left-2 bg-gray-800 text-white text-xs uppercase font-light py-1 px-3">
        <Span>{username}</Span>
      </Div>
      <Circle />
      <Image src={DataUser} />
      {/* <Image src={avatar} /> */}
      <Info>
        <Icon onClick={() => handleOpenClick1(id)}>
          <Div>
            <RiSearchLine />
          </Div>
        </Icon>
      </Info>
    </Container>
  );
};

export default DataCard;
