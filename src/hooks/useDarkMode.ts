import { Mode } from "@src/contexts/ThemeContext.context";
import { useEffect, useState } from "react";
import { LocalStorageKeys } from "@src/constants/localStorage.constant";

type Returns = [
  currentMode: Mode | null,
  modeSwitcher: (newMode: Mode) => void
];

/**
 * @description set up dark mode in _app.
 * @dependencies useToggleDarkMode and ThemeContext. Also set up script in _document.
 */
export const useDarkMode = (): Returns => {
  // ANCHOR the theme of the app
  const [mode, setMode] = useState<Mode | null>(null);

  // ANCHOR sync themeContext with body
  useEffect(() => {
    const currentTheme = document.body.className;

    if (currentTheme === "light-mode" || currentTheme === "dark-mode") {
      setMode(currentTheme);
    }
  }, []);

  // set theme for localStorage, themeContext, and body's classes
  const onModeSwitch = (newMode: Mode) => {
    // Check valid mode
    if (newMode) {
      // change to new theme
      try {
        localStorage.setItem(LocalStorageKeys.Theme, newMode);
        document.body.className = document.body.className.replace(
          /.*mode/,
          newMode
        );
        setMode(newMode);
      } catch (error) {
        console.warn("Failed to set theme to localStorage");
        console.log(error);
      }
    } else {
      throw new Error("received a null for newMode");
    }
  };

  return [mode, onModeSwitch];
};
