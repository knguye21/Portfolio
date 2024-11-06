import React from "react";

const BookTile = ({title, path, author, status}) => {

    const getTextColor = (status) => {
        switch (status) {
            case 'read':
                return '#228b22';
            case 'reading':
                return '#daa520';
            case 'to read':
                return '4682b4';
            default:
                return '#d3d3d3';
        }
    }

    const getBackgroundColor = (status) => {
        switch (status) {
            case 'read': 
                return '#d8f3dc';
            case 'reading':
                return '#bde0f3';
            case 'to read':
                return '#fff3b0';
            default: 
                return '#ffffff';
        }
    }

    
    return (
        <div className='group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100'>
            <div className='isolate flex h-full w-full flex-col'>
                <div className='flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400'>
                    <span className='py-1.5'>
                        <a href='/reading' 
                            className='transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:text-neutral-500 focus-visible:underline hover:text-neutral-500 hover:underline'>Reading
                        </a>
                        &nbsp;·&nbsp; Books
                    </span>
                </div>

                <div className='grid grow grid-cols-2 items-end gap-6 px-7 pb-10'>
                    <img src={`/books/${path}.png`}
                        alt={title}
                        className='rounded shadow-lg transition-transform group-focus-within:-rotate-3 group-focus-within:scale-110 group-focus-within:shadow-xl group-hover:-rotate-3 group-hover:scale-110 group-hover:shadow-xl'
                    />
                    <div className='-tracking-[0.03em]'>
                        <div className='inline-block rounded px-1.5 pt-0.5 pb-1 font-mono text-sm tracking-tight uppercase shadow-md'
                            style={{ color: getTextColor(status), backgroundColor: getBackgroundColor(status) }}>
                                {status}
                        </div>
                        <h3 className='mt-3 line-clamp-3'>{title}</h3>
                        <span className='text-neutral-400 text-sm'>{author}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookTile;