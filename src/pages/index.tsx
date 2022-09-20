import type { NextPage } from "next";
import MainLayout from "@/src/layouts/main";
import { Fade } from "react-awesome-reveal";

const objectiveItems = [
  "One-stop portal to the metaverse for both the ~3.5b Web2 and ~1.5m Web3 gamers",
  "Seamless integration and scalable gaming experience for games",
  "Hassle-free gaming assets management and trading, powered and secured by blockchain magic",
];

const forGameItems = [
  "Secure authentication, which also opens the door to all users on Hamsterbox",
  "Assets creation, trading and management (on-chain or in-game)",
  "Powerful Logical Functions, including those that utilize game assets under Hamsterbox's management",
];

const forGameItems2 = [
  "Choose between our safe and friendly Web2 or Web3 authentication flow",
  "Deposit game assets into our custodial service for an undisturbed gaming experience",
  "Access to all Hamsterbox-integrated games using a single account",
];

const Home: NextPage = () => {
  const handleContactUs = () => {
    window.open(
      "mailto:contact@cavies.xyz?subject=Hello Cavies Labs",
      "_blank"
    );
  };

  return (
    <MainLayout>
      <div className=" px-[20px] md:px-[60px] mx-auto w-full lg:max-w-[1550px] pt-[50px] md:pt-[180px]">
        <div className="top-inf md:inline-flex grid" id="about-us">
          <div className="md:float-left relative md:pl-[80px] md:pt-0 pt-[30px] order-0 md:order-1">
            <div className="circle-purple absolute w-[59px] h-[59px] top-[-30px] md:top-[-170px] left-[260px]" />
            <div className="circle-purple absolute w-[31px] h-[31px] bottom-[100px] left-[-30px]" />
            <div className="circle-green absolute top-[30px] left-[0px] w-[21px] h-[21px]" />
            <div className="circle-green absolute top-[40px] right-[-10px] w-[43px] h-[43px]" />
            <div className="circle-green absolute w-[59px] h-[59px] bottom-[-50px] left-[260px]" />
            <div className="circle-purple absolute bottom-[40px] right-[-50px] w-[27px] h-[27px]" />
            <img
              src="/assets/images/hamster-top-c.png"
              className="w-[442px] h-auto md:mt-[-100px]"
            />
            <img
              src="/assets/images/circle-astronaunt-hamster.png"
              className="top-circle-astronaunt-hamster spin-el"
            />
          </div>
          <div className="md:float-right md:order-0 relative pt-[100px] md:pt-0">
            <div className="circle-purple absolute w-[59px] h-[59px] top-[-70px]" />
            <div className="circle-green absolute top-[-30px] left-[100px] w-[21px] h-[21px]" />
            <div>
              <Fade duration={600} direction="up">
                <h1 className="text-[26px] md:text-[48px] uppercase font-bold text-strongTitle dark:text-strongTitleDark leading-[32px] md:leading-[68px]">
                  Unorthodox{" "}
                  <span className="text-green dark:text-greenDark">Web3</span>{" "}
                  <br /> Gaming Infrastructure
                </h1>
              </Fade>
              <Fade duration={600} direction="up">
                <p className="text-contentColor dark:text-contentColorDark text-[14px] md:text-[20px] md:text-normal mt-[20px] max-w-[530px]">
                  Building towards mass adoption of blockchain-enabled games -
                  the friendly way
                </p>
              </Fade>
              <button
                className="anim-button mt-[30px] md:mt-[60px]"
                onClick={handleContactUs}
              >
                <div className="hidden-layer bg-purple dark:bg-purpleDark"></div>
                <div className="shown-layer bg-green dark:bg-greenDark">
                  <p className="text-[14px] md:text-[20px] text-white dark:text-strongTitle medium-text">
                    Contact us
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          className="objectives mt-[250px] md:mt-[150px] md:inline-flex"
          id="objectives"
        >
          <div className="md:float-left relative">
            <img
              src="/assets/images/older-hamster.png"
              className="w-[279px] h-[auto] md:w-[auto] md:h-[auto] lg:w-[550px] lg:h-[auto] hidden md:block dark:hidden"
            />
            <div className="md:block hidden">
              <img
                src="/assets/images/older-hamster-dark.png"
                className="w-[279px] h-[auto] md:w-[auto] md:h-[auto] lg:w-[550px] lg:h-[auto] hidden dark:block"
              />
            </div>
          </div>
          <div className="md:float-right relative md:pl-[200px]">
            <div className="relative">
              <h2 className="text-[48px] md:text-[70px] rotate-[-5deg]">OUR</h2>
              <div className="inline-flex bg-green dark:bg-greenDark rotate-[-5deg] mt-[-18px] px-[20px] uppercase">
                <h2 className="text-[28px] md:text-[48px] text-white dark:text-strongTitle">
                  Objectives
                </h2>
              </div>
              <img
                src="/assets/images/older-hamster-mobile.png"
                className="w-[279px] h-[auto] block md:hidden absolute right-[-20px] top-[-210px] dark:hidden"
              />
              <div className="block md:hidden">
                <img
                  src="/assets/images/older-hamster-mobile-dark.png"
                  className="w-[279px] h-[auto] absolute right-[-20px] top-[-210px] hidden dark:block"
                />
              </div>
            </div>
            <div className="mt-[50px]">
              <ul>
                {objectiveItems.map((item, index) => (
                  <Fade
                    duration={600}
                    direction="up"
                    key={`objective-item-${index}`}
                  >
                    <li className="flex pb-[20px] max-w-[500px]">
                      <img
                        src="/assets/images/dot-item.png"
                        className="float-left w-[25px] h-[25px] md:w-[31px] md:h-[31px] dark:hidden"
                      />
                      <img
                        src="/assets/images/dot-item-dark.png"
                        className="float-left w-[25px] h-[25px] md:w-[31px] md:h-[31px] hidden dark:block"
                      />
                      <div className="float-right pl-[20px]">
                        <p className="text-strongTitle dark:text-strongTitleDark text-[16px] regular-text">
                          {item}
                        </p>
                      </div>
                    </li>
                  </Fade>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="hamsterbox mt-[200px]" id="hamsterbox">
          <Fade duration={600} direction="up">
            <div className="t-c justify-center items-center flex">
              <img
                src="/assets/images/hamster-head.png"
                className="w-[45px] h-[37px] md:w-[69px] md:h-[57px] ml-[-20px] mr-[20px]"
              />
              <h2 className="text-center text-[32px] md:text-[60px] text-purple dark:text-purpleDark uppercase">
                Hamsterbox
              </h2>
              <div className="rounded-[50%] w-[15px] h-[15px] md:w-[25px] md:h-[25px] bg-green dark:bg-greenDark ml-[15px] md:ml-[20px]" />
            </div>
          </Fade>
          <Fade duration={600} direction="up">
            <p className="mx-auto max-w-[600px] text-center text-contentColor dark:text-white text-[14px] md:text-[16px] mt-[20px] medium-text">
              A powerful toolbox for game studios and gamers to easily get
              started on their web3 gaming journey.
            </p>
          </Fade>
          <div className="md:items-center grid lg:flex md:justify-center mt-[30px] items-center">
            <div className="float-left flex">
              <Fade duration={600} direction="up">
                <div className="float-left md:pr-[50px]">
                  <p className="text-purple dark:text-purpleDark text-[100px] md:text-[200px] leading-[1] bold-text">
                    01.
                  </p>
                  <h3 className="md:max-w-[250px] max-w-[200px] text-[16px] text-strongTitle dark:text-strongTitleDark regular-text">
                    Effortless plug-and-play solution for users and game studios
                    where Hamsterbox is integrated
                  </h3>
                </div>
              </Fade>
              <Fade duration={600} direction="up">
                <div className="float-left">
                  <img
                    src="/assets/images/electric-hamster.png"
                    className="w-[133px] h-[133px] md:w-[271px] md:h-[271px] xl:ml-[60px]"
                  />
                </div>
              </Fade>
            </div>
            <div className="float-left flex">
              <Fade duration={600} direction="up">
                <div className="float-left relative w-[133px] h-[133px] md:w-[271px] md:h-[271px]">
                  <img
                    src="/assets/images/c-box.png"
                    className="w-[133px] h-[133px] md:w-[271px] md:h-[271px] md:absolute md:bottom-[-82px] lg:ml-[-60px]"
                  />
                </div>
              </Fade>
              <Fade duration={600} direction="up">
                <div className="float-left md:pl-[50px]">
                  <p className="text-green dark:text-greenDark text-[100px] md:text-[200px] leading-[1] bold-text">
                    02.
                  </p>
                  <h3 className="md:max-w-[250px] max-w-[200px] text-[16px] text-strongTitle dark:text-strongTitleDark regular-text">
                    Secure asset management, trading and profiling for all
                    Hamsterbox-ready games at one place
                  </h3>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div
          className="for-games mt-[100px] md:inline-flex md:items-center"
          id="#forgames"
        >
          <div className="md:float-left relative">
            <div className="block md:hidden absolute right-[-5px] xs:right-0 bottom-[50px]">
              <h2 className="text-[48px] md:text-[70px] rotate-[-5deg] text-strongTitle dark:text-strongTitleDark">
                FOR
              </h2>
              <div className="inline-flex bg-green dark:bg-greenDark rotate-[-5deg] mt-[-12px] px-[20px] uppercase px-[40px]">
                <h2 className="text-[28px] md:text-[48px] text-white dark:text-strongTitle">
                  GAMES
                </h2>
              </div>
            </div>
            <img
              src="/assets/images/hamster-computer-email.png"
              className="w-[215px] h-[auto] lg:w-[625px] lg:h-[auto] relative dark:hidden"
            />
            <img
              src="/assets/images/hamster-computer-email-dark.png"
              className="w-[215px] h-[auto] lg:w-[625px] lg:h-[auto] relative hidden dark:block"
            />
          </div>
          <div className="md:float-right relative md:pl-[200px]">
            <div className="hidden md:block">
              <h3 className="text-[48px] md:text-[70px] rotate-[-5deg] text-strongTitle dark:text-strongTitleDark">
                FOR
              </h3>
              <div className="inline-flex bg-green dark:bg-greenDark rotate-[-5deg] mt-[-12px] px-[20px] uppercase px-[40px]">
                <h3 className="text-[28px] md:text-[48px] text-white dark:text-strongTitle">
                  GAMES
                </h3>
              </div>
            </div>
            <div className="mt-[50px]">
              <h3 className="text-[20px] text-strongTitle dark:text-strongTitleDark">
                Integrate our pioneering Hamsterbox SDK for:
              </h3>
              <ul className="mt-[30px]">
                {forGameItems.map((item, index) => (
                  <Fade
                    duration={600}
                    direction="up"
                    key={`for-games-item-${index}`}
                  >
                    <li className="flex pb-[20px] max-w-[500px]">
                      <img
                        src="/assets/images/dot-item.png"
                        className="float-left w-[25px] h-[25px] md:w-[31px] md:h-[31px] dark:hidden"
                      />
                      <img
                        src="/assets/images/dot-item-dark.png"
                        className="float-left w-[25px] h-[25px] md:w-[31px] md:h-[31px] hidden dark:block"
                      />
                      <div className="float-right pl-[20px]">
                        <p className="text-strongTitle dark:text-strongTitleDark text-[16px] regular-text">
                          {item}
                        </p>
                      </div>
                    </li>
                  </Fade>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          className="for-games-2 mt-[250px] md:mt-[150px] md:inline-flex relative"
          id="#forgamers"
        >
          <div className="md:float-right relative">
            <h3 className="text-[48px] md:text-[70px] rotate-[-5deg] text-strongTitle dark:text-strongTitleDark">
              FOR
            </h3>
            <div className="inline-flex bg-purple dark:bg-purpleDark rotate-[-5deg] mt-[-12px] px-[20px] uppercase px-[40px]">
              <h3 className="text-[28px] md:text-[48px] text-white dark:text-strongTitle">
                GAMERS
              </h3>
            </div>
            <div className="mt-[50px]">
              <h3 className="text-[20px] md:text-[20px] text-strongTitle dark:text-strongTitleDark">
                Enter Web3 gaming via Hamsterbox portal (app):
              </h3>
              <ul className="mt-[30px]">
                {forGameItems2.map((item, index) => (
                  <Fade
                    duration={600}
                    direction="up"
                    key={`for-gamers-item-2-${index}`}
                  >
                    <li className="flex pb-[20px] max-w-[500px]">
                      <img
                        src="/assets/images/dot-item.png"
                        className="float-left w-[25px] h-[25px] md:w-[31px] md:h-[31px] dark:hidden"
                      />
                      <img
                        src="/assets/images/dot-item-dark.png"
                        className="float-left w-[25px] h-[25px] md:w-[31px] md:h-[31px] hidden dark:block"
                      />
                      <div className="float-right pl-[20px]">
                        <p className="text-strongTitle dark:text-strongTitleDark text-[16px] md:text-[16px] regular-text">
                          {item}
                        </p>
                      </div>
                    </li>
                  </Fade>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:float-left relative md:pl-[300px]">
            <h3 className="text-[90px] lg:text-[232px] text-hamserTextMobile md:text-hamserText dark:md:text-purpleDark absolute leading-[1] rotate-[-5deg] uppercase top-[-720px] md:top-0 left-[-30px] md:left-[180px]">
              ham <br /> ser
            </h3>
            <img
              src="/assets/images/purple-tt.svg"
              className="w-[auto] h-[auto] lg:w-[775px] lg:h-[auto] absolute right-[-350px] lg:right-[-550px] hidden md:block dark:hidden"
            />
            <div className="hidden md:block">
              <img
                src="/assets/images/purple-tt-dark.svg"
                className="w-[auto] h-[auto] lg:w-[775px] lg:h-[auto] absolute right-[-350px] lg:right-[-550px] hidden dark:block"
              />
            </div>
            <img
              src="/assets/images/hamster-play-game.png"
              className="w-[auto] h-[auto] lg:w-[653px] lg:h-[auto] relative hidden md:block"
            />
          </div>
          <img
            src="/assets/images/hamster-play-game-mobile.png"
            className="block md:hidden w-[210px] h-[auto] absolute right-[-30px] top-[-100px] dark:hidden"
          />
          <div className="block md:hidden">
            <img
              src="/assets/images/hamster-play-game-mobile-dark.png"
              className="hidden dark:block w-[210px] h-[auto] absolute right-[-30px] top-[-100px]"
            />
          </div>
        </div>
      </div>
      <div className="contact-s relative mt-[200px] md:min-h-[630px] pt-[30px] md:pt-[80px]">
        <img
          src="/assets/images/purple-b.png"
          className="absolute w-full right-0 left-0 top-0 h-[630px] hidden md:block dark:hidden"
        />
        <div className="relative mx-[20px] lg:mx-[130px]">
          <h1 className="uppercase text-[40px] lg:text-[50px] xl:text-[69px] leading-[1] text-strongTitle dark:text-strongTitleDark">
            Transform the future of <br />{" "}
            <span className="md:text-[90px] text-green dark:text-greenDark">
              WEB3
            </span>{" "}
          </h1>
          <div className="game-with-wrapper block lg:hidden">
            <h3 className="text-[40px] leading-[1] uppercase text-green dark:text-greenDark">
              Gaming with
            </h3>
            <h3 className="text-purple dark:text-purpleDark text-[71px] leading-[1] uppercase">
              Hamster
              <br /> box
            </h3>
          </div>
          <div className="flex">
            <div className="relative ml-[100px] float-left md:absolute md:right-0 md:top-[100px] lg:relative">
              <img
                src="/assets/images/astronaunt-hamster.png"
                className="w-[314px] md:w-[490px] lg:w-[530px] h-[auto] relative right-[-30px] lg:right-[-100px] top-[-80px] lg:top-[-100px] mvup"
              />
              <div
                className="contact-right-wrapper absolute top-[50px] md:top-[200px] left-[-50px] md:left-[20px]"
                onClick={handleContactUs}
              >
                <button
                  className="contact-bottom-container"
                  onClick={handleContactUs}
                >
                  <div className="hidden-layer"></div>
                  <div className="shown-layer">
                    <p className="uppercase bold-text">
                      Contact{" "}
                      <span className="hidden md:block float-right ml-[10px]">
                        Us
                      </span>
                    </p>
                  </div>
                </button>
                <div className="utils-wrapper">
                  <div className="mouse-container absolute left-[20px] md:top-[50px]">
                    <div className="relative">
                      <img
                        src="/assets/images/mouse-ar-purple.png"
                        className="purple w-[91px] h-[91px] md:w-[150px] md:h-[150px]"
                      />
                      <img
                        src="/assets/images/mouse-ar-green.png"
                        className="green w-[91px] h-[91px] md:w-[150px] md:h-[150px] absolute top-0 hidden"
                      />
                    </div>
                  </div>
                  <div className="rau-container absolute top-[-20px] left-[-80px]">
                    <div className="relative">
                      <img
                        src="/assets/images/rau-purple.svg"
                        className="purple w-[115px] h-[59px]"
                      />
                      <img
                        src="/assets/images/rau-green.svg"
                        className="green w-[115px] h-[59px] absolute top-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="game-with-wrapper hidden lg:block">
              <h3 className="text-[40px] lg:text-[58px] leading-[1] uppercase text-green dark:text-greenDark">
                Gaming with
              </h3>
              <h3 className="text-purple dark:text-purpleDark text-[70px] lg:text-[90px] xl:text-[130px] leading-[1] uppercase">
                Hamster
                <br /> box
              </h3>
            </div>
            <img
              src="/assets/images/circle-astronaunt-hamster.png"
              className="absolute right-[30px] top-[30px] md:right-[20px] md:top-[120px] w-[58px] h-[58px] md:w-[70.7px] md:h-[70.7px] spin-el"
            />
            <img
              src="/assets/images/circle-astronaunt-hamster.png"
              className="absolute left-[30px] top-[-45px] w-[58px] h-[58px] block md:hidden spin-el"
            />
            <img
              src="/assets/images/circle-astronaunt-hamster.png"
              className="absolute right-0 bottom-[160px] md:right-[150px] md:bottom-[-40px] lg:bottom-[120px] w-[40px] md:w-[70px] md:h-[70px] spin-el"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
