/* eslint-disable prettier/prettier */
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroCarousel from '../components/carousels/HeroCarousel';
import UserSection from '../components/sections/UserSection';
import CtaSection from '../components/sections/CtaSection';
import Modal from '../components/Modal';
import RatingSection from '../components/sections/RatingSection';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleOpenClick = () => {
      setModalOpen(true)
  }
  const handleCloseClick = () => {
      setModalOpen(false)
  }

  return (
  <>
    <Navbar />
    <HeroCarousel handleOpenClick={handleOpenClick}/>
    <Modal modalOpen={modalOpen} handleCloseClick={handleCloseClick}/>
    <UserSection />
    <CtaSection />
    <RatingSection />
    <Footer />
  </>
  );
}

export default Home;