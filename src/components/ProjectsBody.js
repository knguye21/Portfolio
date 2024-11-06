import React from "react";

import Intro from "./Intro";
import ProjectTile from "./ProjectTile";

const ProjectsBody = () => {
    return (
        <div>
            <div className='flex flex-col gap-4 px-2 pt-4 pb-8 md:gap-8'>
                <h1 className='font-fraunces text-5xl font-thin text-neutral-900 md:text-8xl'>projects</h1>
                <p className='max-w-prose text-neutral-400 tracking-tight'>I like to build things for the web. Each project showcases my journey of transforming ideas into functional, user-centered solutions.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <div className='aspect-2/1 sm:col-span-2 px-1 pb-1'>
                    <ProjectTile name='Teradyne' path='teradyne' imgpath='teradyne/teradyne' position='Software Intern'/>
                </div>
                <div className='aspect-2/1 sm:col-span-2 px-1 pb-1'>
                    <ProjectTile name='Verasoni' path='verasoni' imgpath='verasoni/verasoni' position='WordPress Web Design Intern'/>
                </div>
                <div className='aspect-square px-1 pb-2'>
                    <ProjectTile name='The Legacy Project' path='thelegacyproject' imgpath='thelegacyproject/thelegacyproject' position='PM'/>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectsBody;