/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f209a8",
        
"secondary": "#b3e0f9",
        
"accent": "#86cbd8",
        
"neutral": "#28242E",
        
"base-100": "#F6F3F6",
        
"info": "#568BF5",
        
"success": "#5CE08D",
        
"warning": "#B69307",
        
"error": "#F37290",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
