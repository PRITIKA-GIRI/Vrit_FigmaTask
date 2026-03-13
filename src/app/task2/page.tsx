import HoverCard from "@/components/HoverCard";
import StatsCard from "@/components/StatsCard";
import { cards } from "@/constants/cardData";


const Task2 = () => {

    return (
        <div className="flex flex-col py-[60px] px-[63px] min-h-screen">
            <p className="mb-[16px] text-[32px] text-center font-medium font-futsat">Note: Click the cards to view the animation</p>

            <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[24px]">
                    <p className="text-[24px] font-medium font-outfit">Explore our classes and master trending skills!</p>
                    <p className="text-[32px] font-medium font-bold">Dive Into   <span className="text-[#1DA077]"> What’s Hot Right Now!</span> 🔥</p>
                    <p></p>
                </div>

                <div className="grid grid-cols-2 gap-[32px]">
                    <StatsCard/>
                </div>
            </div>

        </div>
    );
}
export default Task2;