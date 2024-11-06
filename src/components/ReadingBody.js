import React from "react";

import Intro from "./Intro";
import BookTile from "./BookTile";

const ProjectsBody = () => {
    return (
        <div>
            <div className='flex flex-col gap-4 px-2 pt-4 pb-8 md:gap-8'>
                <h1 className='font-fraunces text-5xl font-thin text-neutral-900 md:text-8xl'>reading</h1>
                <p className='max-w-prose text-neutral-400 tracking-tight'>Check out the books I've read and am diving into right now! It's a mix of stories and ideas that keep me inspired and entertained.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <div className='aspect-square px-1 pb-2'>
                    <BookTile title='The Design of Everyday Things' path='theDesignOfEverydayThings' author='Donald A. Norman' status='reading'/>
                </div>
                <div className='aspect-square px-1 pb-2'>
                    <BookTile title='Atomic Habits' path='atomicHabits' author='James Clear' status='read'/>
                </div>
                <div className='aspect-square px-1 pb-2'>
                    <BookTile title='The Alchemist' path='theAlchemist' author='Paulo Coelho' status='read'/>
                </div>
                <div className='aspect-square px-1 pb-2'>
                    <BookTile title='Power: A Woman&apos;s Guide to Living and Leading Without Apology' path='power' author='Kemi Nekvapil' status='read'/>
                </div>
                <div className='aspect-square px-1 pb-2'>
                    <BookTile title='How to Win Friends and Influence People' path='howToWinFriendsandInfluencePeople' author='Dale Carnegie' status='read'/>
                </div>
                <div className='aspect-square px-1 pb-2'>
                    <BookTile title='Before the Coffee Gets Cold' path='beforeTheCoffeeGetsCold' author='Toshikazu Kawaguchi' status='read'/>
                </div>
                <div className='aspect-square px-1 pb-2'>
                    <BookTile title='The Mountains Sing' path='theMountainsSing' author='Nguyen Phan Que Mai' status='read'/>
                </div>
                <div className='aspect-square px-1 pb-2'>
                    <BookTile title='Dust Child' path='dustChild' author='Nguyen Phan Que Mai' status='read'/>
                </div>
                <div className='aspect-square px-1 pb-2'>
                    <BookTile title='Anne of Green Gables' path='anneOfGreenGables' author='L.M. Montgomery' status='read'/>
                </div>
            </div>
        </div>
    )
}

export default ProjectsBody;