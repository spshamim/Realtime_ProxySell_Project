import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        'calc-full-minus-20': 'calc(100% - 20px)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sarala: ["Sarala", "sans-serif"],
        secularone: ["SecularOne", "sans-serif"],
        timmana: ["Timmana", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
	  keyframes: {
        breath: {
          '0%, 100%': {
            boxShadow: '0 4px 20px rgba(255, 0, 0, 0.5)',
          },
          '50%': {
            boxShadow: '0 6px 25px rgba(255, 0, 0, 0.9)',
          },
        },
        breathTop: {
          '0%, 100%': {
            boxShadow: '0 -4px 20px rgba(255, 0, 0, 0.5)',
          },
          '50%': {
            boxShadow: '0 -6px 25px rgba(255, 0, 0, 0.9)',
          },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        breath: 'breath 3s ease-in-out infinite',
        breathTop: 'breathTop 3s ease-in-out infinite',
        rotate360: 'rotate360 0.2s linear',
      },
	  backgroundImage: {
        'button-gradient': 'linear-gradient(135deg, #ad2020, #660000)',
        'button-hover-gradient': 'linear-gradient(135deg, #ff0707, #b30000)',
        'gradient-image': "linear-gradient(to bottom right, rgba(40, 0, 0, 0.50), rgba(30, 0, 0, 0.9)), url('/images/logo.png')",
        'gradient-tool-page' : 'radial-gradient(circle, #250000, #0b0b0b)',
        'gradient-login-wrapper': 'radial-gradient(circle, #3b0b0b, #1a1a1a)',
        'gradient-login-button': 'linear-gradient(135deg, #ad2020, #b30000)',
      },
	  boxShadow: {
        'button-boxshadow': '0 4px 15px rgba(255, 0, 0, 0.3), inset 0 0 10px rgba(255, 0, 0, 0.6)',
        'button-hover-glow': '0 0 20px rgba(255, 7, 7, 0.9), inset 0 0 20px rgba(255, 0, 0, 0.8)',
        'box-shadow-bar': "0 6px 20px rgba(0, 0, 0, 0.5)",
        'box-shadow-foooter': "0 -6px 20px rgba(0, 0, 0, 0.5)",
        'tutorials-item-hover' :'0 4px 8px rgba(0, 0, 0, 0.3)',
        'pricingCard-shadow': '0 10px 20px rgba(0, 0, 0, 0.5)',
        'pricingCard-hover-shadow': '0 15px 30px rgba(0, 0, 0, 0.7)',
        'login-button-shadow': '0 4px 10px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    (api: PluginAPI) => {
      const { addUtilities } = api;
      addUtilities({
      ".text-intense-glow": {
        textShadow: "0 0 15px rgba(255, 7, 7, 1), 0 0 30px rgba(255, 0, 0, 0.8)",
      },
      ".text-intense-glow-hover": {
        textShadow: "0 0 15px rgb(57, 255, 7), 0 0 30px rgba(0, 247, 0, 0.8)",
      },
      ".warning-text-shadow": {
        textShadow: "0 0 10px rgba(255, 0, 0, 0.7)",
      },
      ".toolpage-head-shadow": {
        textShadow: '0 0 20px rgba(255, 0, 0, 0.7)',
      },
      ".border-bottom-bar": {
        borderBottom: "5px solid rgba(255, 0, 0, 0.7)",
      },
      ".border-footer-bar": {
        borderTop: "5px solid rgba(255, 0, 0, 0.7)",
      },
      ".bg-radial-glow": {
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(255, 0, 0, 0.3), transparent 30%),
          radial-gradient(circle at 80% 80%, rgba(255, 0, 0, 0.4), transparent 30%),
          radial-gradient(circle at 50% 50%, rgba(255, 0, 0, 0.5), transparent 30%)`,
      },
      ".toolpage-container": {
        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8)',
        borderTop: '2px solid rgba(255, 0, 0, 0.8)',
        borderLeft: '2px solid rgba(255, 0, 0, 0.8)',
      },
      ".tutorials-page-bandbox": {
        backgroundImage: 'radial-gradient(circle, #3b0b0b, #1a1a1a)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
        borderTop: '1px solid rgba(255, 0, 0, 0.5)',
        borderLeft: '1px solid rgba(255, 0, 0, 0.5)',
      },
      ".login-container": {
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
        borderTop: '1px solid rgba(255, 0, 0, 0.5)',
        borderLeft: '1px solid rgba(255, 0, 0, 0.5)',
      },
      ".login-button-hover": {
        transform: "scale(0.98)",
        background: 'linear-gradient(135deg, #b30000, #660000)',
      },
      ".toast-container": {
        boxShadow: '0 0 14px #b30000',
        borderTop: '3px solid #b30000CC',
        borderLeft: '3px solid #b30000CC',
        borderBottom: '3px solid #b30000CC',
        borderRight: '3px solid #b30000CC',
      },
      ".logout-button": {
        transform: "scale(1.05)",
        boxShadow: '0 0 1px #ff0707, 0 0 1px #FF073A, 0 0 30px #ff0707',
      },
    });
    },
  ],
};

export default config;
