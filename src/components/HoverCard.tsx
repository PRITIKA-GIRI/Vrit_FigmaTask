"use client";
import React, { useState } from "react";

interface HoverCardProps {
    title: string;
    description?: string;
    bgColor: string;
    imageSrc?: string;
    number?: string;
    text?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ title, description, bgColor, imageSrc, number,text }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`relative rounded-[30px] w-[592px] h-[341px]  p-6 flex items-center justify-between cursor-pointer transition-transform duration-300 ease-in-out ${bgColor} ${hovered ? "scale-105 shadow-lg" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                    {/* Left Arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            <div className="flex flex-col max-w-[60%] text-white">
                {number && <div className="text-4xl font-bold">{number}</div>}
                <h3 className="text-[32px] font-bold mb-[10px]">{title}</h3>
                {description && <p className="font-medium text-[24px] mb-[32px]">{description}</p>}
                {text && <p className="text-[18px] font-regular">{text}</p>}
            </div>

            {imageSrc && <img src={imageSrc} alt="illustration" className="w-40 h-auto rounded-lg select-none" />}

            {hovered && (
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                    {/* Right Arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default HoverCard;