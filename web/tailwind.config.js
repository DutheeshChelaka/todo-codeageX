/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter','ui-sans-serif','system-ui','Segoe UI','Roboto','Helvetica','Arial']
      },
      boxShadow: {
        card: "0 8px 30px rgba(16,24,40,.08)",
        subtle: "0 1px 2px rgba(16,24,40,.05)"
      },
      borderRadius: { xl2: "1rem" }
    }
  },
  plugins: []
}
