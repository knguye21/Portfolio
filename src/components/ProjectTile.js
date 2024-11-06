import React from "react";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectTile = ({name, path, imgpath, position}) => {
    return (
        <div className='group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100'>
            <div className='relative isolate h-full w-full'>
                <img src={`/projects/${imgpath}.png`}
                    alt={name}
                    sizes='(min-width: 1280px) 50vw, (min-width: 1024px) 66vw, 100vw'
                    decoding='async'
                    data-nimg='fill'
                    loading='lazy'
                    className='-z-10 object-contain transition-transform group-hover:scale-105'
                    style=
                        {{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            top: '0%',
                            inset: '0px',
                            color: 'transparent',
                        }}
                />
                <div className='flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400'>
                    <span className='py-1.5'>
                        <a className='transition-colors focus-visible:ring-4 focus-visible:ring-blue-400 focus-visible:text-neutral-500 focus-visible:underline hover:text-neutral-500 hover:underline' href='https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio'>Projects</a> 
                        &nbsp;•&nbsp; {name} [{position}]
                    </span>
                    <a href={`/${path}`}
                        className='flex h-8 w-8 items-center justify-center rounded-full transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 group-focus-within:bg-white group-focus-within:text-neutral-900 group-focus-within:shadow-md cursor-alias group-hover:bg-white group-hover:text-neutral-900 group-hover:shadow-md'>
                        <FontAwesomeIcon icon={faArrowUp} className='rotate-45'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectTile;