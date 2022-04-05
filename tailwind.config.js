const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "420px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primaryBg: "var(--primary-bg)",
        dashboardBg: "var(--dashboard-bg)",
        searchBoxBg: "var(--searchBox-bg)",
        primaryBgDark: "var(--primary-bg-dark)",
        dashboardBgDark: "var(--dashboard-bg-dark)",
      },
    },
  },
  plugins: [],
};
