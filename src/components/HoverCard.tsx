"use client";
import React, { useState } from "react";

interface HoverCardProps {
    title: string;
    description?: string;
    bgColor: string;
    imageSrc?: string;
    number?: string;
    text?: string;
    imagePosition?: {
        top?: string | number;
        right?: string | number;
        bottom?: string | number;
        left?: string | number;
        translateY?: string | number; // for vertical centering
        translateX?: string | number; // optional horizontal adjustment
        width?: string | number;
        height?: string | number;
    };
}

const HoverCard: React.FC<HoverCardProps> = ({ title, description, bgColor, imageSrc, number,text,imagePosition }) => {
    const [hovered, setHovered] = useState(false);
    const imageOnLeft = imagePosition?.left !== undefined;

    return (
        <div
            className={`relative rounded-[30px] w-[592px] h-[341px]  p-10 flex items-center justify-between cursor-pointer transition-transform duration-300 ease-in-out ${bgColor} ${hovered ? "scale-105 shadow-lg" : ""}`}
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

            <div
                className={`flex gap-10 w-full ${imageOnLeft ? "flex-row-reverse" : "flex-row"
                    }`}
            >
                {/* TEXT */}
                <div
                    className={`relative z-10 text-white max-w-[350px] `}
                >
                    <h3 className="text-[32px] font-bold mb-[10px]">{title}</h3>

                    {description && (
                        <p className="font-medium text-[24px] mb-[32px]">{description}</p>
                    )}

                    {text && <p className={`text-[18px] ${imageOnLeft ? "text-end" : ""}`}>{text}</p>}
                </div>

                {/* IMAGE */}
                {imageSrc && (
                    <img
                        src={imageSrc}
                        alt="illustration"
                        className="absolute pointer-events-none"
                        style={{
                            top: imagePosition?.top ?? "50%",
                            right: imagePosition?.right,
                            bottom: imagePosition?.bottom,
                            left: imagePosition?.left,
                            transform: `translateY(${imagePosition?.translateY ?? "-50%"}) translateX(${imagePosition?.translateX ?? "0"
                                })`,
                            width: imagePosition?.width ?? "auto",
                            height: imagePosition?.height ?? "auto",
                        }}
                    />
                )}
            </div>

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