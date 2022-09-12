module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#191123",
        white: "#ffffff",
        black: "#000",
        green: "#3CBF7C",
        purple: "#7B64FF",
        grey: "#9D9EA0",
        dividerColor: "#D9D9D9",
        blurPurple: "rgba(185, 152, 251, 0.8)",
        blurGreen: "rgba(60, 191, 124, 0.8)",
        hamserText: "rgba(149, 131, 255, 0.3)",
      },
      spacing: {
        normal: "18px",
      },
    },
  },
  plugins: [],
};
