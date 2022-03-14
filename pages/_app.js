/** @jsxImportSource @emotion/react */
import { ThemeProvider } from "@emotion/react";
import theme from "../colors/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
