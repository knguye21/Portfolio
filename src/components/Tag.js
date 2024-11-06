import React from "react";

const Tag = ({ list }) => {
    const tagStyles = {
        webProgramming: {
            backgroundColor: "#1F618D", // Deep Blue
        },
        uiUxDesign: {
            backgroundColor: "#F39C12", // Vibrant Orange
        },
        sharePoint: {
            backgroundColor: "#0072C6", // SharePoint Blue
        },
        pm: {
            backgroundColor: "#28B463", // Green
        },
        frontendDeveloper: {
            backgroundColor: "#D35400", // Burnt Orange
        },
        wordpress: {
            backgroundColor: "#21759B", // WordPress Blue
        },
        css: {
            backgroundColor: "#A0522D",
        },
    };

    const keyMapping = {
        "web programming": "webProgramming",
        "UI/UX design": "uiUxDesign",
        "SharePoint": "sharePoint",
        "PM": "pm",
        "frontend developer": "frontendDeveloper",
        "WordPress": "wordpress",
        "CSS" : "css",
    };
    
    return (
        <div className='flex py-5'>
            {list.map((item, index) => {
                const key = keyMapping[item] || item;
                const style = tagStyles[key] || { backgroundColor: '#d6d6d6' };
                
                return (
                    <div key={index} 
                        className='inline-block text-white rounded px-2 pt-0.5 pb-1 mb-[.5rem] fpnt-mono text-base tracking-tight shadow-md mr-3'
                        style={style}
                    >
                        {item}
                    </div>
                );
            })}
        </div>
    )
}

export default Tag;