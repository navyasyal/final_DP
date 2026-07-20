/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: "#F4EFE4",       // page background — warm cream paper
        panel: "#FFFCF6",      // card background — near-white paper
        "panel-2": "#EEE4D1",  // deeper cream for chips/headers
        line: "#E1D2B5",       // hairline borders — tan
        ink: "#3A2418",        // primary text — deep maroon-brown
        "ink-dim": "#8C7A63",  // secondary text — muted taupe
        indigo: {
          DEFAULT: "#B5533C",  // terracotta accent
          soft: "#C97A5C",
        },
        cyan: {
          DEFAULT: "#4C8880",  // muted sage/teal accent
          soft: "#79A89F",
        },
        amber: "#CC9A3C",      // mustard gold (doodle crosses)
        danger: "#B5533C",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 20% 20%, rgba(181,83,60,0.08), transparent 40%), radial-gradient(circle at 80% 0%, rgba(76,136,128,0.08), transparent 40%)",
      },
      boxShadow: {
        glow: "0 1px 2px rgba(58,36,24,0.06), 0 8px 24px -8px rgba(58,36,24,0.15)",
        "glow-cyan": "0 1px 2px rgba(58,36,24,0.06), 0 8px 24px -8px rgba(76,136,128,0.25)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        scanline: "scanline 6s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
