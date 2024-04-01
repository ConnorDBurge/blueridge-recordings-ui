import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";

export default {
  important: true,
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [formsPlugin, typographyPlugin],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // 16px
          sm: "2rem", // 32px
          xl: "4rem", // 64px
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1328px",
        },
      },
      colors: {
        colors: {
          primary: "#141028",
          secondary: "#FED8A7",
          tertiary: "#2A283C",
        },
      },
    },
  },
};
