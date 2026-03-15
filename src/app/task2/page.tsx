import HoverCard from "@/components/HoverCard";
import StatsCard from "@/components/StatsCard";
import StatsSection from "@/components/StatsSection";
import { cards } from "@/constants/cardData";


const Task2 = () => {

    return (
        <div className="flex flex-col py-[60px] px-[112px] min-h-screen">
            <p className="mb-[16px] text-[32px] text-center font-medium font-fustat">Note: Click the cards to view the animation</p>

            <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[24px]">
                    <p className="text-[24px] font-medium font-outfit">Explore our classes and master trending skills!</p>
                    <p className="text-[32px] font-bold font-nohemi font-bold">Dive Into <span className="text-[#1DA077]"> What’s Hot Right Now!</span> 🔥</p>
                    <p></p>
                </div>

                <div >
                    <StatsSection />
                </div>


            </div>

        </div>

    );
}
export default Task2;