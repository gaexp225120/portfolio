import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        // Dark
        pureBlack: "#333",
        pureGrey: "#979b98",
        /// Light
        accordionTitle: "#f2fcfc",
        accordionContent: "#e5edf09e",
        mainWhite: "#E2E8F0",
        /// Purple
        hoverPurple: "#6c4c95",
        lightPurple: "#966edb",
        // Blue
        darkBlue: "#272a41f7",
        /// rest
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "accordion-gradient":
          "linear-gradient(90deg, rgba(69,45,93,0.989233193277311) 10%, rgba(90,53,125,1) 38%, rgba(118,53,148,1) 65%, rgba(109,33,152,0.5914740896358543) 100%);",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      opacity: {
        0: "0",
        100: "1",
      },
      visibility: {
        hidden: "hidden",
        visible: "visible",
      },
      transitionProperty: {
        opacity: "opacity",
        visibility: "visibility",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
