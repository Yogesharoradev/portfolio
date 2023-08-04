/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#eed1c7',
        white_two: 'hsl(0, 17%, 69%)',
        yellow: '#dba895',
        yellow_opacity: '#dba8952a',
        bg_color: 'hsl(0, 11%, 8%)',
        neutral_one: '#211c1c',
        neutral_two: '#211c1c75',
        neutral_three: '#1e1a1a',
        neutral_four: 'rgba(123, 115, 115, 0.227)',
        neutral_five: '#1f1919ca',
        bezier_one: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      fontSize: {
        clamp416: 'clamp(4rem, 10vw, 6.25rem',
        clamp121: 'clamp(1.4rem, 2.4vw, 1.5rem)'
      },
      width: {
        wclamp344: 'clamp(340px, 40vw, 425px)'
      },
      height: {
        hclamp344: 'clamp(300px, 40vw, 400px)'
      },
      fontFamily: {
        jetbrains: 'JetBrains_Mono',
        spacegrotesk: 'Space_Grotesk',
      }
    },
  },
  plugins: [],
}
