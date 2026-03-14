"use client";
import React, { useState } from "react";

interface HoverCardProps {
    title: string;
    description?: string;
    bgColor: string;
    imageSrc?: string;
    text?: string;
    hasReveal?: boolean;
    imageSide?: "left" | "right";
    revealComponents?: React.ComponentType[];
    imagePosition?: {
        top?: string;
        left?: string;

    };
    textLeft?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({
    title,
    description,
    bgColor,
    imageSrc,
    text,
    imageSide = "right",
    revealComponents = [],
    hasReveal = false,
    imagePosition,
    textLeft,
}) => {
    const [revealIndex, setRevealIndex] = useState<number | null>(null);
    const imageOnLeft = imageSide === "left";
    const isRevealed = revealIndex !== null;

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (revealIndex === null) return;
        if (revealIndex < revealComponents.length - 1) {
            setRevealIndex(revealIndex + 1);
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (revealIndex === null) return;
        if (revealIndex > 0) {
            setRevealIndex(revealIndex - 1);
        } else {
            setRevealIndex(null);
        }
    };

    return (
        <div
            className="relative group w-[592px] h-[341px] rounded-[30px] cursor-pointer"
            onMouseEnter={() => hasReveal && setRevealIndex(0)}
            onMouseLeave={() => setRevealIndex(null)}
        >
            {/* MAIN CARD */}
            <div
                className={`
                    absolute inset-0 rounded-[30px] flex items-start
                    transition-all duration-[1200ms] ease-in-out ${bgColor}
                    ${hasReveal && isRevealed
                        ? "-translate-x-full opacity-0"
                        : "translate-x-0 opacity-100"}
                `}
            >
                <div
                    className={`relative z-10 text-white max-w-[320px] font-roboto mt-[58px]
                    ${imageOnLeft
                            ? "ml-auto pr-[35px] text-right"
                            : "pl-[35px] text-left"
                        }
            `}
                >
                    <h3 className="text-[32px] font-bold mb-[10px]">{title}</h3>
                    {description && (
                        <p className="font-medium text-[20px] mb-[16px]">{description}</p>
                    )}
                    {text && (
                        <p className="text-[15px] ">{text}</p>
                    )}
                </div>


                {imageSrc && (
                    <img
                        src={`/${imageSrc}`}
                        alt="card illustration"
                        className={`absolute pointer-events-none z-10 ${imageOnLeft ? "animate-float-reverse" : "animate-float"}`}
                        style={{
                            top: imagePosition?.top ?? "0px",
                            left: imagePosition?.left ?? "0px",
                        }}
                    />
                )}
            </div>

            {/* REVEAL CARDS */}
            {hasReveal && revealComponents.map((RevealComponent, index) => (
                <div
                    key={index}
                    className={`
                        absolute inset-0
                        transition-all duration-[1200ms] ease-in-out
                        ${isRevealed && revealIndex === index
                            ? "opacity-100 translate-x-0"
                            : revealIndex !== null && index < revealIndex
                                ? "opacity-0 -translate-x-full"
                                : "opacity-0 translate-x-full"
                        }
                    `}
                >
                    <RevealComponent />

                    {/* LEFT NAV BUTTON */}
                    <button
                        onClick={handlePrev}
                        aria-label="Previous"
                        className="absolute top-1/2 -translate-y-1/2 left-[-31px] w-[62px] h-[62px] bg-[#FAFAFA] rounded-full flex items-center justify-center z-20"
                        style={{ boxShadow: "0 0 0 14px #FFFFFF" }}
                    >
                        <img src="/arrow-left.svg" alt="" width={24} height={24} />
                    </button>

                    {/* RIGHT NAV BUTTON — only if more reveal cards exist */}
                    {index < revealComponents.length - 1 && (
                        <button
                            onClick={handleNext}
                            aria-label="Next"
                            className="absolute top-1/2 -translate-y-1/2 right-[-31px] w-[62px] h-[62px] bg-[#FAFAFA] rounded-full flex items-center justify-center z-20"
                            style={{ boxShadow: "0 0 0 14px #FFFFFF" }}
                        >
                            <img src="/Icon.svg" alt="" width={24} height={24} />
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default HoverCard;