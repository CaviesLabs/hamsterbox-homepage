import type { AppProps } from "next/app";
import { FC } from "react";
import { SeoComponent } from "@/src/components/seo/seo.component";

import "../../styles/globals.css";
import "../../styles/globals.scss";

const AppComponent: FC<{ Component: any; pageProps: any }> = ({
  Component,
  pageProps,
}) => {
  return <Component {...pageProps} />;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SeoComponent />
      <AppComponent {...{ Component, pageProps }} />
    </>
  );
}

export default MyApp;
