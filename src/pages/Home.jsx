/* eslint-disable prettier/prettier */
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroCarousel from '../components/carousels/HeroCarousel';
import UserSection from '../components/sections/UserSection';
import CtaSection from '../components/sections/CtaSection';
import Modal from '../components/Modal';
import RatingSection from '../components/sections/RatingSection';
import UserModal from '../components/UserModal';
import { useDispatch } from 'react-redux';
import { getSingleUser } from '../redux/apiCalls';

const Home = () => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenClick = () => {
      setModalOpen(true)
  }
  const handleCloseClick = () => {
      setModalOpen(false)
  }

  const [modalOpen1, setModalOpen1] = useState(false)
  const handleOpenClick1 = (id) => {
      setModalOpen1(true)
      getSingleUser(dispatch, id)
  }
  const handleCloseClick1 = () => {
      setModalOpen1(false)
  }

  return (
  <>
    <Navbar />
    <HeroCarousel handleOpenClick={handleOpenClick}/>
    <Modal modalOpen={modalOpen} handleCloseClick={handleCloseClick}/>
    <UserSection />
    <CtaSection />
    <RatingSection handleOpenClick1={handleOpenClick1}/>
    <UserModal modalOpen1={modalOpen1} handleCloseClick1={handleCloseClick1}/>
    <Footer />
  </>
  );
}

export default Home;