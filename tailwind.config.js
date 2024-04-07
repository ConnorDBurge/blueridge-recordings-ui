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
      colors: {
        primary: "#141028",
        secondary: "#FED8A7",
        tertiary: "#2A283C",
      },
    },
  },
};
