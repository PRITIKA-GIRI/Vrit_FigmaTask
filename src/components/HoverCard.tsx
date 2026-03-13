"use client";
import React from "react";
import RevealCard from "./RevealCard";

interface HoverCardProps {
    title: string;
    description?: string;
    bgColor: string;
    imageSrc?: string;
    text?: string;
    revealImage?: string;
    revealText?: string;
    hasReveal?: boolean; // Only first two cards will have reveal
    imagePosition?: {
        top?: string | number;
        right?: string | number;
        bottom?: string | number;
        left?: string | number;
        translateY?: string | number;
        translateX?: string | number;
        width?: string | number;
        height?: string | number;
    };
}

const HoverCard: React.FC<HoverCardProps> = ({
    title,
    description,
    bgColor,
    imageSrc,
    text,
    revealImage,
    revealText,
    hasReveal = false,
    imagePosition,
}) => {
    const imageOnLeft = imagePosition?.left !== undefined;

    return (
        <div className="relative group w-[592px] h-[341px]">

            {/* MAIN CARD */}
            <div
                className={`absolute inset-0 rounded-[30px] p-10 flex items-center transition-all duration-500 ease-in-out ${bgColor}
        ${hasReveal ? (imageOnLeft ? "group-hover:-translate-x-10" : "group-hover:translate-x-10") : ""}
        ${hasReveal ? "group-hover:opacity-0" : ""}
        `}
            >
                <div
                    className={`flex gap-10 w-full ${imageOnLeft ? "flex-row-reverse" : "flex-row"}`}
                >
                    {/* TEXT */}
                    <div className="relative z-10 text-white max-w-[350px]">
                        <h3 className="text-[32px] font-bold mb-[10px]">{title}</h3>
                        {description && <p className="font-medium text-[24px] mb-[32px]">{description}</p>}
                        {text && <p className={`text-[18px] ${imageOnLeft ? "text-end" : ""}`}>{text}</p>}
                    </div>

                    {/* IMAGE with floating animation */}
                    {imageSrc && (
                        <img
                            src={imageSrc}
                            alt="illustration"
                            className={`absolute pointer-events-none ${hasReveal ? "animate-float" : ""}`}
                            style={{
                                top: imagePosition?.top ?? "50%",
                                right: imagePosition?.right,
                                bottom: imagePosition?.bottom,
                                left: imagePosition?.left,
                                transform: `translateY(${imagePosition?.translateY ?? "-50%"}) translateX(${imagePosition?.translateX ?? "0"})`,
                                width: imagePosition?.width ?? "auto",
                                height: imagePosition?.height ?? "auto",
                            }}
                        />
                    )}
                </div>
            </div>

            {/* REVEAL CARD */}
            {hasReveal && (
                <div
                    className="absolute inset-0 opacity-0 translate-x-10
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-500"
                >
                    <RevealCard revealImage={revealImage} revealText={revealText} />
                </div>
            )}
        </div>
    );
};

export default HoverCard;