import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/bg-header.png')",
        'quran': "url('/bg-quran.png')",
       },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        card: "var(--card)"
      },
    },
  },
  plugins: [],
} satisfies Config;
