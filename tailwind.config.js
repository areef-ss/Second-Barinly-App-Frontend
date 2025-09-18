import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        purple: {
          ...defaultTheme.colors.purple, // keep Tailwind’s purple scale
          200: "#b2abf7ff",
          300: "#c0ccf3ff",
          400: "#7572f1ff",
          500: "#a29ef7ff",
          600: "#ad5bf0ff",
          700: "#1c1a8f",
        },
        slate:{
          200:"#f8f9fa",
          300:"#f1f3f5",
          400:"#e2e8f0",
          500:"#cbd5e1",
          600:"#94a3b8",
          700:"#64748b",
          800:"#475569",
          900:"#334155",
        
      },
      },
    },
  },
  plugins: [],
}

