"use client";
import { useState } from "react";
import StatCard from "./StatsCard";


const statsData = [
    {
        id: 1,
        number: "23",
        label: "All Courses",
        description: "courses you're journeying through right now.",
        imageSrc: "/stats-courses.svg",
    },
    {
        id: 2,
        number: "05",
        label: "Upcoming Courses",
        description: "exciting new courses walking by to boost your skills.",
        imageSrc: "/stats-upcoming.svg",
    },
    {
        id: 3,
        number: "10",
        label: "Ongoing Courses",
        description: "currently happening—don't miss out on the action!",
        imageSrc: "/stats-ongoing.svg",
    },
];

const StatsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0); 

    return (
        <div className="flex flex-col gap-[16px] w-full">
            {/* Row of stat cards */}
            <div className="flex gap-[32px] h-[200px]">
                {statsData.map((stat, index) => (
                    <StatCard
                        key={stat.id}
                        number={stat.number}
                        label={stat.label}
                        description={stat.description}
                        imageSrc={stat.imageSrc}
                        isActive={activeIndex === index}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default StatsSection;