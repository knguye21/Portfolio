import React from "react";

const Intro = () => {
    return (
        <div className="h-full w-full p-4 sm:p-10 space-y-9">
            <h1 className="font-fraunces text-1.5xl text-neutral-400 sm:text-2xl lg:text-3xl items-center !leading-tight">
                Hi! I'm&nbsp;
                <span className="text-neutral-900">Kim</span>
                <img src='/gallery/headshot.png' alt='headshot' className='inline mx-2 rounded-full object-cover w-1/12' />
                Welcome to my playground
                <img src='/icons/playground.png' alt='playground' className='inline mx-2 w-1/12' />
                I like building <a href='/projects' className='text-neutral-900 rounded underline-offset-4 decoration-orange-400 focus-visible:ring-4 focus-visible:ring-blue-200 focus:underline hover:underline'>things</a>&nbsp; for the web.
            </h1>
            <h1 className='font-fraunces text-1.5xl text-neutral-400 sm:text-2xl lg:text-3xl items-center !leading-tight'>
                For each project, I bring&nbsp;
                <span className="text-neutral-900">passion</span>
                <img src='/icons/heart.png' alt='heart' className='inline mx-2 w-1/12' />
                and &nbsp;
                <span className="text-neutral-900">dedication</span>, ensuring that each interaction <img src='/icons/interaction.png' alt='playground' className='inline mx-1 w-1/12' /> feels
                <span className="text-neutral-900">&nbsp;helpful</span>,
                <span className="text-neutral-900">&nbsp;personal</span>, and
                <span className="text-neutral-900">&nbsp;valuable</span>.
            </h1>
            <h1 className='font-fraunces text-1.5xl text-neutral-400 sm:text-2xl lg:text-3xl items-center !leading-tight'>
                I find joy in <span className='text-neutral-900'>daily strolls</span>, <a href='/hobbies' className='text-neutral-900 rounded underline-offset-4 decoration-orange-400 focus-visible:ring-4 focus-visible:ring-blue-200 focus:underline hover:underline'>food photography</a>, 
                and <a href='/reading' className='text-neutral-900 rounded underline-offset-4 decoration-orange-400 focus-visible:ring-4 focus-visible:ring-blue-200 focus:underline hover:underline'>diving into new stories</a>.
                <img src='/icons/book.png' alt='heart' className='inline mx-2 w-1/12' />
            </h1>
            <h1 className="font-fraunces text-1.5xl text-neutral-400 sm:text-2xl lg:text-3xl items-center !leading-tight">
                I've taken up crocheting
                <img src='/icons/crocheting.png' alt='crocheting' className='inline mx-2 w-1/12' />
                as a creative outlet, and I'm working on being better at that.
            </h1>
        </div>
    )
}

export default Intro;