"use client";

const RevealCard2 = () => {
    return (
        <div className="relative rounded-[30px] bg-[#5492A0] w-full h-full overflow-hidden">
            <p className="absolute text-white text-[20px] font-medium left-[25px] top-[38px] max-w-[241px]">
                Focused faces—learning mode: ON!
            </p>

            <img
                src="/1 3.svg"
                alt="reveal"
                className="absolute w-[572px] h-[303px] left-[40px] top-[38px] rounded-lg"
            />
        </div>
    );
};

export default RevealCard2;