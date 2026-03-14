import HoverCard from "@/components/HoverCard";
import { cards } from "@/constants/cardData";


const Task1 = () => {

  return (
    <div className="flex flex-col py-[60px] px-[63px] min-h-screen">
      <p className="mb-[16px] text-[32px] text-center font-medium font-fustat">Note: Hover the component to view the animation & Click the arrow icon</p>

      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[24px]">
          <p className="text-[24px] font-medium font-outfit">Your SkillShikshya Journey</p>
          <p className="text-[32px] font-bold font-nohemi font-bold"><span className="text-[#1DA077]"> Step</span> In. <span className="text-[#1DA077]"> Skill</span> Up. <span className="text-[#1DA077]"> Stand</span> Out. 🚀</p>
          <p></p>
        </div>

        <div className="grid grid-cols-2 gap-x-[32px] gap-y-[40px]">
          {cards.map((card, i) => (
            <HoverCard key={i} {...card} />
          ))}
        </div>
      </div>

    </div>
  );
}
export default Task1;