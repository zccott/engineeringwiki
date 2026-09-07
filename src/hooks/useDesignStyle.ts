import { useCallback, useSyncExternalStore } from "react";
import {
  DEFAULT_DESIGN_STYLE,
  DESIGN_STYLE_STORAGE_KEY,
  isDesignStyle,
  type DesignStyle,
} from "../types/theme";

function readStyle(): DesignStyle {
  try {
    const raw = localStorage.getItem(DESIGN_STYLE_STORAGE_KEY);
    return isDesignStyle(raw) ? raw : DEFAULT_DESIGN_STYLE;
  } catch {
    return DEFAULT_DESIGN_STYLE;
  }
}

let styleState: DesignStyle = readStyle();
const listeners = new Set<() => void>();

function notify() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return styleState;
}

function persist(next: DesignStyle) {
  styleState = next;
  try {
    localStorage.setItem(DESIGN_STYLE_STORAGE_KEY, next);
  } catch {
    // ignore
  }
  notify();
}

/** The active design style (Default / Minimal / Neo-Brutalism / ...), persisted
 * in localStorage and shared app-wide — same pattern as useBookmarks/useProgress. */
export function useDesignStyle() {
  const style = useSyncExternalStore(subscribe, getSnapshot);

  const setStyle = useCallback((next: DesignStyle) => {
    persist(next);
  }, []);

  return { style, setStyle };
}
