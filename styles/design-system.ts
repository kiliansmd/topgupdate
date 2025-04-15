// Einheitliche Farbpalette und Design-Konstanten
export const colors = {
  primary: {
    main: "#6246ea", // Hauptfarbe (Lila/Indigo)
    light: "#7c5af8",
    dark: "#5438d5",
    contrast: "#ffffff",
  },
  background: {
    main: "#0d0d14", // Dunkler Hintergrund
    card: "#12121c",
    elevated: "#16161f",
  },
  text: {
    primary: "#ffffff",
    secondary: "rgba(255, 255, 255, 0.8)",
    muted: "rgba(255, 255, 255, 0.6)",
    subtle: "rgba(255, 255, 255, 0.4)",
  },
  border: {
    light: "rgba(255, 255, 255, 0.1)",
    medium: "rgba(255, 255, 255, 0.15)",
    focus: "rgba(98, 70, 234, 0.5)",
  },
  success: {
    main: "#10b981",
    light: "rgba(16, 185, 129, 0.2)",
  },
  rating: {
    star: "#fbbf24",
  },
}

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "3rem",
}

export const typography = {
  fontFamily: {
    sans: "Inter, system-ui, sans-serif",
    heading: "Inter, system-ui, sans-serif",
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
}

export const shadows = {
  sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
}

export const borderRadius = {
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  full: "9999px",
}

export const transitions = {
  fast: "all 0.2s ease",
  normal: "all 0.3s ease",
  slow: "all 0.5s ease",
}
