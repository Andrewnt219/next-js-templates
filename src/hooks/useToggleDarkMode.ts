import { ThemeContext } from "@src/contexts/ThemeContext.context";
import { useCallback, useContext } from "react";
import { Mode } from "@src/contexts/ThemeContext.context";

type Returns = [mode: Mode, toggler: () => void];

/**
 * @description consume the ThemeContext to toggle dark/light mode.
 * @dependencies useDarkMode must be used in _app. Must have ThemeContext
 */
export const useToggleDarkMode = (): Returns => {
  const { onModeSwitch, mode } = useContext(ThemeContext);

  /* Toggle theme switch */
  const toggleDarkMode = useCallback(() => {
    mode === "dark-mode"
      ? onModeSwitch("light-mode")
      : onModeSwitch("dark-mode");
  }, [mode, onModeSwitch]);

  return [mode, toggleDarkMode];
};
