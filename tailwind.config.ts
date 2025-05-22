import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        banner: {
          primary: "var(--banner-primary)",
          secondary: "var(--banner-secondary)",
          accent: "var(--banner-accent)",
          text: "var(--banner-text)",
        },
        button: {
          primary: "var(--button-primary)",
          secondary: "var(--button-secondary)",
          border: "#212529",
          text: "var(--button-text)",
          hover: "var(--button-hover)",
        },
      },
      fontFamily: {
        garamond: ["var(--font-garamond)", "EB Garamond", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
