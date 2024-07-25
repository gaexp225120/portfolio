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
        // dark blue
        darkBlue: "#272a41f7",
        lightBlue: "#d9e7ff",
        /// Light
        pureWhite: "#FFFFFF",
        accordionTitle: "#f2fcfc",
        accordionContent: "#e5edf09e",
        mainWhite: "#E2E8F0",
        // light blue
        contactBorder: "#6965f5",
        sendButtonBg: "#6965f5",
        formbuttonHover: "#868cff",
        // wait to used
        contactBg: "#201e3e",
        // light gray(side bar text)
        sideBarTextPurple: "#b9adca",
        /// light purple
        hoverPurple: "#6c4c95",
        lightPurple: "#966edb",
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
        "custom-gradient":
          "linear-gradient(100deg, rgba(0, 62, 84, 1) 0%, rgba(34, 60, 99, 1) 40%, rgba(120, 90, 179, 1) 100%)",
        "form-gradient":
          "linear-gradient(335deg, rgb(122 151 236 / 90%), rgb(79 67 90 / 90%))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
