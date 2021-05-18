import React from 'react';
import { Header, Footer } from '../../components';
import {
  MainBanner,
  Company,
  Process,
  Portfolio,
  Education,
  Contact,
} from './components';

const Home = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <Company />
      <Process />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
