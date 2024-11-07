import React from 'react';

const Nav = () => {
    const lContents = [
        {
            title: 'Kim',
            link: '/',
        },
        {
            title: 'Projects',
            link: '/projects',
        },
        {
            title: 'Reading',
            link: '/reading',
        },
        {
            title: 'Hobbies',
            link: '/hobbies',
        },
    ];

    const rContents = [
        {
            title: 'CodePen',
            link: 'https://codepen.io/collection/xebVqe',
        },
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/designsbykimn/',
        },
        {
            title: 'Resume',
            link: 'https://drive.google.com/file/d/1Vjmarud1Od9OEr-S14xNqJ4Ycuz9dhyM/view?usp=sharing',
        },
    ];

    return (
        <div className='sticky top-0 isolate z-10 flex items-center justify-center py-4 px-1 md:justify-between'>
            <div className='text-sm md:text-base relative flex rounded-lg border border-neutral-200 shadow-md backdrop-blur-md bg-white/70 p-2'>
                {lContents.map((content, index) => (
                    <div key={index} className='group'>
                        <a href={content.link} 
                            className='w-24 text-sm items-center justify-center py-2 px-3 transition-colors duration-300 
                                   text-gray-400 group-hover:cursor-pointer group-hover:bg-zinc-200 
                                   group-hover:text-neutral-900 rounded-md transform translate-y-0 group-hover:-translate-y-10 ease-out'>{content.title}
                        </a>
                    </div>
                ))}
            </div>
            <div className='hidden md:flex transition-opacity rounded-lg border border-neutral-200 shadow-md backdrop-blur-md bg-white/70 p-2'>
                {rContents.map((content, index) => (
                    <div key={index} className='group'>
                        <a href={content.link} target='_blank'
                            className='rounded py-1 px-2 text-sm text-gray-400 decoration-wavy underline-offset-4 focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-neutral-900 cursor-alias transition-colors hover:text-neutral-900 hover:underline'>{content.title}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Nav;
