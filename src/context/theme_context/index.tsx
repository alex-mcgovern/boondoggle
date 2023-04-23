import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { MEDIA_QUERY_DARK } from "../../styles/common/media_queries.css";

import type { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextProvided = {
  dark: boolean;
  toggleDark?: () => void;
};

export const ThemeContext = createContext<ThemeContextProvided>({ dark: true });

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [dark, setDark] = useState(true);

  const toggleDark = useCallback(() => {
    setDark((currentDarkLightState) => {
      return !currentDarkLightState;
    });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MEDIA_QUERY_DARK);
    setDark(mediaQuery.matches);

    const handleToggle = (e: MediaQueryListEvent) => {
      setDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleToggle);

    return () => {
      return mediaQuery.removeEventListener("change", handleToggle);
    };
  }, []);

  const value = useMemo(() => {
    return { dark, toggleDark };
  }, [dark, toggleDark]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
