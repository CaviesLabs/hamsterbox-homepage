import type { AppProps } from "next/app";
import { FC } from "react";
import { ThemeProvider } from "next-themes";

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
      <ThemeProvider>
        <AppComponent {...{ Component, pageProps }} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
