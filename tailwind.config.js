/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  prefix: "tw-",
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(rgba(0, 0, 0, 1.5), rgba(0, 0, 0, 0.5)), url(../assets/image/web.jpg)",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
