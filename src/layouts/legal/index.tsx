import {
  useEffect,
  useState,
  ReactNode,
  useCallback,
  useMemo,
  FC,
} from "react";
import { useRouter } from "next/router";
import { legalMenus } from "@/src/models/entities/legal.entity";
import { Collapse } from "react-collapse";
import MainLayout from "@/src/layouts/main";
import classnames from "classnames";
import styles from "./index.module.scss";

interface Props {
  slug: string[];
}

const LegalLayout: FC<Props> = ({ slug }) => {
  const router = useRouter();
  const [layoutContent, setLayoutContent] = useState<ReactNode>();
  const [slugSelected, setSlugSelected] = useState<string>();
  const [childSlugSelected, setChildSlugSelected] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const convertToHref = (title: string | undefined) =>
    title ? title.toLowerCase().replaceAll(" ", "-") : "";

  const onChangePart = useCallback(
    (query: string) => {
      const availableSlug = legalMenus.find(
        (item) => item.slug === slugSelected
      );

      /** @descriptio Find contents located in current chapper */
      let availablePart = availableSlug?.children.find(
        (item) => item.title === query
      );
      if (!availablePart) {
        const chaper = legalMenus.find(
          (item) => item.children.filter((part) => part.title === query).length
        );

        availablePart = chaper?.children.find((item) => item.title === query);

        setSlugSelected(chaper?.slug);

        setChildSlugSelected(convertToHref(availablePart?.title));

        setMenuOpen(chaper?.slug || "");

        setLayoutContent(chaper?.content);

        /** @description Change location href */
        history.pushState(
          {},
          "",
          `/legal${chaper?.slug}/#${convertToHref(availablePart?.title)}`
        );
      } else {
        setChildSlugSelected(convertToHref(availablePart?.title));
        history.pushState(
          {},
          "",
          `/legal${slugSelected}/#${convertToHref(availablePart?.title)}`
        );
      }
      setMobileMenuOpen(false);
    },
    [slug, router.asPath, slugSelected, childSlugSelected]
  );

  useEffect(() => {
    const el = document.getElementById(childSlugSelected);
    if (!el) return;
    setTimeout(
      () =>
        // Scroll certain amounts from current position
        window.scrollBy({
          top: el.getBoundingClientRect().top, // could be negative value
          left: 0,
          behavior: "smooth",
        }),
      100
    );
  }, [childSlugSelected]);

  useEffect(() => {
    if (!slug.length) {
      return;
    }
    const availableSlug = legalMenus.find(
      (item) => item.slug === `/${slug[0]}`
    );
    if (!availableSlug) {
      return;
    }
    setSlugSelected(availableSlug.slug);
    setLayoutContent(availableSlug.content);
    setMenuOpen(availableSlug.slug);
    const partId = document.location.href.split("#")?.[1];
    if (!partId) {
      setChildSlugSelected(convertToHref(availableSlug.children[0].title));
    } else {
      setChildSlugSelected(convertToHref(partId));
      setTimeout(() => document.getElementById(partId)?.scrollIntoView(), 500);
    }
  }, [slug, router.asPath]);

  const menuComponent = useMemo(
    () => (
      <ul className="legal-menu pt-[0px] md:pt-0">
        {legalMenus.map((item, index) => (
          <li className="" key={`legal-parent-${index}`}>
            <p className="cursor-pointer text-[16px] text-strongTitle dark:text-strongTitleDark">
              <span onClick={() => setMenuOpen(item.slug)}>
                {menuOpen !== item.slug ? (
                  <i className="bx bxs-right-arrow text-navy dark:text-navyDark mr-[10px]"></i>
                ) : (
                  <i className="bx bxs-down-arrow text-purple dark:text-purpleDark mr-[10px]"></i>
                )}
              </span>
              <span
                onClick={() => setMenuOpen(item.slug)}
                className="medium-text text-strongTitle dark:text-strongTitleDark text-[16px] cursor-pointer"
              >
                {item.title}
              </span>
            </p>
            <ul className="chilren-legal-menu pl-[25px] pb-[20px]">
              <Collapse isOpened={menuOpen === item.slug}>
                {item.children.map((item, index) => (
                  <li
                    key={`children-legal-menu-item-${index}`}
                    className={classnames(
                      "text-navy dark:text-navyDark pt-[10px] text-[16px] regular-text",
                      {
                        "menu-active":
                          convertToHref(item.title) === childSlugSelected,
                      }
                    )}
                  >
                    <span
                      className="cursor-pointer"
                      onClick={() => onChangePart(item.title)}
                    >
                      {item.title}
                    </span>
                  </li>
                ))}
              </Collapse>
            </ul>
          </li>
        ))}
      </ul>
    ),
    [slug, slugSelected, childSlugSelected, menuOpen]
  );

  useEffect(() => {
    document.documentElement.setAttribute("app-bg", "none");
  }, []);

  return (
    <MainLayout>
      <div
        className={classnames(
          "px-[20px] md:px-[40px] lg:px-[130px] mx-auto w-full lg:max-w-[1550px] md:pt-[70px] md:inline-flex bg-white dark:bg-backgroundDark",
          styles["legal-content"]
        )}
      >
        <div className="side-bar md:min-w-[200px] md:fixed md:w-[200px]">
          <div className="block md:hidden fixed bg-purple dark:bg-purpleDark right-0 left-0 py-[15px] px-[20px] top-[75px]">
            <p className="text-[16px] text-white dark:text-strongTitle regular-text uppercase max-w-[80%]">
              {childSlugSelected.replaceAll("-", " ")}
            </p>
            <button
              className="absolute right-[20px] bottom-[13px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <i className="bx bxs-chevron-up text-white dark:text-strongTitle"></i>
              ) : (
                <i className="bx bxs-chevron-down text-white dark:text-strongTitle"></i>
              )}
            </button>
          </div>
          {mobileMenuOpen && (
            <Collapse isOpened={mobileMenuOpen}>
              <div
                className="block md:hidden fixed top-[128px] left-0 right-0 bottom-0 pt-[50px] bg-white dark:bg-strongTitle pl-[20px]"
                style={{ zIndex: 39 }}
              >
                {menuComponent}
              </div>
            </Collapse>
          )}
          <div className="hidden md:block">{menuComponent}</div>
        </div>
        <div className="content md:pl-[300px] pt-[100px] md:pt-0">
          {layoutContent}
        </div>
      </div>
    </MainLayout>
  );
};

export default LegalLayout;
