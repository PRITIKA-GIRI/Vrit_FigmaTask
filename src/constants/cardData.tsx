import RevealCard2 from "@/components/RevealCard";
import RevealCard1 from "@/components/RevealCard1";

export const cards = [
    {
        title: "Start with Clarity",
        description: "Step into a better learning path...",
        bgColor: "bg-[#F45B5B]",
        imageSrc: "Group.svg",
        text: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
        hasReveal: true,
        revealComponent: <RevealCard1 />,
        imagePosition: { top: "20%", left: "-60px", height: "338px", width: "257px" }
    },

    {
        title: "Practice by Doing", description: "Practical skills, real projects...",
        bgColor: "bg-[#5492A0]",
        imageSrc: "Group (1).svg",
        text: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
        hasReveal: true,
        revealComponent: <RevealCard2 />,
        imagePosition: { top: "0%", right: "0px", height: "500px", width: "180px" }
    },

    {
        title: "Get Mentored",
        description: "You're not learning alone...",
        bgColor: "bg-[#6C64A8]",
        imageSrc: "Group (2).svg",
        text: "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.",
        imagePosition: { top: "50%", left: "-60px", height: "250px", width: "307px" }
    },

    {
        title: "Achieve & Showcase",
        description: "Build your portfolio...",
        bgColor: "bg-[#A88964]",
        imageSrc: "Group (3).svg",
        text: "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.", imagePosition: { top: "35%", right: "0px", height: "310px", width: "300px" },
    },
];