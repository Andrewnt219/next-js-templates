import "tailwindcss/dist/base.min.css";
import { AppProps } from "next/app";
import { GlobalStyle } from "@src/styles/GlobalStyle.theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
