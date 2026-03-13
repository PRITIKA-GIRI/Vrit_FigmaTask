"use client";


const StatsCard = () => {
    return (
        <div className="relative rounded-[30px] bg-[#F9EBEC] flex flex-col gap-[24px] px-[35px] py-0 max-w-full md:max-w-[280px] h-[461px]">

            <div className="  flex flex-col gap-[12px] rotate-[-90deg] bg-green-300 origin-left">
                <p className="text-[#C33241] font-bold text-[32px]">
                    Upcoming Courses
                </p>
                <p className="text-[#C33241] text-[18px] font-normal">
                    exciting new courses waiting to boost your skills.
                </p>
            </div>

            <p className="text-[#C33241] text-[150px] bg-green-100 text-center">05</p>

        </div>
    );
};

export default StatsCard;