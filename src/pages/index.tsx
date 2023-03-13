import type { NextPage } from "next";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";
import MainLayout from "@/src/layouts/main";
import { CenterContainer } from "@/src/components/center-container";
import { HomeStyled } from "@/styles/home.styled";
import { SwapContainer } from "@/src/components/swap-container";
import { VideoIntro } from "@/src/components/video-intro";
import { MoneyContainer } from "@/src/components/money-container";

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
          {/* 
            <div className="trapezoidContainer">
              <div className="header-container">
                <div className="trapezoid border-t-[300px] border-t-solid border-t-green dark:border-t-greenDark">
                  <p className="relative top-[-280px] text-[83px] bold-text float-right text-white dark:text-strongTitle max-w-[600px] leading-[100px] text-left">
                    Hamsterbox vav powered Games
                  </p>
                </div>
                <div className="trapezoid-right border-b-[300px] border-b-solid border-b-purple dark:border-b-purpleDark">
                  <p className="relative bottom-[-18px] text-[83px] bold-text text-strongTitle dark:text-strongTitleDark max-w-[600px] leading-[100px] text-left">
                    Typical
                  </p>
                  <p className="relative left-[-20px] bottom-[-28px] text-[83px] bold-text text-strongTitle dark:text-strongTitleDark max-w-[600px] leading-[80px] text-left">
                    Web3
                  </p>
                  <p className="relative left-[-40px] bottom-[-28px] text-[83px] bold-text text-strongTitle dark:text-strongTitleDark max-w-[600px] leading-[80px] text-left">
                    Games
                  </p>
                </div>
              </div>
              <div className="body-container py-[50px] bg-green dark:bg-greenDark">
                <img
                  src="/assets/images/game-flows.png"
                  alt="Image flow image"
                  className="w-[50%] h-auto mx-auto"
                />
              </div>
            </div>
           */}
          {/* <CenterContainer>
            <div
              className="objectives mt-[350px] md:mt-[150px] md:inline-flex"
              id="objectives"
            >
              <div className="md:float-left md:w-[50%] relative bottom-[-134px]">
                <img
                  src="/assets/images/hamster-phone.png"
                  alt="Hamster phone"
                  className="w-[80%] h-auto dark:hidden"
                />
                <img
                  src="/assets/images/hamster-phone-dark.png"
                  alt="Hamster phone"
                  className="w-[80%] h-auto hidden dark:block"
                />
              </div>
              <div className="md:float-left md:w-[50%]">
                <p className="bold-text text-strongTitle dark:text-strongTitleDark text-[90px] uppercase">
                  Buy, Sell and Explore NFTs
                </p>
                <div className="flex">
                  <div className="float-left">
                    <img
                      src="/assets/images/hamster-rotate-dot.png"
                      alt="Hamster rotate"
                      className="w-[300px] h-auto dark:hidden"
                    />
                    <img
                      src="/assets/images/hamster-rotate-dot-dark.png"
                      alt="Hamster rotate"
                      className="w-[300px] h-auto hidden dark:block"
                    />
                    <p className="semi-bold-text w-[250px] text-center relative top-[-20px] text-strongTitle dark:text-strongTitleDark mx-auto">
                      all in one market and agregator for gaming nfts
                    </p>
                  </div>
                  <div className="float-left pl-[80px]">
                    <p className="semi-bold-text w-[250px] text-center relative mt-[90px] text-strongTitle dark:text-strongTitleDark mx-auto">
                      all in one market and agregator for gaming nfts
                    </p>
                    <img
                      src="/assets/images/hamster-rotate-dot.png"
                      alt="Hamster rotate"
                      className="w-[300px] h-auto dark:hidden"
                    />
                    <img
                      src="/assets/images/hamster-rotate-dot-dark.png"
                      alt="Hamster rotate"
                      className="w-[300px] h-auto hidden dark:block"
                    />
                  </div>
                  <div className="float-left relative right-[-35%]">
                    <img
                      src="/assets/images/hamster-rotate-dot.png"
                      alt="Hamster rotate"
                      className="w-[300px] h-auto dark:hidden"
                    />
                    <img
                      src="/assets/images/hamster-rotate-dot-dark.png"
                      alt="Hamster rotate"
                      className="w-[300px] h-auto hidden dark:block"
                    />
                    <p className="semi-bold-text w-[250px] text-center relative top-[-20px] text-strongTitle dark:text-strongTitleDark mx-auto">
                      all in one market and agregator for gaming nfts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CenterContainer> */}
          <MoneyContainer />
          {/* <div className="bg-purple border-t-white border-t-solid border-b-white border-b-solid dark:border-t-[10px] dark:border-b-[10px]">
            <CenterContainer>
              <div
                className="objectives mt-[350px] md:mt-[150px] md:inline-flex"
                id="objectives"
              >
                <div className="md:float-left md:w-[50%]">
                  <p className="bold-text text-strongTitleDark text-[90px] uppercase">
                    make instant in app purchases
                  </p>
                  <div className="flex">
                    <div className="float-left relative left-[-50%] top-[50px]">
                      <p className="semi-bold-text w-[250px] text-center relative text-strongTitleDark mx-auto">
                        all in one market and agregator for gaming nfts
                      </p>
                      <img
                        src="/assets/images/hamster-rotate-dot.png"
                        alt="Hamster rotate"
                        className="w-[300px] h-auto"
                      />
                    </div>
                    <div className="float-left relative left-[-35%]">
                      <img
                        src="/assets/images/hamster-rotate-dot.png"
                        alt="Hamster rotate"
                        className="w-[300px] h-auto"
                      />
                      <p className="semi-bold-text w-[250px] text-center relative top-[-20px] text-strongTitleDark mx-auto">
                        all in one market and agregator for gaming nfts
                      </p>
                    </div>
                    <div className="float-left relative left-[-15%]">
                      <p className="semi-bold-text w-[250px] text-center relative mt-[90px] text-strongTitleDark mx-auto">
                        all in one market and agregator for gaming nfts
                      </p>
                      <img
                        src="/assets/images/hamster-rotate-dot.png"
                        alt="Hamster rotate"
                        className="w-[300px] h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:float-left md:w-[50%] flow-root">
                  <img
                    src="/assets/images/hamster-phone-water.png"
                    alt="Hamster phone"
                    className="w-[80%] h-auto float-right"
                  />
                </div>
              </div>
            </CenterContainer>
          </div>
          <CenterContainer>
            <div
              className="objectives mt-[350px] md:mt-[150px] md:inline-flex"
              id="objectives"
            >
              <div className="md:float-left md:w-[50%]">
                <img
                  src="/assets/images/hamster-phone-sleep.png"
                  alt="Hamster phone"
                  className="w-[80%] h-auto dark:hidden"
                />
                <img
                  src="/assets/images/hamster-phone-sleep-dark.png"
                  alt="Hamster phone"
                  className="w-[80%] h-auto hidden dark:block"
                />
              </div>
              <div className="md:float-left md:w-[50%]">
                <p className="bold-text text-strongTitle dark:text-strongTitleDark text-[90px] uppercase">
                  intuitive and easy to intergrate sdk
                </p>
                <p className="text-[16px] md:text-[24px] text-strongTitle dark:text-strongTitleDark bold-text">
                  ACCESS AND WHITE-LABEL SOLUTIONS!
                </p>
              </div>
            </div>
          </CenterContainer> */}
        </div>
        <div className="bg-[#282828] dark:bg-strongTitle pb-[100px]">
          <div className="dark:bg-[#D9D9D9] pt-[100px]">
            <CenterContainer>
              <p className="bold-text text-[150px] text-white dark:text-strongTitle leading-[140px] uppercase">
                Explore the metaverse
              </p>
            </CenterContainer>
          </div>
          <div>
            <CenterContainer className="relative">
              <p className="bold-text text-[16px] md:text-[24px] text-strongTitleDark leading-[0]">
                EXPLORE THE METAVERSE AND WEB3 POSSIBILITIES TODAY HAMSTERBOX!
              </p>
              <div className="w-[500px] mt-[180px] relative">
                <div
                  className="circle-green w-[153px] h-[153px] absolute top-[-30px] right-[-80px]"
                  style={{ zIndex: 1 }}
                />
                <button
                  className="w-[500px] rounded-[8px] border-solid border-[2px] border-white relative"
                  style={{ zIndex: 2 }}
                  onClick={handleContactUs}
                >
                  <p className="text-center text-[20px] md:text-[36px] bold-text text-white">
                    CONTACT US
                  </p>
                </button>
              </div>
              <img
                src="/assets/images/hamster-bottom.png"
                alt="Hamster Bottom"
                className="w-[444px] h-auto absolute top-[-100px] right-[120px]"
              />
            </CenterContainer>
          </div>
        </div>
      </HomeStyled>
    </MainLayout>
  );
};

export default Home;
