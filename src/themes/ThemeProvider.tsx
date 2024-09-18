import PropTypes from "prop-types";
import { ReactNode, useMemo } from "react";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

import palette from "./palette";
import componentsOverride from "./overrides";

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

interface ThemeProviderProps {
  children: ReactNode;
}
export default function ThemeProvider({ children }: ThemeProviderProps) {
  const themeOptions = useMemo(
    () => ({
      palette: palette,
    }),
    []
  );

  const theme: any = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
