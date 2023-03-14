import { FC } from "react";
import { Badge } from "@/src/components/badge";
import { MobileSwapSlide } from "./mobile-swap-sldie.component";

export const SwapContainer: FC = () => {
  return (
    <section>
      <div className="bg-green border-y-[3px] border-solid border-black py-[3px] lg:rotate-0 -rotate-[3.37deg] lg:mt-0 mt-[30px]">
        <p className="text-black md:text-[24px] text-[16px] text-center bold-text uppercase">
          explore, trade, manage and PLAY with your digital assets
        </p>
      </div>
      <div className="md:py-[80px] lg:grid lg:grid-cols-2 relative">
        <div className="col-span-1">
          <img
            src="/assets/images/hamsterbox/hamsterswap.png"
            alt="Hamsterswap"
            className="md:w-[70%] lg:w-[70%] md:w-auto w-[80%] h-[auto] mx-auto"
          />
        </div>
        <div className="col-span-1 hidden lg:block">
          <div className="lg:absolute top-0 right-[-3px] -rotate-2">
            <div className="bg-purple border-[2px] border-solid border-black lg:px-[70px] py-[3px] lg:inline-block">
              <p className="text-center uppercase text-white lg:text-[74px] md:text-[40px] text-[40px] bold-text">
                hamsterswap
              </p>
            </div>
            <p className="uppercase text-black text-[20px] md:text-[27px] bold-text text-center">
              TRUSTLESS PEER-TO-PEER SWAP PROTOCOL
            </p>
          </div>
          <div className="grid grid-cols-3 lg:mt-[200px]">
            <div className="col-span-1 text-center">
              <img
                src="/assets/images/hamsterbox/swap/1.png"
                alt="hamster"
                className="xl:w-[202px] lg:w-[150px] w-[152px] h-auto mx-auto"
              />
              <Badge
                overlayBadge={true}
                message="trustless"
                className="mx-auto"
              />
              <p className="text-black text-[16px] lg:text-[14px] xl:text-[16px] semi-bold-text text-center mx-auto md:max-w-[250px] mt-[3px]">
                All swaps are powered by smart contracts
              </p>
            </div>
            <div className="col-span-1 text-center">
              <Badge
                overlayBadge={false}
                message="flexible"
                className="mx-auto"
              />
              <p className="text-black text-[16px] lg:text-[14px] xl:text-[16px] semi-bold-text text-center mx-auto md:max-w-[250px] mt-[3px]">
                single or multiple assets and swap options
              </p>
              <img
                src="/assets/images/hamsterbox/swap/2.png"
                alt="hamster"
                className="xl:w-[202px] lg:w-[150px] w-[152px] h-auto mx-auto mt-[10px]"
              />
            </div>
            <div className="col-span-1 text-center">
              <img
                src="/assets/images/hamsterbox/swap/3.png"
                alt="hamster"
                className="xl:w-[202px] lg:w-[150px] w-[152px] h-auto mx-auto"
              />
              <Badge
                overlayBadge={false}
                message="cross-chain"
                className="mx-auto mt-[10px]"
              />
              <p className="text-black text-[16px] lg:text-[14px] xl:text-[16px] semi-bold-text text-center mx-auto md:max-w-[250px] mt-[3px]">
                SUPPORT SWAPS BETWEEN MULTIPLE CHAINS SEAMLESSLY
              </p>
            </div>
          </div>
        </div>
        <MobileSwapSlide />
      </div>
    </section>
  );
};
