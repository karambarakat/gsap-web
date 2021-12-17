import { ThemeProvider } from "theme-ui";

export const theme = {
  breakpoints: ["576px", "768px", "992px", "1200px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 500,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#1f2937",
    background: "#f9fafb",
    highlight: "#e7ff66",
    primary: "#570df8",
    "primary-focus": "#4506cb",
    "primary-content": "#ffffff",
    secondary: "#f000b8",
    "secondary-focus": "#bd0091",
    "secondary-content": "#ffffff",
    accent: "#37cdbe",
    "accent-focus": "#2aa79b",
    "accent-content": "#ffffff",
    neutral: "#3d4451",
    "neutral-focus": "#2a2e37",
    "neutral-content": "#ffffff",
    "base-100": "#ffffff",
    "base-200": "#f9fafb",
    "base-300": "#d1d5db",
    "base-content": "#1f2937",
    info: "#2094f3",
    success: "#009485",
    warning: "#ff9900",
    error: "#ff5724",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      "*": {
        p: 0,
        m: 0,
      },
      a: {
        color: "primary",
        ":hover": {
          color: "primary-focus",
        },
        textDecoration: "none",
      },
    },
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
