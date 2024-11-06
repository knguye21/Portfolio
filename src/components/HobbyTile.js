import React from "react";
import Image from 'next/image';

const HobbyTile = ({ path, hobby, alt }) => {
    return (
            <div className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100">
                <div className="relative flex h-full w-full flex-col justify-between">
                    <Image src={`/hobbies/${path}.png`} alt={alt} 
                        decoding='async'
                        sizes='(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
                        layout='fill'
                        objectFit='cover'
                        data-nimg='fill'
                        loading='lazy'
                        className='rounded-lg object-cover transition-all group-focus-within:mt-12 group-hover:mt-12'
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: '0px',
                            color: 'transparent',
                        }}
                        />
                    <div className='flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400'>
                        <span className='py-1.5'>
                            <a className='transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:text-neutral-500 focus-visible:underline hover:text-neutral-500 hover:underline'
                                href='/hobbies'> Hobbies
                            </a> 
                            &nbsp;•&nbsp; {hobby} [{alt}]
                        </span>
                    </div>
                </div>
            </div>
    )
}

export default HobbyTile;