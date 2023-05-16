/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    colors: {
      "ios-light-surface": "#efeff4",
      "ios-dark-surface": "#000",
      "ios-light-surface-1": "#fff",
      "ios-dark-surface-1": "#1c1c1d",
      "ios-light-surface-2": "#f7f7f8",
      "ios-dark-surface-2": "#121212",
      "ios-light-surface-3": "#fff",
      "ios-dark-surface-3": "#1c1c1d",
      "ios-light-surface-variant": "#f4f4f4",
      "ios-dark-surface-variant": "#232323",
      // Custom below
      "ios-system-green-dark": "#32D74B",
      "ios-system-switch-bg-dark": "rgba(120, 120, 128, 0.32)",
      "ios-system-tableview-border-dark": "rgba(112, 112, 112, 1)",
      "ios-system-checkbox-bg-light": "#0A84FF",
      "ios-system-chevron-bg-dark": "rgba(235, 235, 245, 0.3)",
      "ios-system-detail-text-dark": "rgba(235, 235, 245, 0.6)",
      "ios-system-airplane-mode-symbol": "rgba(247, 144, 0, 1)",
    },
    }
  },
  plugins: [],
}
