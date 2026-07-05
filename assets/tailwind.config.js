/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        d_bg:    '#060608',
        d_bg2:   '#0b0b12',
        d_bg3:   '#111120',
        d_amber: '#ffb700',
        d_dim:   '#3a3a52',
        d_muted: '#6b6b88',
        d_ghost: '#9898b0',
        d_light: '#d8d8e8',
        l_bg:    '#f4f0e8',
        l_bg2:   '#ede8de',
        l_bg3:   '#e5dfd2',
        l_amber: '#c07000',
        l_dim:   '#b0a898',
        l_muted: '#7a6f60',
        l_text:  '#1a1510',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"','monospace'],
        sans: ['"IBM Plex Sans"','sans-serif'],
      },
      keyframes: {
        neon: {
          '0%,89%,91%,93%,100%': { opacity:'1', filter:'drop-shadow(0 0 6px currentColor) drop-shadow(0 0 18px currentColor)' },
          '90%':  { opacity:'0.15', filter:'none' },
          '92%':  { opacity:'0.9',  filter:'drop-shadow(0 0 3px currentColor)' },
          '94%,96%': { opacity:'0.05', filter:'none' },
          '95%,97%': { opacity:'1',  filter:'drop-shadow(0 0 6px currentColor) drop-shadow(0 0 18px currentColor)' },
        },
        blink:   { '0%,100%':{opacity:1},'50%':{opacity:0} },
        led:     { '0%,100%':{opacity:1,boxShadow:'0 0 4px currentColor'},'50%':{opacity:0.4,boxShadow:'none'} },
        scanscroll:{ '0%':{strokeDashoffset:'1000'},'100%':{strokeDashoffset:'0'} },
        waveflow:{ '0%':{transform:'translateX(0)'},'100%':{transform:'translateX(-50%)'} },
        mosfet_on:{ '0%':{fill:'transparent'},'100%':{fill:'#ffb70040'} },
        chargeup:{ '0%':{width:'0%'},'100%':{width:'100%'} },
      },
      animation: {
        neon:     'neon 6s ease-in-out infinite',
        blink:    'blink 1s step-end infinite',
        led:      'led 1.8s ease-in-out infinite',
        waveflow: 'waveflow 8s linear infinite',
      },
    }
  },
  safelist: [
    { pattern: /^(bg|text|border)-(d_|l_)/ },
  ],
}
