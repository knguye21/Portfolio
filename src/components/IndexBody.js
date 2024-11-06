import React from "react";

import Intro from "./Intro";
import ProjectTile from "./ProjectTile";
import WeatherTile from "./WeatherTile";
import HobbyTile from "./HobbyTile";
import HobbyTile2 from "./HobbyTile2";
import BookTile from "./BookTile";

const IndexBody = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <div className='row-span-2 px-1 pb-2 sm:col-span-2 lg:aspect-square'>
                <Intro />
            </div>
            <div className='aspect-2/1 sm:col-span-2 px-1 pb-1'>
                <ProjectTile name='Teradyne' path='teradyne' imgpath='teradyne/teradyne' position='Software Intern'/>
            </div>
            <div className='aspect-square px-1 pb-2'>
                <ProjectTile name='The Legacy Project' path='thelegacyproject' imgpath='thelegacyproject/thelegacyproject' position='PM'/>
            </div>
            <div className='aspect-square px-1 pb-2'>
                <WeatherTile city='Boston' description='Where I Am From' className='transition-transform group-hover:scale-105'/>
            </div>
            <div className='aspect-square px-1 pb-2'>
                <HobbyTile path='bomDoughCafe' hobby='Food Photography' alt='bōm dough'/>
            </div>
            <div className='aspect-2/1 sm:col-span-2 px-1 pb-1'>
                <ProjectTile name='Verasoni' path='verasoni' imgpath='verasoni/verasoni' position='WordPress Web Design Intern'/>
            </div>
            <div className='aspect-square px-1 pb-2'>
                <BookTile title='The Design of Everyday Things' path='theDesignOfEverydayThings' author='Donald A. Norman' status='reading'/>
            </div>
            <div className='aspect-square px-1 pb-2'>
                <WeatherTile city='Ho Chi Minh City' description='Where My Family is From' className='transition-transform group-hover:scale-105'/>
            </div>
            <div className='aspect-square px-1 pb-2'>
                    <HobbyTile2 tags={['coffee']} name='Vietnamese Coffee' description='Vietnamese coffee grounds, sweetened condensed milk'/>
                </div>
            <div className='aspect-square px-1 pb-2'>
                <HobbyTile2 tags={['fruit', 'tea', 'milk']} name='Strawberry Matcha Latte' description='matcha powder, fresh strawberries, milk, sugar'/>
            </div>
            <div className='aspect-square px-1 pb-2'>
                <HobbyTile path='taco' hobby='Food Media' alt='Port Vida Mexican Cantina'/>
            </div>

        </div>
    )
}

export default IndexBody;