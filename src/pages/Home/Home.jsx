import React from 'react';
import { Header, Footer } from '../../components';
import {
  Hero,
  Services,
  Services2,
  Services3,
  Feature,
  Figure,
  Works,
  Works2,
  Contact,
  Banner,
} from './components';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Services2 />
      <Works />
      {/* <Feature /> */}
      <Services3 />
      {/* <Figure /> */}
      <Works2 />
      {/* <Contact /> */}
      {/* <Banner /> */}
      <Footer />
    </>
  );
};

export default Home;
