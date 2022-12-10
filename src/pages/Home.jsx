/* eslint-disable prettier/prettier */
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroCarousel from '../components/carousels/HeroCarousel';
import CompanySection from '../components/sections/CompanySection';
import CtaSection from '../components/sections/CtaSection';
import Modal from '../components/Modal';
import DataSection from '../components/sections/DataSection';
import UserModal from '../components/UserModal';
import { useDispatch } from 'react-redux';
import { getSingleUser } from '../redux/apiCalls';
import TestimonialSection from '../components/sections/TestimonialSection';
import QuoteSection from '../components/sections/QuoteSection';
import { ScrolltoTop } from '../components/arrows/Arrows';

const Home = () => {
  const dispatch = useDispatch();

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenClick = () => {
      setModalOpen(true)
  }
  const handleCloseClick = () => {
      setModalOpen(false)
  }

  // Modal 1
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
    <CompanySection />
    <CtaSection />
    <TestimonialSection />
    <QuoteSection />
    <DataSection handleOpenClick1={handleOpenClick1}/>
    <UserModal modalOpen1={modalOpen1} handleCloseClick1={handleCloseClick1}/>
    <ScrolltoTop />
    <Footer />
  </>
  );
}

export default Home;