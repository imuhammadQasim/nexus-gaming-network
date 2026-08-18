// Tiny external store for the light/dark theme. Reading straight from the DOM
// (rather than mirroring into React state) keeps it in sync with the inline
// bootstrap script in layout.js, which sets data-theme before hydration.

export const THEME_STORAGE_KEY = "bg678-theme";

const listeners = new Set();

export function subscribeToTheme(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

/** Server render has no DOM; the inline bootstrap script corrects this before paint. */
export function getServerTheme() {
  return "light";
}

export function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Private-mode / storage-disabled browsers: theme still applies for this session.
  }
  listeners.forEach((listener) => listener());
}

export function toggleTheme() {
  setTheme(getTheme() === "dark" ? "light" : "dark");
}
