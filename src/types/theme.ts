/** The set of switchable visual design styles for the app shell + theme. */
export type DesignStyle =
  | "default"
  | "minimal"
  | "neo-brutalism"
  | "brutalism"
  | "bento"
  | "neumorphism";

export const DESIGN_STYLE_STORAGE_KEY = "engineering-os:design-style";

export const DEFAULT_DESIGN_STYLE: DesignStyle = "default";

export interface DesignStyleMeta {
  id: DesignStyle;
  label: string;
  description: string;
}

/** Order here is the order shown in the style-switcher menu. */
export const DESIGN_STYLES: DesignStyleMeta[] = [
  { id: "default", label: "Default", description: "Restrained, developer-focused" },
  { id: "minimal", label: "Minimal", description: "Just the type — no nav chrome" },
  { id: "neo-brutalism", label: "Neo-Brutalism", description: "Thick borders, hard shadows" },
  { id: "brutalism", label: "Brutalism", description: "Raw, undesigned, monospace" },
  { id: "bento", label: "Bento", description: "Rounded cards, soft shadows" },
  { id: "neumorphism", label: "Neumorphism", description: "Soft extruded surfaces" },
];

export function isDesignStyle(value: unknown): value is DesignStyle {
  return DESIGN_STYLES.some((s) => s.id === value);
}
