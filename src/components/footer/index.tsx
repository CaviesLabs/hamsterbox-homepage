import { FC, useMemo } from "react";

interface FooterItem {
  name: string;
  uri: string;
}

interface SocialItem {
  image: string;
  uri: string;
}

const Footer: FC = () => {
  const footers = useMemo<FooterItem[]>(
    () => [
      { name: "About Us", uri: "About Us" },
      {
        name: "Blog",
        uri: "https://www.notion.so/cavies/b4ff0745a92144aaaccf5b052d92b540?v=7891d7724e1349a5943c8a101174af5c",
      },
      {
        name: "Careers",
        uri: "https://cavies.notion.site/Job-Board-320ac7987dc64a53b0d3d3e7c52c5ce7",
      },
    ],
    []
  );

  const bottomFooters = useMemo<FooterItem[]>(
    () => [
      { name: "© 2022 Cavies, Ltd.", uri: "" },
      { name: "Privacy Policy", uri: "" },
      { name: "Terms of Use", uri: "" },
      {
        name: "Media Kit",
        uri: "https://cavies.notion.site/59aa5e24fdb146359cdd3cb9336aef45?v=83eedde046594e689d7fabf8932a7284",
      },
    ],
    []
  );

  const socialItems = useMemo<SocialItem[]>(
    () => [{ image: "/assets/images/telegram.svg", uri: "telegram.svg" }],
    []
  );

  return (
    <div className="footer">
      <div className="flex md:px-[80px] px-[40px]  items-center">
        <div className="float-left logo-wrapper w-[40%] md:w-[60%] lg:w-[70%]">
          <img
            src="/assets/images/logo.png"
            className="w-[75px] md:w-[149px]"
          />
        </div>
        <div className="float-right menu-wrapper py-[20px]">
          <ul className="footer-menu">
            {footers.map((item, index) => (
              <li
                key={`footer-item-${index}`}
                className="float-left ml-[20px] md:ml-[30px] cursor-pointer"
                onClick={() => window.open(item.uri)}
              >
                <p className="text-[10px] md:text-[16px]">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full divide-y-2 divide-dividerColor">
        <div></div>
        <div></div>
      </div>
      <div className="flow-root md:px-[80px] px-[40px] py-[10px]">
        <div className="bottom-menu-wrapper float-left">
          <ul className="bottom-footer-menu">
            {bottomFooters.map((item, index) => (
              <li
                key={`bottom-footer-item-${index}`}
                className="md:float-left"
                onClick={() => window.open(item.uri)}
              >
                <p className="text-grey text-[10px] md:text-[14px] mr-[20px] cursor-pointer">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
