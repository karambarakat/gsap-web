import "./app.scss";

import { ScrollProvider } from "@useScrollEffect";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ScrollProvider percent={0}>
        <Component {...pageProps} />
      </ScrollProvider>
    </>
  );
}

export default MyApp;
