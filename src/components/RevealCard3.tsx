"use client";

const RevealCard3 = () => {
    return (
        <div className="relative rounded-[30px] bg-[#5492A0]  flex items-center  justify-center pl-[80px] max-w-full md:max-w-[600px] h-[341px]">
            <p className="absolute text-white text-[20px] font-medium text-center top-[38px] max-w-[241px]">
                Laptops, lessons, and a whole lot of growth!
            </p>

            <button
                className="absolute top-1/2 left-[-31px] w-[62px] h-[62px] bg-[#FAFAFA] rounded-full shadow-lg flex items-center justify-center cursor-pointer z-10"

                style={{
                    transform: "translateY(-50%)",
                    boxShadow: "0 0 0 14px #FFFFFF",

                }}
            >
                <img src="arrow-left.svg" alt="icon" />
            </button>

            <img
                src={"1 3 (1).svg"}
                alt="reveal"
                className="absolute  items-baseline w-[572px] h-[303px] left-[40px] top-[38px] rounded-lg"
            />

         
        </div>
    );
};

export default RevealCard3;