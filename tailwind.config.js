/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", "[data-mode='dark']"],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        custom: {
          blueViolet: "#7C5DFA", // Azul Violeta
          lavenderPurple: "#9277FF", // Lavanda Púrpura
          darkBlue: "#1E2139", // Azul Escuro Profundo
          nightBlue: "#252945", // Cinza-Azul Noite
          mistyBlue: "#DFE3FA", // Azul Nebuloso Claro
          lavenderGray: "#888EB0", // Cinza Lavanda
          softBlue: "#7E88C3", // Azul Lavanda
          midnightBlack: "#0C0E16", // Preto Noturno
          roseRed: "#EC5757", // Vermelho Rosado
          deepBlackBlue: "#141625", // Azul Preto Profundo
        },
      },
    },
  },
  plugins: [],
};
