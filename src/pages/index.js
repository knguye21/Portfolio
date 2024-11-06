// src/pages/index.js
import React from 'react';
import Nav from '../components/Nav';
import IndexBody from '../components/IndexBody';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-sans mx-auto w-full max-w-screen-sm px-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
      <Nav />
      <IndexBody />
      <Footer />
    </div>
  );
};

export default Home;
