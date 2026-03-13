import HoverCard from "@/components/HoverCard";
import { cards } from "@/constants/cardData";


 const Task1 = () => {
  
  return (
    <div className="flex flex-col py-[60px] px-[63px] min-h-screen">
      <p className="mb-[16px] text-[32px] text-center font-medium font-futsat">Note: Hover the component to view the animation & Click the arrow icon</p>
      <div className="grid grid-cols-2 gap-[32px]">
        {cards.map((card, i) => (
          <HoverCard key={i} {...card} />
        ))}
      </div>
    </div>
  );
}
export default Task1;