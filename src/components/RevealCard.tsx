"use client";
import React from "react";

interface RevealCardProps {
    revealImage?: string;
    revealText?: string;
}

const RevealCard: React.FC<RevealCardProps> = ({ revealImage, revealText }) => {
    return (
        <div className="rounded-[30px] bg-[#F45B5B]  p-8 flex items-center gap-6 max-w-full md:max-w-[600px] h-[341px]">
            {revealImage && (
                <img
                    src={revealImage}
                    alt="reveal"
                    className="w-[140px] h-auto rounded-lg"
                />
            )}

            {revealText && (
                <p className="text-white text-[18px] font-medium leading-relaxed max-w-[400px]">
                    {revealText}
                </p>
            )}
        </div>
    );
};

export default RevealCard;