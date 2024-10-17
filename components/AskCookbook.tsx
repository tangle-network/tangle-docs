import dynamic from "next/dynamic";
import type { AskCookbookConfig } from "@cookbookdev/docsbot/dist/react/index";

const BaseAskCookbook = dynamic<AskCookbookConfig>(
  () => import("@cookbookdev/docsbot/react"),
  {
    ssr: false,
  },
);

/** It's a public API key, so it's safe to expose it here */
const PUBLIC_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmU4N2JhOGU3NmZkNTY2M2Q3MzExNGIiLCJpYXQiOjE3MjY1MTIwNDAsImV4cCI6MjA0MjA4ODA0MH0.aQrZ8hoVttOPvOIWX5M1jB3Ut_t9FUFLEOUSwRVSwa4";

export const AskCookbook = () => {
  return <BaseAskCookbook apiKey={PUBLIC_API_KEY} />;
};
