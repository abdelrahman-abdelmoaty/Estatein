import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lp: "0",
        xl: "0",
        dt: "0",
      },
      screens: {
        xl: "1280px",
        dt: "1596px",
      },
    },
    extend: {
      screens: {
        dt: "1596px",
      },
      spacing: {
        4.5: "1.125rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        15: "3.75rem",
        17.5: "4.375rem",
        18: "4.5rem",
        20.5: "5.125rem",
        23.5: "5.875rem",
        29: "7.25rem",
        p60: "3.75rem",
        p40: "2.5rem",
        p20: "1.25rem",
        p24: "1.5rem",
        p16: "1rem",
      },
      borderRadius: {
        base: "0.625rem",
      },
      colors: {
        "purple-60": "#703BF7",
        "purple-65": "#1a64ff",
        "purple-70": "#ff9533",
        "purple-75": "#ffca99",
        "purple-90": "#ffe4cc",
        "purple-95": "#fff1e5",
        "purple-97": "#fff7f0",
        "purple-99": "#fffcfa",
        "white-90": "#e4e4e6",
        "white-95": "#f1f1f3",
        "white-97": "#f7f7f8",
        "white-99": "#fcfcfd",
        "grey-08": "#141414",
        "grey-10": "#1a1a1a",
        "grey-15": "#262626",
        "grey-20": "#333333",
        "grey-30": "#4d4d4d",
        "grey-40": "#666666",
        "grey-50": "#808080",
        "grey-60": "#999999",
      },
    },
  },
  plugins: [],
};
export default config;
