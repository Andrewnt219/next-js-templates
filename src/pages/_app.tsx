import "tailwindcss/dist/base.min.css";
import { AppProps } from "next/app";
import { ThemeContext } from "@src/contexts/ThemeContext.context";
import { useDarkMode } from "@src/utils/hooks/useDarkMode.hook";
import { ReactNode } from "react";
import { GlobalStyle } from "@src/styles/GlobalStyle.theme";

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
