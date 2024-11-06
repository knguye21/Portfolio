import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import Tag from '../components/Tag';
const Verasoni = () => {
  return (
    <div className="font-sans mx-auto w-full max-w-screen-sm px-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
        <Nav />
        <div className='text-sm p-10 rounded-lg space-y-10'>
            <div className='flex flex-col'>
                <h1 className='font-serif text-3xl font-thin text-neutral-900 md:text-6xl'>Verasoni</h1>
                <Tag list={['UI/UX design', 'WordPress', 'CSS']}/>
                <h3 className='text-2xl font-semibold pb-1.5'>[Context]</h3>
                <p className='leading-normal'><span className='text-blue-900'><a href='https://verasoni.com/' target='_blank'>Verasoni</a></span>
                    &nbsp;is a public relations and marketing firm offering the highest level of creative and strategic integrated marketing communications 
                    and public relations planning to clients in the United States and across the globe. They work with clients to provide innovative design 
                    and marketing strategies to create effective ads, web design, print materials, and more.
                    <br/><br/>As a programming intern, my responsibilities include ... 
                </p>
                <ul className='list-disc ml-4 py-2'>
                    <li>Collaborating closely with the development team on a variety of client-facing projects.</li>
                    <li>Contributing to website design, UX/UI implementation, graphic design, and CSS/HTML coding.</li>
                    <li>Build websites on WordPress using Elementor.</li>
                </ul>
                <p className='leading-normal pt-4'> On a project-by-project basis, I ...</p>
                <ul className='list-disc ml-4 py-2'>
                    <li>Designing and developing WordPress-powered websites.</li>
                    <li>Leveraging appealing graphics, well-organized layouts, current design trends, and industry best practices.</li>
                    <li>Utilize a collaborative approach to soliciting feedback, enabling iterative improvements before finalizing work.</li>
                    <li>Applying strong written communication skills to bring effective visual ideas to completion.</li>
                    <li>Thoughtfully reflect on how to implement suggested changes or corrections to my code and design work.</li>
                </ul>
            </div>
            <div className='bg-neutral-50 p-6 rounded-lg shadow-md transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100'>
                <h3 className='text-2xl font-semibold mb-2'>
                    <a href='https://providencedentalga.com/' className='text-blue-900 hover:underline'>
                        Providence Dental Spa
                    </a>
                </h3>
                <p className='mb-4'>
                    I redesigned the Providence Dental Spa website to align with their rebranding efforts, including new color themes and conceptual changes. 
                    The client was involved throughout the process and approved the components I created. Visit the company site to see the implemented site.
                </p>
                
                <div className='flex flex-col items-center'>
                    <div className='flex flex-wrap mb-4 justify-center'>
                        <img src='/projects/verasoni/pds1.png' className='w-full max-w-xs md:max-w-sm lg:max-w-md h-auto p-5' alt="Design 1"/>
                        <img src='/projects/verasoni/pds2.png' className='w-full max-w-xs md:max-w-sm lg:max-w-md h-auto p-5' alt="Design 2"/>
                    </div>
                    <img src='/projects/verasoni/pds3.png' className='w-full max-w-xs md:max-w-sm lg:max-w-md h-auto p-5' alt="Design 3"/>
                </div>
                
                <a href='https://www.figma.com/design/BGkE9j1c75bTS3g6wpyI4Z/Providence-Dental-Spa-Mockups?node-id=0-1&t=pBXN1yS7FV3NIXBO-1' className='text-blue-900 hover:underline mt-4 block'>
                    View All Design Versions
                </a>
            </div>
            <div className='bg-neutral-50 p-6 rounded-lg shadow-md transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100'>
                <h3 className='text-2xl font-semibold mb-2'>
                    <a href='https://flandersdentalstudio.com/' target='_blank' className='text-blue-900 hover:underline'>
                        Flanders Dental Studio
                    </a>
                </h3>
                <p className='mb-4'>
                    For the Flanders Dental Studio project, I explored various rebranding concepts. 
                    Through an iterative process, I was able to identify the specific design components that the client was most drawn to. 
                    By thoughtfully combining these preferred elements, I was able to craft a cohesive and compelling new brand identity that 
                    resonated with their business. Visit the company site to see the implemented site.
                </p>
                
                <div className='flex flex-col items-center'>
                    <div className='flex flex-wrap mb-4 justify-center'>
                        <img src='/projects/verasoni/fds1.png' className='w-full max-w-xs md:max-w-sm lg:max-w-md h-auto p-5' alt="Design 1"/>
                        <img src='/projects/verasoni/fds2.png' className='w-full max-w-xs md:max-w-sm lg:max-w-md h-auto p-5' alt="Design 2"/>
                    </div>
                    <img src='/projects/verasoni/fds3.png' className='w-full max-w-xs md:max-w-sm lg:max-w-md h-auto p-5' alt="Design 3"/>
                </div>
                
                
                <a href='https://drive.google.com/drive/folders/1t0oOOGpm5v9mXmvV1ENIyb1Ps_rTRVa-?usp=sharing' target='_blank' 
                    className='text-blue-900 hover:underline mt-4 block'>
                    View All Design Versions
                </a>
            </div>
            <div className='bg-neutral-50 p-6 rounded-lg shadow-md transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100'>
                <h3 className='text-2xl font-semibold mb-2'>
                    <a href='https://425dental.com/' target='_blank' className='text-blue-900 hover:underline'>
                        425 Dental
                    </a>
                </h3>
                <p className='mb-4'>
                For the 425 Dental project, I redesigned their existing website and presented multiple conceptual versions. 
                While the client was most drawn to the overall feel of the first design version, they also expressed interest in incorporating
                certain design elements from the second version. Given the extensive nature of their existing site, the full redesign and 
                implementation will require a significant investment of time. However, by selectively blending the client's preferred aesthetics 
                from the different concepts, I was able to craft a cohesive and compelling new design that builds upon the strengths of the previous iterations.
                Visit the company site to see the implemented site.
                </p>
                
                <div className='flex flex-wrap mb-4 justify-center'>
                    <img src='/projects/verasoni/425dental1.png' className='w-full max-w-xs md:max-w-sm lg:max-w-md h-auto p-5' alt="Design 1"/>
                    <img src='/projects/verasoni/425dental2.png' className='w-full max-w-xs md:max-w-sm lg:max-w-md h-auto p-5' alt="Design 2"/>
                </div>
                
                
                <a href='https://drive.google.com/file/d/18EL-eGv8aO1oSreYBy_Fxl0jQo8Lqbma/view?usp=sharing' target='_blank' 
                    className='text-blue-900 hover:underline mt-4 block'>
                    View All Design Versions
                </a>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Verasoni;
