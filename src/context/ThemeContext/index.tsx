import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

interface IThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextProvided {
  dark: boolean;
  toggleDark?: () => void;
}

export const ThemeContext = createContext<ThemeContextProvided>({ dark: true });

export function ThemeProvider({ children }: IThemeProviderProps) {
  const [dark, setDark] = useState(true);

  const toggleDark = useCallback(() => {
    setDark((currentDarkLightState) => {
      return !currentDarkLightState;
    });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
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
