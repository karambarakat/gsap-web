import Scroller, { ScrollProvider } from "@cmp/Scroller";
import { ThemeProvider } from "theme-ui";

export const theme = {
  breakpoints: ["500px", "700px", "1000px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    serif: '"Perpetua Titling MT",Georgia,"Times New Roman",Times,serif',
    sanSerif:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  text: {
    h1: {
      fontSize: ["30px", "36px", "46px", "calc(64px + 1vw)"],
      fontFamily: "serif",
      fontWeight: 300,
    },
    body1: {
      fontSize: "2rem",
      fontFamily: "sanSerif",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1rem",
      fontFamily: "sanSerif",
      fontWeight: 100,
      letterSpacing: "1px",
    },
    body3: {
      fontSize: "12px",
      fontFamily: "sanSerif",
      fontWeight: 200,
      letterSpacing: "1px",
    },
  },
  colors: {
    primary: "#a6d1c9",
    primaryFocus: "#d2fff6",
    text: "#a6d1c9",
    base: "#282b29",
    background: "#282b29",
  },
  styles: {
    root: {
      fontSize: "1rem",
      fontFamily: "sanSerif",
      fontWeight: 100,
      letterSpacing: "1px",
      "*": {
        p: 0,
        m: 0,
      },
      h1: { variant: "text.h1" },
      p: { variant: "text.body2" },
      a: {
        variant: "text.body3",
        color: "primary",
        ":hover": {
          color: "primaryFocus",
        },
        textDecoration: "none",
      },
    },
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ScrollProvider>
          <Component {...pageProps} />
        </ScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
