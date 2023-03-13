import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Component {...pageProps} />
      <Analytics />
    </NextUIProvider>
  );
}
