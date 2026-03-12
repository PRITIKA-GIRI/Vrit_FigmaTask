import HoverCard from "@/components/HoverCard";


 const Task1 = () => {
  const cards = [
    { title: "Start with Clarity", description: "Step into a better learning path...", bgColor: "bg-[#F45B5B]", imageSrc: "Group.svg", text:"Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth." },
    { title: "Practice by Doing", description: "Practical skills, real projects...", bgColor: "bg-[#5492A0]", imageSrc: "Group.svg", text: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth."  },
    { title: "Get Mentored", description: "You're not learning alone...", bgColor: "bg-[#6C64A8]", imageSrc: "Group.svg", text: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth."  },
    { title: "Achieve & Showcase", description: "Build your portfolio...", bgColor: "bg-[#A88964]", imageSrc: "Group.svg", text: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth."  },
  ];
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