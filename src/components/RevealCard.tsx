"use client";
import React from "react";

interface RevealCardProps {
    revealImage?: string;
    revealText?: string;
}

const RevealCard: React.FC<RevealCardProps> = ({ revealImage, revealText }) => {
    return (
        <div className="relative rounded-[30px] bg-[#5492A0]  flex items-center pl-[80px] max-w-full md:max-w-[600px] h-[341px]">
            {revealText && (
                <p className="absolute text-white text-[20px] font-medium text-left top-[38px] max-w-[241px]">
                    {revealText}
                </p>
            )}

            <button
                className="absolute top-1/2 left-[-31px] w-[62px] h-[62px] bg-[#FAFAFA] rounded-full shadow-lg flex items-center justify-center cursor-pointer z-10"

                style={{
                    transform: "translateY(-50%)",
                    boxShadow: "0 0 0 14px #FFFFFF",

                }}
            >
                <img src="arrow-left.svg" alt="icon" />
            </button>

            {revealImage && (
                <img
                    src={revealImage}
                    alt="reveal"
                    className="absolute  items-baseline w-[572px] h-[303px] left-[40px] top-[38px] rounded-lg"
                />
            )}
            <button
                className="absolute top-1/2 right-[-31px] w-[62px] h-[62px] bg-[#FAFAFA] rounded-full shadow-lg flex items-center justify-center cursor-pointer z-10"
                
                style={{
                    transform: "translateY(-50%)",
                    boxShadow: "0 0 0 14px #FFFFFF",

                }}
            >
                <img src="Icon.svg" alt="icon" />
            </button>

            
        </div>
    );
};

export default RevealCard;