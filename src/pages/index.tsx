import type { NextPage } from "next";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";
import MainLayout from "@/src/layouts/main";
import { CenterContainer } from "@/src/components/center-container";
import { HomeStyled } from "@/styles/home.styled";
import { SwapContainer } from "@/src/components/swap-container";
import { VideoIntro } from "@/src/components/video-intro";
import { MoneyContainer } from "@/src/components/money-container";
import { HamsterToolContainer } from "@/src/components/hamster-tools";

const Home: NextPage = () => {
  const handleContactUs = () => {
    window.open(
      "mailto:contact@cavies.xyz?subject=Hello Cavies Labs",
      "_blank"
    );
  };

  return (
    <MainLayout>
      <Head>
        <title>Hamsterbox | Building towards the future of Web3 Gaming</title>
        <meta
          name="title"
          content="Hamsterbox | Building towards the future of Web3 Gaming"
        />
        <meta
          name="description"
          content="We build and contribute to the Web3 gaming landscape using unorthodox and friendly solutions"
        />
        <meta
          property="og:title"
          content="Hamsterbox | Building towards the future of Web3 Gaming"
        />
        <meta
          property="og:description"
          content="We build and contribute to the Web3 gaming landscape using unorthodox and friendly solutions"
        />
        <meta
          name="twitter:description"
          content="We build and contribute to the Web3 gaming landscape using unorthodox and friendly solutions"
        />
        <meta
          name="twitter:title"
          content="Hamsterbox | Building towards the future of Web3 Gaming"
        />
      </Head>
      <HomeStyled>
        <div>
          <CenterContainer>
            <div className="w-full h-auto md:mx-auto text-center relative md:hidden">
              <img
                src="/assets/images/hamster-opendoor.png"
                className="w-[100%] h-auto md:mt-[-70px] md:mx-auto dark:hidden"
              ></img>
              <img
                src="/assets/images/hamster-opendoor-dark.png"
                className="w-[100%] h-auto md:mt-[-70px] md:mx-auto hidden dark:block"
              ></img>
            </div>
            <div className="flex items-center">
              <p className="text-[70px] md:text-[150px] bold-text float-left text-strongTitle dark:text-strongTitleDark">
                hamsterbox
              </p>
              <div className="circle-green w-[59px] h-[59px] relative top-[10px] left-[10px] float-left" />
            </div>
            <p className="text-strongTitle dark:text-strongTitleDark text-[36px] relative top-[-20px] md:max-w-[80%] bold-text">
              Your ultimate destination for onboarding and discovering Web3
            </p>
            <div className="relative top-inf md:flow-root" id="about-us">
              <div className="md:float-right relative md:w-[40%] md:pl-[20px] md:pt-0 pt-[50px] order-0 md:order-1 hidden md:block">
                <div className="md:w-[140%] w-full h-auto md:mt-[-40px] md:mx-auto text-center relative md:left-[-220px]">
                  <img
                    src="/assets/images/hamster-opendoor.png"
                    className="w-[100%] h-auto md:mt-[-70px] md:mx-auto dark:hidden"
                  ></img>
                  <img
                    src="/assets/images/hamster-opendoor-dark.png"
                    className="w-[100%] h-auto md:mt-[-70px] md:mx-auto hidden dark:block"
                  ></img>
                </div>
              </div>
              <div className="md:float-left md:order-0 relative md:pt-[100px] md:pt-0 md:w-[60%]">
                <div className="circle-purple absolute w-[47px] h-[47px] left-[-20px]" />
                <div>
                  <Fade duration={600} direction="up">
                    <p className="text-strongTitle dark:text-strongTitleDark text-[14px] md:text-[16px] regular-text max-w-[530px] md:max-w-[403px]">
                      A platform to explore, trade, manage and game with your
                      digital assets. Secure. Frictionless. Friendly.
                    </p>
                  </Fade>
                  <button
                    className="w-[350px] rounded-[8px] border-solid border-[2px] border-strongTitle dark:border-white relative py-[10px] mt-[20px]"
                    style={{ zIndex: 2 }}
                    onClick={handleContactUs}
                  >
                    <p className="text-center text-[20px] semi-bold-text text-strongTitle dark:text-strongTitleDark">
                      CONTACT US
                    </p>
                  </button>
                </div>
              </div>
              <img
                src="/assets/images/scroll-arrow-down-s.svg"
                className="scroll-down-btn mvup hidden md:block"
              />
            </div>
          </CenterContainer>
          <SwapContainer />
          <VideoIntro />
          <MoneyContainer />
          <HamsterToolContainer />
        </div>
        <div className="bg-[#282828] dark:bg-strongTitle pb-[100px] overflow-hidden relative">
          <div className="dark:bg-[#D9D9D9] md:pt-[100px]">
            <CenterContainer className=" pt-[20px] md:pt-[35px]">
              <p className="bold-text text-[50px] md:text-[90px] xl:text-[150px] text-white dark:text-strongTitle md:leading-[80px] xl:leading-[140px] uppercase">
                <span className="hidden md:block">
                  INFINITE <br /> POSSIBILITIES
                </span>
                <span className="md:hidden">
                  INFINITE
                  <br />
                  POSSIBILITIES
                </span>
              </p>
            </CenterContainer>
          </div>
          <div>
            <CenterContainer className="relative pt-[20px] md:pt-[35px]">
              <p className="bold-text text-[16px] md:text-[24px] text-strongTitleDark">
                EXPLORE WEB3 AND THE METAVERSE TODAY WITH HAMSTERBOX!
              </p>
              <div className="w-[200px] md:w-[400px] mt-[30px] md:mt-[180px] relative">
                <div
                  className="circle-green w-[150px] h-[150px] md:w-[80px] md:h-[80px] xl:w-[105px] xl:h-[105px] absolute xl:top-[-20px] xl:right-[-40px] md:top-[-20px] md:right-[-30px] right-[-100px] top-[0px]"
                  style={{ zIndex: 1 }}
                />
                <button
                  className="w-[200px] md:w-[400px] rounded-[8px] border-solid border-[2px] border-white relative"
                  style={{ zIndex: 2 }}
                  onClick={handleContactUs}
                >
                  <p className="text-center text-[20px] md:text-[24px] bold-text text-white">
                    CONTACT US
                  </p>
                </button>
              </div>
              <img
                src="/assets/images/hamster-bottom.png"
                alt="Hamster Bottom"
                className="md:w-[300px] lg:w-[380px] xl:w-[444px] h-auto absolute md:top-[10px] md:right-[100px] xl:top-[-100px] xl:right-[120px] md:block hidden"
              />
            </CenterContainer>
          </div>
          <img
            src="/assets/images/hamster-bottom.png"
            alt="Hamster Bottom"
            className="w-[600px] h-auto absolute right-[-220px] top-0 md:hidden block"
            style={{ zIndex: 2 }}
          />
        </div>
      </HomeStyled>
    </MainLayout>
  );
};

export default Home;
