"use client";

import Image from "next/image";

const RevealCard1 = () => {
    return (
        <div className="relative rounded-[30px] bg-[#F45B5B]  flex  pl-[80px] max-w-full md:max-w-[600px] h-[341px]">
            <p className="absolute text-white text-[20px] font-medium text-left right-[25px] top-[38px] max-w-[241px]">
                Clarity unlocked—stickers, sips, and skills all in one go!
            </p>

            <button
                className="absolute top-1/2 left-[-31px] w-[62px] h-[62px] bg-[#FAFAFA] rounded-full shadow-lg flex items-center justify-center cursor-pointer z-10"
                style={{
                    transform: "translateY(-50%)",
                    boxShadow: "0 0 0 14px #FFFFFF",

                }}
            >
                <Image src="arrow-left.svg" alt="icon" width={24} height={4} />
            </button>
            <Image
                width={0}
                height={0}
                src={"image.svg"}
                alt="wow sticker"
                className="absolute   w-[88px] h-[88px] left-[67px] top-[24px] rounded-lg rotate-[11.19]"
            />
            <Image
                width={0}
                height={0}
                src={"image (1).svg"}
                alt="wow sticker"
                className="absolute   w-[88px] h-[88px] left-[385px] top-[193px] rounded-lg "

            />

            <Image
                width={0}
                height={0}
                src={"image 2.svg"}
                alt="reveal"
                className="absolute   w-[352px] h-[323px] left-[24px] top-[18px] rounded-lg"
            />

            <button
                className="absolute top-1/2 right-[-31px] w-[62px] h-[62px] bg-[#FAFAFA] rounded-full shadow-lg flex items-center justify-center cursor-pointer z-10"
                style={{
                    transform: "translateY(-50%)",
                    boxShadow: "0 0 0 14px #FFFFFF",

                }}
            >
                <Image src="Icon.svg" alt="icon" width={24} height={4} />
            </button>


        </div>
    );
};

export default RevealCard1;