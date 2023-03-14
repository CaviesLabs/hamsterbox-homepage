import { FC } from "react";
import { Badge } from "@/src/components/badge";
import { MobileSwapSlide } from "./mobile-swap-sldie.component";

export const MoneyContainer: FC = () => {
  return (
    <section>
      <div className="md:py-[80px] lg:grid lg:grid-cols-2 relative">
        <div className="col-span-1 hidden lg:block">
          <div className="lg:absolute top-0 left-[-3px] rotate-3">
            <div className="bg-yellow border-[2px] border-solid border-black lg:px-[70px] py-[3px] lg:inline-block">
              <p className="text-center uppercase text-black lg:text-[74px] md:text-[40px] text-[40px] bold-text">
                hamstermoney
              </p>
            </div>
            <p className="uppercase text-black text-[20px] md:text-[27px] bold-text text-center">
              global web3 digital store
            </p>
          </div>
          <div className="grid grid-cols-3 lg:mt-[200px]">
            <div className="col-span-1 text-center">
              <Badge
                overlayBadge={false}
                message="NON-CUSTODIAL"
                className="mx-auto"
              />
              <p className="text-black text-[16px] lg:text-[14px] xl:text-[16px] semi-bold-text text-center mx-auto md:max-w-[250px] mt-[3px]">
                PURCHASE in-app items DIRECTLY USING YOUR WEB3 WALLET
              </p>
              <img
                src="/assets/images/hamsterbox/money/1.png"
                alt="hamster"
                className="xl:w-[202px] lg:w-[150px] w-[152px] h-auto mx-auto"
              />
            </div>
            <div className="col-span-1 text-center relative top-[-10px]">
              <img
                src="/assets/images/hamsterbox/money/2.png"
                alt="hamster"
                className="xl:w-[202px] lg:w-[150px] w-[152px] h-auto mx-auto"
              />
              <Badge
                overlayBadge={false}
                message="MULTI-app"
                className="mx-auto mt-[10px]"
              />
              <p className="text-black text-[16px] lg:text-[14px] xl:text-[16px] semi-bold-text text-center mx-auto md:max-w-[250px] mt-[3px]">
                EXPLORE VARIOUS THIRD-PARTY in-app items, top-ups and vouchers
              </p>
            </div>
            <div className="col-span-1 text-center">
              <Badge
                overlayBadge={true}
                message="EFFORTLESS"
                className="mx-auto mt-[10px]"
              />
              <p className="text-black text-[16px] lg:text-[14px] xl:text-[16px] semi-bold-text text-center mx-auto md:max-w-[250px] mt-[3px]">
                BUY FOR YOURSELF OR GIFT TO OTHERS, NO QUESTIONS ASKED!
              </p>
              <img
                src="/assets/images/hamsterbox/money/3.png"
                alt="hamster"
                className="xl:w-[202px] lg:w-[150px] w-[152px] h-auto mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <img
            src="/assets/images/hamsterbox/hamstermoney.png"
            alt="Hamsterswap"
            className="md:w-[70%] lg:w-[70%] md:w-auto w-[80%] h-[auto] mx-auto"
          />
        </div>
        <MobileSwapSlide />
      </div>
    </section>
  );
};
