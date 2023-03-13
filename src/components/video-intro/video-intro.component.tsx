import { FC, useState } from "react";

export const VideoIntro: FC = () => {
  const [played, setPlayed] = useState(false);

  return (
    <div className="mt-[50px]">
      <div
        className="border-solid border-t-[3px] border-black bg-purple300 overflow-x-hidden"
        style={{ display: "-webkit-box" }}
      >
        <p className="md:text-[95px] text-[40px] text-black bold-text uppercase mx-[20px] md:mx-[80px]">
          how to
        </p>
        <p className="md:text-[95px] text-[40px] bold-text uppercase mx-[20px] md:mx-[80px] tst">
          how to
        </p>
        <p className="md:text-[95px] text-[40px] text-black bold-text uppercase mx-[20px] md:mx-[80px]">
          how to
        </p>
      </div>
      <div className="trapezoidContainer">
        <div className="header-container border-y-[3px] border-solid border-black">
          <div className="trapezoid border-t-[90px] md:border-t-[300px] border-t-solid border-t-green dark:border-t-greenDark">
            <p className="relative top-[-80px] md:top-[-280px] text-[24px] md:text-[83px] bold-text float-right text-white dark:text-strongTitle max-w-[600px] text-left text-right">
              CREATE A <br /> PROPOSAL
            </p>
          </div>
          <div className="trapezoid-right  border-b-[90px] md:border-b-[300px] border-b-solid border-b-purple300 dark:border-b-purpleDark">
            <div className="relative"></div>
            <p className="relative bottom-[-12px] text-[24px] md:text-[83px] bold-text text-strongTitle dark:text-strongTitleDark max-w-[600px] text-left">
              Execute <br /> A Swap
            </p>
          </div>
        </div>
      </div>
      <div className="md:px-[50px] px-[20px] py-[30px] bg-green border-b-[3px] border-solid border-black">
        <div className="relative rounded-[50px]">
          {/* <img
            src="/assets/images/hamsterbox/videointro.png"
            alt="EXAM"
            className="w-full h-[auto] rounded-[50px]"
          /> */}
          {!played && (
            <img
              src="/assets/images/hamsterbox/play-btn.svg"
              alt="EX"
              className="md:w-[148px] w-[50px] h-auto absolute left-[45%] top-[40%] cursor-pointer"
            />
          )}
          <video
            width="100%"
            height="100%"
            autoPlay={false}
            muted={true}
            loop={true}
            preload="auto"
            data-v-3f5c2431=""
            className="video cursor-pointer"
            id="video-intro"
            onClick={(e) => {
              const target: any = e.target;
              !played ? target.play() : target.pause();
              setPlayed(!played);
            }}
          >
            <source
              src="/assets/videos/vide.mp4"
              type="video/mp4"
              data-v-3f5c2431=""
            />
            <source
              src="/assets/videos/vide.mp4"
              type="video/ogg"
              data-v-3f5c2431=""
            />
          </video>
        </div>
      </div>
    </div>
  );
};
