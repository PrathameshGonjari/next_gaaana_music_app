"use client";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import { amber } from "@mui/material/colors";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

const themeOptions: ThemeOptions = {
  palette: {
    primary: amber,
    secondary: {
      main: "#ffd54f",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
};

const theme = createTheme(themeOptions);

const ThemeRegistry = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};

export default ThemeRegistry;
