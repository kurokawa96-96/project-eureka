import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#182638",
        ivory: "#F4F1E9",
        gold: "#B69A68",
        // アイボリー背景の上で小さな文字に使う、コントラストを確保した濃い金色
        "gold-deep": "#7A6334",
        charcoal: "#30343A",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
