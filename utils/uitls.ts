export const setThemeLocalStorage = (theme: string) => {
  localStorage.theme = theme;
};

export const toggleTheme = (theme: string) => {
  document.documentElement.classList.add(theme);
  document.documentElement.classList.remove(
    theme === "dark" ? "light" : "dark"
  );
};
