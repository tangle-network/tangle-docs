import "../styles.css";
import "../custom.css";
import { SSRProvider } from "@react-aria/ssr";
import type { AppProps } from "next/app";
import type { ReactNode } from "react";
import "katex/dist/katex.min.css";
import PlausibleProvider from "next-plausible";

type NextraAppProps = AppProps & {
  Component: AppProps["Component"] & {
    getLayout: (page: ReactNode) => ReactNode;
  };
};

// Shim requestIdleCallback in Safari
if (typeof window !== "undefined" && !("requestIdleCallback" in window)) {
  // @ts-ignore
  window.requestIdleCallback = (fn) => setTimeout(fn, 1);
  // @ts-ignore
  window.cancelIdleCallback = (id) => clearTimeout(id);
}

export default function Nextra({ Component, pageProps }: NextraAppProps) {
  // Define a layout if it doesn't exist in the page component
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <PlausibleProvider domain="docs.tangle.tools">
      <SSRProvider>
        <svg height="0px" width="0px" style={{ position: "absolute" }}>
          {" "}
          {/* Adjust style as needed */}
          <defs>
            <linearGradient
              id="pink-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(156, 81, 161, 1)" />
              <stop offset="70%" stopColor="rgba(255, 30, 86, 1)" />
            </linearGradient>
          </defs>
        </svg>

        {getLayout(
          <>
            <Component {...pageProps} />
          </>
        )}
      </SSRProvider>
    </PlausibleProvider>
  );
}
