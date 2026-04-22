import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#14121b",
        "surface-tint": "#ffb1c7",
        "surface-container-lowest": "#0f0d16",
        "on-surface": "#e6e0ee",
        "surface-container-low": "#1c1a24",
        "surface-container": "#211e28",
        "outline-variant": "#5a3f47",
        primary: "#ffb1c7",
        secondary: "#d3bbff",
        tertiary: "#d7ca00",
        "primary-container": "#ff4993",
      },
      fontFamily: {
        headline: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
