import RevealCard2 from "@/components/RevealCard";
import RevealCard1 from "@/components/RevealCard1";
import RevealCard3 from "@/components/RevealCard3";


export const cards = [
    {
        title: "Start with Clarity",
        description: "Step into a better learning path...",
        bgColor: "bg-[#F45B5B]",
        imageSrc: "Group.svg",
        imageSide: "left" as const,
        text: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
        hasReveal: true,
        revealComponents: [RevealCard1],
        imagePosition: { top: "30px", left: "-50px" },
        textLeft: "220px",
    },
    {
        title: "Practice by Doing",
        description: "Practical skills, real projects...",
        bgColor: "bg-[#5492A0]",
        imageSide: "right" as const,
        imageSrc: "Group (1).svg",
        text: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
        hasReveal: true,
        revealComponents: [RevealCard2, RevealCard3],
        imagePosition: { top: "15px", left: "350px", },
        textLeft: "35px",
    },
    {
        title: "Get Mentored",
        description: "You're not learning alone...",
        bgColor: "bg-[#6C64A8]",
        imageSide: "left" as const,
        imageSrc: "Group (2).svg",
        text: "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
        hasReveal: false,
        revealComponents: [],
        imagePosition: { top: "112px", left: "-49px",  },
        textLeft: "260px",
    },
    {
        title: "Achieve & Showcase",
        description: "Build your portfolio...",
        bgColor: "bg-[#A88964]",
        imageSide: "right" as const,
        imageSrc: "Group (3).svg",
        text: "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
        hasReveal: false,
        revealComponents: [],
        imagePosition: { top: "53px", left: "317px", },
        textLeft: "35px",
    },
];