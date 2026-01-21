import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        n8n: {
          orange: "#FF6D5A",
          dark: "#1a1a2e",
          darker: "#0f0f1a",
          gray: "#2a2a40",
        },
      },
    },
  },
  plugins: [],
};
export default config;
