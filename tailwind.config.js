/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // Enables dark mode with a class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "5%",
      },
      fontSize: {
        // Screen-specific font sizes in pixels
        // 2560px+ screens
        "xl-2560": ["22px", { lineHeight: "1.5" }],
        "2xl-2560": ["24px", { lineHeight: "1.4" }],
        "3xl-2560": ["30px", { lineHeight: "1.3" }],
        "4xl-2560": ["36px", { lineHeight: "1.2" }],
        "5xl-2560": ["48px", { lineHeight: "1.1" }],
        "6xl-2560": ["60px", { lineHeight: "1" }],
        "7xl-2560": ["72px", { lineHeight: "1" }],
        "8xl-2560": ["96px", { lineHeight: "1" }],
        // 1440px screens
        "xl-1440": ["16px", { lineHeight: "1.5" }],
        "2xl-1440": ["18px", { lineHeight: "1.4" }],
        "3xl-1440": ["24px", { lineHeight: "1.3" }],
        "4xl-1440": ["30px", { lineHeight: "1.2" }],
        "5xl-1440": ["40px", { lineHeight: "1.1" }],
        "6xl-1440": ["50px", { lineHeight: "1" }],
        "7xl-1440": ["60px", { lineHeight: "1" }],
        "8xl-1440": ["80px", { lineHeight: "1" }],
        // 1280px screens
        "xl-1280": ["15px", { lineHeight: "1.5" }],
        "2xl-1280": ["17px", { lineHeight: "1.4" }],
        "3xl-1280": ["22px", { lineHeight: "1.3" }],
        "4xl-1280": ["28px", { lineHeight: "1.2" }],
        "5xl-1280": ["36px", { lineHeight: "1.1" }],
        "6xl-1280": ["45px", { lineHeight: "1" }],
        "7xl-1280": ["54px", { lineHeight: "1" }],
        "8xl-1280": ["72px", { lineHeight: "1" }],
        // 1024px screens (tablets)
        "xl-1024": ["15px", { lineHeight: "1.5" }],
        "2xl-1024": ["17px", { lineHeight: "1.4" }],
        "3xl-1024": ["22px", { lineHeight: "1.3" }],
        "4xl-1024": ["28px", { lineHeight: "1.2" }],
        "5xl-1024": ["36px", { lineHeight: "1.1" }],
        "6xl-1024": ["45px", { lineHeight: "1" }],
        "7xl-1024": ["54px", { lineHeight: "1" }],
        "8xl-1024": ["72px", { lineHeight: "1" }],
        // 768px screens (mobile)
        "xl-768": ["14px", { lineHeight: "1.5" }],
        "2xl-768": ["16px", { lineHeight: "1.4" }],
        "3xl-768": ["20px", { lineHeight: "1.3" }],
        "4xl-768": ["26px", { lineHeight: "1.2" }],
        "5xl-768": ["32px", { lineHeight: "1.1" }],
        "6xl-768": ["40px", { lineHeight: "1" }],
        "7xl-768": ["48px", { lineHeight: "1" }],
        "8xl-768": ["64px", { lineHeight: "1" }],
        // 480px screens (small mobile)
        "xl-480": ["15px", { lineHeight: "1.5" }],
        "2xl-480": ["17px", { lineHeight: "1.4" }],
        "3xl-480": ["22px", { lineHeight: "1.3" }],
        "4xl-480": ["28px", { lineHeight: "1.2" }],
        "5xl-480": ["36px", { lineHeight: "1.1" }],
        "6xl-480": ["45px", { lineHeight: "1" }],
        "7xl-480": ["54px", { lineHeight: "1" }],
        "8xl-480": ["72px", { lineHeight: "1" }],
        // Default font sizes (16px base)
        xs: ["12px", { lineHeight: "1rem" }],
        sm: ["14px", { lineHeight: "1.25rem" }],
        base: ["16px", { lineHeight: "1.5rem" }],
        lg: ["18px", { lineHeight: "1.75rem" }],
        xl: ["20px", { lineHeight: "1.75rem" }],
        "2xl": ["24px", { lineHeight: "2rem" }],
        "3xl": ["30px", { lineHeight: "2.25rem" }],
        "4xl": ["36px", { lineHeight: "2.5rem" }],
        "5xl": ["48px", { lineHeight: "1" }],
        "6xl": ["60px", { lineHeight: "1" }],
        "7xl": ["72px", { lineHeight: "1" }],
        "8xl": ["96px", { lineHeight: "1" }],
        "9xl": ["128px", { lineHeight: "1" }],
      },
      colors: {
        primary: {
          DEFAULT: "#F0E5DB",
          50: "#FEFEFE",
          100: "#FCF9F7",
          200: "#F9F5F1",
          300: "#F6F0EB",
          400: "#F3EDE5",
          500: "#F0E5DB", // Base
          600: "#D8CEC5",
          700: "#A8A099",
          800: "#78726D",
          900: "#484441",
        },
        secondary: {
          DEFAULT: "#3D3633",
          50: "#F5F5F5",
          100: "#D8D7D6",
          200: "#B1AFAE",
          300: "#8A8685",
          400: "#645E5C",
          500: "#3D3633", // Base
          600: "#37312E",
          700: "#2B2624",
          800: "#1F1B19",
          900: "#12100F",
        },
      },
      spacing: {
        64: "16rem",
      },
      fontFamily: {
        fondamento: ["Fondamento", "cursive"],
      },
    },
  },

  plugins: [
    async () => (await import("tailwindcss-animate")).default,
    async () => (await import("@tailwindcss/forms")).default,
  ],
};
