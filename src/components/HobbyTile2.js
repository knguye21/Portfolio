import React from "react";

const HobbyTile2 = ({tags, name, description}) => {
    const tagStyles = {
        coffee: {
            backgroundColor: "#D4A373", // Light brown
            color: "#5C4033"            // Dark brown
        },
        chocolate: {
            backgroundColor: "#A5694F", // Milk chocolate brown
            color: "#3D2B1F"            // Dark chocolate
        },
        floral: {
            backgroundColor: "#FADADD", // Light pink
            color: "#B56576"            // Deep pink
        },
        fruit: {
            backgroundColor: "#FFEB99", // Light yellow
            color: "#A87932"            // Dark yellow-orange
        },
        tea: {
            backgroundColor: "#CDE0C9", // Pale green
            color: "#3B755F"            // Dark green
        }
    };

    return (
        <div className='group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100'>
            <div className='flex h-full w-full flex-col justify-between'>
                <div className='flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400'>
                    <span className='py-1.5'>
                        Hobbies &nbsp;·&nbsp; Drinks
                    </span>
                </div>
                <div className='p-5'>
                    <h3 className='font-serif mt-3 mb-[.8rem] text-3xl font-light md:text-4xl lg:text-5xl line-clamp-2' title={name}>
                        {name}
                    </h3>
                    {tags.map((tag, index) => (
                        <div key={index}
                            className='inline-block rounded px-2 pt-0.5 pb-1 mb-[.5rem] fpnt-mono text-base tracking-tight shadow-md mr-3'
                            style={{
                                backgroundColor: tagStyles[tag]?.backgroundColor || '#d6d6d6',
                                color: tagStyles[tag]?.color || '#333',
                            }}
                        >
                            {tag}
                        </div>
                    ))}
                    <p className='text-neutral-400'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default HobbyTile2;