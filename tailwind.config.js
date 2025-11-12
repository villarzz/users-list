/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}", // inclui todos os arquivos Angular
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // azul personalizado
        secondary: "#F59E0B", // amarelo
        accent: "#10B981", // verde
        background: "#F3F4F6", // cinza claro
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
