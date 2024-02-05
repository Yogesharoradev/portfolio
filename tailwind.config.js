/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text_primary: "#eed1c7",
        text_secondary: "#bda3a3",
        accent: "#dba895",
        accent_opacity: "#dba8952a",
        bg_color: "#171212",
        elevation_one: "#211c1c",
        elevation_two: "#211c1c75",
        elevation_three: "#1e1a1a",
        elevation_four: "#7b73733a",
        elevation_five: "#1f1919ca",
        elevation_six: "#0a0808bb",
        bezier_one: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      fontSize: {
        clamp416: "clamp(4rem, 10vw, 6.25rem",
        clamp121: "clamp(1.4rem, 2.4vw, 1.5rem)",
      },
      width: {
        wclamp344: "clamp(340px, 40vw, 425px)",
      },
      height: {
        hclamp344: "clamp(300px, 40vw, 400px)",
      },
      fontFamily: {
        jetbrains: "JetBrains_Mono",
        spacegrotesk: "Space_Grotesk",
      },
    },
  },
  plugins: [],
};
