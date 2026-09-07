import type { ThemeOptions } from "@mui/material/styles";
import type { DesignStyle } from "../types/theme";

const CSS_VARS: ThemeOptions = {
  cssVariables: { colorSchemeSelector: "data" },
};

/** Restrained, developer-focused. Typography, spacing, and borders carry
 * hierarchy — not color or shadow. This is the app's original look. */
const defaultStyle: ThemeOptions = {
  ...CSS_VARS,
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: { main: "#2563eb" },
        background: { default: "#fafafa", paper: "#ffffff" },
        text: { primary: "#1a1a1a", secondary: "#5f6368" },
        divider: "#e5e7eb",
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: { main: "#60a5fa" },
        background: { default: "#0f1115", paper: "#171a21" },
        text: { primary: "#eef0f2", secondary: "#9aa2af" },
        divider: "#2a2e37",
      },
    },
  },
  shape: { borderRadius: 6 },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: { fontSize: "2.25rem", fontWeight: 700, lineHeight: 1.25 },
    h2: { fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.35 },
    h3: { fontSize: "1.15rem", fontWeight: 600, lineHeight: 1.4 },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.9rem", lineHeight: 1.65 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 6 } },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } },
    MuiAppBar: { styleOverrides: { root: { backgroundImage: "none" } } },
    MuiChip: { styleOverrides: { root: { borderRadius: 4, fontWeight: 500 } } },
    MuiAccordion: {
      styleOverrides: { root: { boxShadow: "none", "&:before": { display: "none" } } },
    },
  },
};

/** Just the type. Near-invisible borders, monochrome accent, generous
 * whitespace — the app shell (nav) is hidden by Layout for this style. */
const minimalStyle: ThemeOptions = {
  ...CSS_VARS,
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: { main: "#111111" },
        background: { default: "#ffffff", paper: "#ffffff" },
        text: { primary: "#111111", secondary: "#767676" },
        divider: "#ededed",
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: { main: "#f5f5f5" },
        background: { default: "#0a0a0a", paper: "#0a0a0a" },
        text: { primary: "#f5f5f5", secondary: "#8a8a8a" },
        divider: "#1f1f1f",
      },
    },
  },
  shape: { borderRadius: 3 },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Roboto, Helvetica, Arial, sans-serif',
    h1: { fontSize: "2.5rem", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.02em" },
    h2: { fontSize: "1.4rem", fontWeight: 600, lineHeight: 1.4, letterSpacing: "-0.01em" },
    h3: { fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.45 },
    body1: { fontSize: "1.02rem", lineHeight: 1.85 },
    body2: { fontSize: "0.92rem", lineHeight: 1.75 },
    button: { textTransform: "none", fontWeight: 500 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 4 } },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: "none", boxShadow: "none" } } },
    MuiAppBar: { styleOverrides: { root: { backgroundImage: "none", boxShadow: "none" } } },
    MuiChip: { styleOverrides: { root: { borderRadius: 3, fontWeight: 500 } } },
    MuiAccordion: {
      styleOverrides: { root: { boxShadow: "none", "&:before": { display: "none" } } },
    },
  },
};

/** Bold flat color, thick black borders, hard offset shadows. Playful and
 * loud on purpose. */
const neoBrutalismStyle: ThemeOptions = {
  ...CSS_VARS,
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: { main: "#0038ff" },
        secondary: { main: "#ffd60a" },
        background: { default: "#fef6e4", paper: "#ffffff" },
        text: { primary: "#000000", secondary: "#3a3a3a" },
        divider: "#000000",
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: { main: "#5c8dff" },
        secondary: { main: "#ffe066" },
        background: { default: "#111111", paper: "#1a1a1a" },
        text: { primary: "#ffffff", secondary: "#c9c9c9" },
        divider: "#ffffff",
      },
    },
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily:
      '"Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: { fontSize: "2.5rem", fontWeight: 800, lineHeight: 1.15, textTransform: "uppercase" },
    h2: { fontSize: "1.5rem", fontWeight: 800, lineHeight: 1.25, textTransform: "uppercase" },
    h3: { fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.35 },
    body1: { fontSize: "1rem", lineHeight: 1.65 },
    body2: { fontSize: "0.9rem", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 0,
          border: `2px solid ${theme.vars.palette.text.primary}`,
          boxShadow: `3px 3px 0 ${theme.vars.palette.text.primary}`,
          transition: "transform 0.1s ease, box-shadow 0.1s ease",
          "&:hover": {
            transform: "translate(-2px, -2px)",
            boxShadow: `5px 5px 0 ${theme.vars.palette.text.primary}`,
          },
          "&:active": { transform: "translate(0, 0)", boxShadow: "none" },
        }),
      },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } },
    MuiAppBar: { styleOverrides: { root: { backgroundImage: "none" } } },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 0,
          fontWeight: 700,
          border: `2px solid ${theme.vars.palette.text.primary}`,
        }),
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: "none",
          border: `2px solid ${theme.vars.palette.text.primary}`,
          "&:before": { display: "none" },
        }),
      },
    },
  },
};

/** Raw, undesigned web: monospace type, harsh black/white contrast, thin
 * hairline borders, no shadows. */
const brutalismStyle: ThemeOptions = {
  ...CSS_VARS,
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: { main: "#0000ee" },
        background: { default: "#ffffff", paper: "#ffffff" },
        text: { primary: "#000000", secondary: "#000000" },
        divider: "#000000",
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: { main: "#4da3ff" },
        background: { default: "#000000", paper: "#000000" },
        text: { primary: "#ffffff", secondary: "#ffffff" },
        divider: "#ffffff",
      },
    },
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: '"JetBrains Mono", ui-monospace, Menlo, Consolas, monospace',
    h1: { fontSize: "2rem", fontWeight: 700, lineHeight: 1.3 },
    h2: { fontSize: "1.3rem", fontWeight: 700, lineHeight: 1.4 },
    h3: { fontSize: "1rem", fontWeight: 700, lineHeight: 1.45 },
    body1: { fontSize: "0.95rem", lineHeight: 1.6 },
    body2: { fontSize: "0.85rem", lineHeight: 1.55 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
        },
      },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: "none", boxShadow: "none" } } },
    MuiAppBar: { styleOverrides: { root: { backgroundImage: "none", boxShadow: "none" } } },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 0, fontWeight: 700, backgroundColor: "transparent" },
      },
    },
    MuiAccordion: {
      styleOverrides: { root: { boxShadow: "none", "&:before": { display: "none" } } },
    },
  },
};

/** Rounded card-grid dashboard feel: big radii, soft shadows, friendly
 * accent color. Mainly shows up wherever getCardSx() is used (Home). */
const bentoStyle: ThemeOptions = {
  ...CSS_VARS,
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: { main: "#4f46e5" },
        secondary: { main: "#f59e0b" },
        background: { default: "#f4f1ea", paper: "#ffffff" },
        text: { primary: "#18181b", secondary: "#6b7280" },
        divider: "#e9e5da",
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: { main: "#818cf8" },
        secondary: { main: "#fbbf24" },
        background: { default: "#0f1117", paper: "#1a1d29" },
        text: { primary: "#f2f3f7", secondary: "#9aa0b4" },
        divider: "#262a38",
      },
    },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: { fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.25 },
    h2: { fontSize: "1.5rem", fontWeight: 800, lineHeight: 1.35 },
    h3: { fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.4 },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.9rem", lineHeight: 1.65 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 12 } },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: "none", borderRadius: 16 } },
    },
    MuiAppBar: { styleOverrides: { root: { backgroundImage: "none" } } },
    MuiChip: { styleOverrides: { root: { borderRadius: 8, fontWeight: 600 } } },
    MuiAccordion: {
      styleOverrides: {
        root: { boxShadow: "none", borderRadius: 12, "&:before": { display: "none" } },
      },
    },
  },
};

/** Soft extruded surfaces on a matching background — the whole point is
 * shadow instead of borders. Deliberately borderless. */
const neumorphismStyle: ThemeOptions = {
  ...CSS_VARS,
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: { main: "#5b6bf2" },
        background: { default: "#e6e9ef", paper: "#e6e9ef" },
        text: { primary: "#2c2f38", secondary: "#666b78" },
        divider: "#d4d8e0",
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: { main: "#8891f5" },
        background: { default: "#12141c", paper: "#12141c" },
        text: { primary: "#e8e9f0", secondary: "#9498a8" },
        divider: "#1c1f2a",
      },
    },
  },
  shape: { borderRadius: 9 },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: { fontSize: "2.25rem", fontWeight: 700, lineHeight: 1.25 },
    h2: { fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.35 },
    h3: { fontSize: "1.15rem", fontWeight: 600, lineHeight: 1.4 },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.9rem", lineHeight: 1.65 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true, variant: "text" },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 10,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "inset 2px 2px 5px #c3c7ce, inset -2px -2px 5px #ffffff",
            ...theme.applyStyles("dark", {
              boxShadow: "inset 2px 2px 5px #05060a, inset -2px -2px 5px #1f2230",
            }),
          },
        }),
      },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: "none", boxShadow: "none" } } },
    MuiAppBar: { styleOverrides: { root: { backgroundImage: "none", boxShadow: "none" } } },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 8,
          fontWeight: 500,
          border: "none",
          boxShadow: "3px 3px 6px #c3c7ce, -3px -3px 6px #ffffff",
          ...theme.applyStyles("dark", {
            boxShadow: "3px 3px 6px #05060a, -3px -3px 6px #1f2230",
          }),
        }),
      },
    },
    MuiAccordion: {
      styleOverrides: { root: { boxShadow: "none", "&:before": { display: "none" } } },
    },
  },
};

export const STYLE_THEME_OPTIONS: Record<DesignStyle, ThemeOptions> = {
  default: defaultStyle,
  minimal: minimalStyle,
  "neo-brutalism": neoBrutalismStyle,
  brutalism: brutalismStyle,
  bento: bentoStyle,
  neumorphism: neumorphismStyle,
};
