import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import type { DesignStyle } from "../types/theme";

/**
 * Per-style "card" treatment (border / shadow / radius / background) for the
 * hand-styled Box "cards" that predate the style switcher (Home subject
 * cards, recent-topic rows, ...). Most MUI-driven chrome gets its look for
 * free from src/theme/styles.ts — this covers the handful of spots that
 * need to react to the *shape* of a card, not just its palette.
 *
 * Colors reference `theme.vars.palette.*` (CSS variable references) rather
 * than `theme.palette.*` so they stay correct across a live light/dark
 * toggle without needing theme.applyStyles() everywhere — see Sidebar.tsx
 * for the applyStyles alternative used elsewhere in this app.
 */
export function getCardSx(style: DesignStyle, theme: Theme): SystemStyleObject<Theme> {
  switch (style) {
    case "neo-brutalism": {
      // cssVariables is enabled on every style (see styles.ts), so
      // theme.vars is always populated at runtime.
      const c = theme.vars!.palette.text.primary;
      return {
        border: `2px solid ${c}`,
        borderRadius: 0,
        boxShadow: `4px 4px 0 ${c}`,
        transition: "transform 0.12s ease, box-shadow 0.12s ease",
        "&:hover": {
          transform: "translate(-2px, -2px)",
          boxShadow: `6px 6px 0 ${c}`,
        },
      };
    }

    case "bento":
      return {
        border: "none",
        borderRadius: 4,
        bgcolor: "background.paper",
        boxShadow: "0 6px 20px rgba(15, 23, 42, 0.08)",
        ...theme.applyStyles("dark", {
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
        }),
      };

    case "neumorphism":
      return {
        border: "none",
        borderRadius: 3,
        bgcolor: "background.default",
        boxShadow: "8px 8px 16px #c7cbd3, -8px -8px 16px #ffffff",
        ...theme.applyStyles("dark", {
          boxShadow: "8px 8px 16px #06070c, -8px -8px 16px #1c2030",
        }),
      };

    case "brutalism":
      return {
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 0,
      };

    case "minimal":
      return {
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 1.5,
      };

    default:
      return {
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
      };
  }
}
