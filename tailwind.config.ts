import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Source Sans Pro"', "sans-serif"],
      },
      boxShadow: {
        customShadow: "1px 2px 5px #858185",
      },
      
      backgroundImage: {
        "sun-svg": "url('/sun.svg')",
      },
      colors: {
        pureBlack: "#333",
        hoverPurple: "#6c4c95",
        lightPurple: "#966edb",
        pureGrey: "#505451",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
