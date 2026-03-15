"use client";

import Image from "next/image";

interface StatCardProps {
    number: string;
    label: string;
    description: string;
    imageSrc: string;
    isActive: boolean;
    onClick: () => void;
}

const StatCard: React.FC<StatCardProps> = ({
    number,
    label,
    description,
    imageSrc,
    isActive,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className={`
                relative rounded-[32px] cursor-pointer overflow-hidden
                transition-all duration-500 ease-in-out h-[461px] 
                ${isActive
                    ? "bg-[#C33241] flex-[2] min-w-[260px]"
                : "bg-[#F9EBEC] flex-[1] min-w-[100px] group overflow-visible"
                }
                h-[200px]
            `}
        >
            {/* ACTIVE CARD CONTENT */}
            {isActive && (
                <div className="flex flex-col justify-between h-full pt-[40px] px-[38px]">
                    {/* Top row — images + view all */}
                    <div className="flex items-center justify-end">
                        <button className="text-white text-[18px] flex items-center font-outfit font-semibold gap-[8px] ">
                            View all Courses <Image src="C Icon.svg" alt="arrow" width={16} height={16} />
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-[42px] h-[93px] items-center ">
                        <Image src="Frame.svg" alt="arrow" width={85} height={85} />
                        <Image src="Group (5).svg" alt="arrow" width={85} height={85} />
                        <Image src="Group (6).svg" alt="arrow" width={85} height={85} />
                        <Image src="Group (7).svg" alt="arrow" width={85} height={85} />
                    </div>

                    {/* Bottom row — number + label + description */}
                    <div className="flex gap-[3px] h-[138px] items-start">
                        <div className="  h-[138px] items-start py-0">
                            <div className="text-white text-[130px] leading-none items-start  font-bold font-nohemi">
                                {number}<sup className="text-[64px] align-super">+</sup>
                            </div>

                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <p className="text-white text-[30px] font-bold font-outfit whitespace-nowrap">
                                {label}
                            </p>
                            <p className="text-white text-[12px] font-outfit text-[18px] ">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* INACTIVE CARD CONTENT — rotated vertical text */}

            {isActive && (
                <div className="flex gap-[3px]  h-[148px] bg-red-300 pointer-events-none">
                    {/* Label + Description */}
                    <div className="flex flex-col  h-[148px] gap-[12px] justify-start">
                        <p className="text-white text-[30px] font-bold font-outfit font-semibold ">
                            {label}
                        </p>
                        <p className="text-white text-[18px] font-outfit">
                            {description}
                        </p>
                    </div>
                </div>
            )}

            
            {/* ── INACTIVE CARD ── */}
            {!isActive && (
                <div className="relative flex flex-col gap-[24px] h-full pt-[40px] px-[16px] pointer-events-none group">

                    {/* HOVER REVEAL — absolute at top */}
                        <div className=" absolute top-[-50px] left-0 right-0
                        flex flex-col items-center
                        opacity-0 -translate-y-2
                        group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300 ease-in-out
                        z-10 ">
                        <p className=" text-[16px] font-regular font-outfit text-center ">
                            Click me!
                        </p>
                        <Image
                            src="/Hand-drawn Shapes.svg"
                            alt={label}
                            width={50}
                            height={50}

                        />

                    </div>

                    {/* Vertical label — unchanged */}
                    <div className="flex gap-[12px] justify-center items-center w-full h-[252px]">
                        <p
                            className="text-[#C0182A] text-[32px] font-bold font-outfit"
                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                            {label}
                        </p>
                        <p
                            className="text-[#C0182A] text-[18px] font-outfit"
                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                            exciting new courses waiting to boost your skills.
                        </p>
                    </div>

                    {/* Number — unchanged */}
                    <div className="flex items-center justify-center h-[138px]">
                        <div className="text-[#C33241] text-[130px] font-bold font-nohemi leading-none text-center">
                            {number}
                            <sup className="text-[64px] align-super">+</sup>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default StatCard;