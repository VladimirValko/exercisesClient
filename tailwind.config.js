module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e11d48",
          secondary: "#e5e7eb",
          accent: "#fde047",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#ffe4e6",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#f43f5e",
        },
      },
    ],
  },
};
