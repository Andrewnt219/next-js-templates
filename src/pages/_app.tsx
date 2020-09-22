import "tailwindcss/dist/base.min.css";
import { AppProps } from "next/app";
import { GlobalStyle } from "@src/styles/GlobalStyle.theme";
import { ThemeContext } from "@src/contexts/ThemeContext.context";
import { useDarkMode } from "@src/hooks/useDarkMode";
import { ReactNode } from "react";

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  const [mode, onModeSwitch] = useDarkMode();

  return (
    <ThemeContext.Provider value={{ mode, onModeSwitch }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
