import { FC, useState } from "react";
import { Controller, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Badge } from "@/src/components/badge";

const SwiperConntroller: FC<{ curIndex: number }> = () => {
  const swiper = useSwiper();
  return (
    <>
      <button
        className="absolute left-[10px] top-[50%]"
        style={{ zIndex: 10 }}
        onClick={() => {
          console.log("slide");
          swiper.slidePrev();
        }}
      >
        <img
          src="/assets/images/hamsterbox/slide-btn.svg"
          alt="btn"
          className="w-[12.5px] h-[25px]"
        />
      </button>
      <button
        className="absolute right-[10px] top-[50%] rotate-[180deg]"
        style={{ zIndex: 10 }}
        onClick={() => {
          console.log("slide");
          swiper.slideNext();
        }}
      >
        <img
          src="/assets/images/hamsterbox/slide-btn.svg"
          alt="btn"
          className="w-[12.5px] h-[25px]"
        />
      </button>
    </>
  );
};

export const MobileSwapSlide: FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <div className="w-full h-auto lg:hidden pb-[70px]">
      <div className="-rotate-2">
        <div className="bg-purple border-[2px] border-solid border-black lg:px-[70px] py-[3px] lg:inline-block">
          <p className="uppercase text-white lg:text-[74px] md:text-[40px] text-[40px] bold-text pl-[20px]">
            hamsterswap
          </p>
        </div>
        <p className="uppercase text-black text-[20px] md:text-[27px] bold-text pl-[20px]">
          TRUSTLESS PEER-TO-PEER SWAP PROTOCOL
        </p>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(slide) => {
          console.log("on slide change", slide.activeIndex % 3);
          setSlideIndex(slide.activeIndex % 3);
        }}
        defaultValue={1}
        modules={[Navigation, Pagination, Controller, Autoplay]}
        className="mt-[20px]"
        // autoplay={{
        //   delay: 200000,
        //   pauseOnMouseEnter: true,
        //   disableOnInteraction: false,
        // }}
        // loop
      >
        <SwiperSlide>
          <div className="flex justify-center items-center md:px-0 px-[20px]">
            <div className="flex justify-center">
              <div className="float-left w-[40%] md:w-[35%]">
                <img
                  src="/assets/images/hamsterbox/swap/1.png"
                  alt="hamster"
                  className="w-full h-auto"
                />
              </div>
              <div className="float-left md:w-[50%] flex items-center">
                <div className="max-w-[200px] md:max-w-full text-center">
                  <Badge
                    overlayBadge={true}
                    message="trustless"
                    className="mx-auto mt-[10px] md:text-[30px]"
                  />
                  <p className="text-black text-[14px] md:text-[40px] semi-bold-text text-center mx-auto md:max-w-full">
                    All swaps are powered by smart contracts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center md:px-0 px-[20px]">
            <div className="flex justify-center">
              <div className="float-left w-[40%] md:w-[35%]">
                <img
                  src="/assets/images/hamsterbox/swap/3.png"
                  alt="hamster"
                  className="w-full h-auto"
                />
              </div>
              <div className="float-left md:w-[50%] flex items-center">
                <div className="max-w-[200px] md:max-w-full text-center">
                  <Badge
                    overlayBadge={false}
                    message="cross-chain"
                    className="mx-auto mt-[10px] md:text-[30px]"
                  />
                  <p className="text-black text-[14px] md:text-[40px] semi-bold-text text-center mx-auto md:max-w-full">
                    SUPPORT SWAPS BETWEEN MULTIPLE CHAINS SEAMLESSLY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center md:px-0 px-[20px]">
            <div className="flex justify-center">
              <div className="float-left w-[40%] md:w-[35%]">
                <img
                  src="/assets/images/hamsterbox/swap/3.png"
                  alt="hamster"
                  className="w-full h-auto"
                />
              </div>
              <div className="float-left md:w-[50%] flex items-center">
                <div className="max-w-[200px] md:max-w-full text-center">
                  <Badge
                    overlayBadge={false}
                    message="cross-chain"
                    className="mx-auto mt-[10px] md:text-[30px]"
                  />
                  <p className="text-black text-[14px] md:text-[40px] semi-bold-text text-center mx-auto md:max-w-full">
                    SUPPORT SWAPS BETWEEN MULTIPLE CHAINS SEAMLESSLY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperConntroller curIndex={slideIndex} />
      </Swiper>
    </div>
  );
};
