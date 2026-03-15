"use client";

const RevealCard1 = () => {
    return (
        <div className="relative rounded-[30px] bg-[#F45B5B] w-full h-full overflow-hidden">

            <p className="absolute text-white text-[20px] font-medium right-[25px] top-[38px] max-w-[241px]">
                Clarity unlocked—stickers, sips, and skills all in one go!
            </p>

            <img
                src="/image 2.svg"
                alt="reveal"
                className="absolute w-[352px] h-[323px] left-[24px] top-[18px] rounded-lg"
            />

            <img
                src="/image.svg"
                alt="wow sticker"
                className="absolute w-[88px] h-[88px] left-[67px] top-[24px] rounded-lg"
                style={{ transform: "rotate(11.19deg)" }}
            />

            <img
                src="/image (1).svg"
                alt="wow sticker"
                className="absolute w-[88px] h-[88px] left-[385px] top-[193px] rounded-lg"
            />

        </div>
    );
};

export default RevealCard1;