import React from 'react';
import Nav from '../components/Nav';
import ProjectsBody from '../components/ProjectsBody';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className="font-sans mx-auto w-full max-w-screen-sm px-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
        <Nav />
        <ProjectsBody />
        <Footer />
    </div>
  );
};

export default Projects;
