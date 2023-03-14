import { FC } from "react";

export const HamsterToolContainer: FC = () => {
  return (
    <div className="mt-[50px]">
      <div
        className="border-solid border-t-[3px] border-b-[3px] border-black bg-purple300 overflow-x-hidden"
        style={{ display: "-webkit-box" }}
      >
        <p className="md:text-[95px] text-[40px] text-black bold-text uppercase mx-[20px] md:mx-[80px]">
          TOOLS
        </p>
        <p className="md:text-[95px] text-[40px] bold-text uppercase mx-[20px] md:mx-[80px] tst">
          TOOLS
        </p>
        <p className="md:text-[95px] text-[40px] text-black bold-text uppercase mx-[20px] md:mx-[80px]">
          TOOLS
        </p>
        <p className="md:text-[95px] text-[40px] text-black bold-text uppercase mx-[20px] md:mx-[80px]">
          TOOLS
        </p>
      </div>
      <div className="bg-green md:px-[30px] xl:px-[50px] px-[20px] py-[50px]">
        <img
          src="/assets/images/hamsterbox/hamstertool.png"
          alt="EX"
          className="md:w-full xl:w-[70%] h-auto mx-auto w-full"
        />
        <p className="max-w-[480px] mx-auto text-black bold-text md:text-[24px] text-[14px] uppercase text-center mt-[30px]">
          WALLET MIGRATOR WANT TO SWEEP ALL ASSETS TO ANOTHER WALLETS? WE GOT
          YOUR BACK!
        </p>
      </div>
    </div>
  );
};
