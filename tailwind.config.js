/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      colors: {
        primaryText: "#ffffff",
        secondaryText: "#cdd9e5",
        textDark: "#1c2128",
        gradientFrom: "#673AB7",
        gradientTo: "#512da8",
        primary: "#673AB7",
        headerColor: "#22163c",
             },
    },
  },
};
