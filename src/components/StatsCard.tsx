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
                    : "bg-[#F9EBEC] flex-[1] min-w-[100px]"
                }
                h-[200px]
            `}
        >
            {/* ACTIVE CARD CONTENT */}
            {isActive && (
                <div className="flex flex-col justify-between h-full py-[40px] px-[38px]">
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
                    <div className="flex gap-[3px] h-[148px] items-center">
                        <div className="  h-[138px]">
                            <span className="text-white text-[130px] font-bold font-nohemi">
                                {number}<sup className="text-[64px] align-super">+</sup>
                            </span>

                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <p className="text-white text-[30px] font-bold font-outfit font-semibold mt-1">{label}</p>
                            <p className="text-white text-[12px] font-outfit text-[18px] ">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* INACTIVE CARD CONTENT — rotated vertical text */}
            {!isActive && (
                <div className="flex flex-col items-center max-w-[280px] justify-between h-full py-[24px] px-[16px]">
                    {/* Number */}
                    <div className="flex items-start">
                        <span className="text-[#C0182A] text-[36px] font-bold leading-none">
                            {number}
                        </span>
                        <span className="text-[#C0182A] text-[18px] font-bold mt-1">+</span>
                    </div>

                    {/* Vertical label */}
                    <p
                        className="text-[#C0182A] text-[13px] font-semibold text-center"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                        {label}
                    </p>
                </div>
            )}
        </div>
    );
};

export default StatCard;