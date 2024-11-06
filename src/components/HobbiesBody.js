import React from "react";

import Intro from "./Intro";
import HobbyTile from "./HobbyTile";
import HobbyTile2 from './HobbyTile2';

const HobbiesBody = () => {
    return (
        <div>
            <div className='flex flex-col gap-4 px-2 pt-4 pb-8 md:gap-8'>
                <h1 className='font-fraunces text-5xl font-thin text-neutral-900 md:text-8xl'>hobbies</h1>
                <p className='max-w-prose text-neutral-400 tracking-tight'>
                    A little bit of everything... Here&apos;s where I share all the fun things I love to do, 
                    from creative projects and outdoor adventures to food photography and binge-worthy shows. 
                    Take a look around my playground of passions—who knows, you might find your next favorite pastime!
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <div className='aspect-square px-1 pb-2'>
                    <HobbyTile2 tags={['fruit', 'tea', 'milk']} name='Strawberry Matcha Latte' description='matcha powder, fresh strawberries, milk, sugar'/>
                </div>
                <div className='aspect-square px-1 pb-2'>
                    <HobbyTile2 tags={['coffee']} name='Vietnamese Coffee' description='Vietnamese coffee grounds, sweetened condensed milk'/>
                </div>
                <div className='aspect-square px-1 pb-2'>
                    <HobbyTile path='valleyOfFire' hobby='Hiking' alt='Valley of Fire State Park'/>
                </div>
                <div className='aspect-square px-1 pb-2'>
                    <HobbyTile path='taco' hobby='Food Media' alt='Port Vida Mexican Cantina'/>
                </div>
                <div className='aspect-square px-1 pb-2'>
                    <HobbyTile path='bomDoughCafe' hobby='Food Media' alt='bōm dough'/>
                </div>
                <div className='aspect-square px-1 pb-2'>
                    <HobbyTile path='friends' hobby='TV Show' alt='Friends'/>
                </div>
            </div>
        </div>
    )
}

export default HobbiesBody;