import "katex/dist/katex.min.css";
import type { NextPage } from "next";
import PlausibleProvider from "next-plausible";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import "../globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import TranslationWrapper from '../components/TranslationWrapper';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type NextraAppProps = AppProps & {
  Component: NextPageWithLayout;
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
  const router = useRouter();

  return (
    <PlausibleProvider domain="docs.tangle.tools">
      <NextIntlClientProvider
        locale={router.locale}
        timeZone="Europe/Vienna"
        messages={pageProps.messages}
      >
        <TranslationWrapper namespace={getNamespaceFromComponent(Component)}>
          {({ t }) =>
            getLayout(
              <>
                <Component {...pageProps} t={t} />
                <GoogleAnalytics gaId="G-JEQ15MLV6B" />
              </>
            )
          }
        </TranslationWrapper>
      </NextIntlClientProvider>
    </PlausibleProvider>
  );
}

function getNamespaceFromComponent(Component: NextPageWithLayout): string {
  const componentName = Component.displayName || Component.name;

  if (!componentName) {
    return "default";
  }

  return componentName.replace(/Page$/, '').toLowerCase();
}