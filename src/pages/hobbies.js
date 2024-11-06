import React from 'react';
import Nav from '../components/Nav';
import HobbiesBody from '../components/HobbiesBody';
import Footer from '../components/Footer';

const Hobbies = () => {
  return (
    <div className="font-sans mx-auto w-full max-w-screen-sm px-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
        <Nav />
        <HobbiesBody />
        <Footer />
    </div>
  );
};

export default Hobbies;
