import { createTheme, type Theme } from "@mui/material/styles";
import type { DesignStyle } from "../types/theme";
import { STYLE_THEME_OPTIONS } from "./styles";

/** Builds the MUI theme for a given design style. Each style is a
 * self-contained ThemeOptions (palette, shape, typography, component
 * overrides) — see src/theme/styles.ts. Light/dark mode is orthogonal to
 * this and keeps working via MUI's cssVariables colorSchemes + useColorScheme(). */
export function buildTheme(style: DesignStyle): Theme {
  return createTheme(STYLE_THEME_OPTIONS[style]);
}

// Default export kept for anything still importing the static theme.
const theme = buildTheme("default");
export default theme;
