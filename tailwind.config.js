/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
