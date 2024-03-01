/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "radar-spin": "radar-spin 6s linear infinite",
      },
      keyframes: {
        "radar-spin": {
          from: {
            transform: "rotate(10deg)",
          },
          to: {
            transform: "rotate(300deg)",
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

