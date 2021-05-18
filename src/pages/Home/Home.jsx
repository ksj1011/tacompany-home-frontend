import React from 'react';
import { Header, Footer } from '../../components';
import {
  Hero,
  Services,
  Services2,
  Services3,
  Works,
  Works2,
} from './components';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Services2 />
      <Works />
      <Services3 />
      <Works2 />
      <Footer />
    </>
  );
};

export default Home;
