import React from 'react';
import { Header, Footer } from '../../components';
import {
  MainBanner,
  Company,
  Process,
  Portfolio,
  Education,
  Contact,
  Chroma,
  Live,
  With,
} from './components';

const Home = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <Company />
      <Chroma />
      <Live />
      <Process />
      <Portfolio />
      <Education />
      <With />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
