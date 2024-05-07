import cn from "classnames";
import Link from "next/link";
import { ThemeSwitch } from "nextra-theme-docs";
import { FC, ReactElement, ReactNode, useState } from "react";

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const classes =
    "text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition";
  if (href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

function FooterHeader({ children }: { children: ReactNode }) {
  return <h3 className="text-sm text-black dark:text-white">{children}</h3>;
}

const navigation = {
  general: [
    {
      name: "Tangle Network Whitepaper",
      href: "https://github.com/webb-tools/tangle/blob/main/Tangle_Network_Whitepaper_March282024.pdf",
    },
    // { name: "FAQ", href: "/faq" },
  ],
  source: [
    {
      name: "Webb.js API Tools",
      href: "https://webb-tools.github.io/webb.js/",
    },
    {
      name: "Solidity",
      href: "https://webb-tools.github.io/protocol-solidity/",
    },
    {
      name: "Substrate",
      href: "https://webb-tools.github.io/protocol-substrate/",
    },
    //TODO: need source docs
    // { name: "ZK Gadgets", href: "/docs" },
  ],
  ecosystem: [
    {
      name: "Tangle Network on Polkadot Apps",
      href: "https://polkadot.js.org/apps/?rpc=wss://testnet-rpc.tangle.tools#/explorer",
    },
    {
      name: "Hubble Bridge",
      href: "https://app.webb.tools",
    },
    { name: "Hubble Statistics", href: "https://hubble-stats.webb.tools" },
  ],
  community: [
    {
      name: "GitHub",
      href: "https://github.com/webb-tools/tangle",
    },
    {
      name: "Telegram",
      href: "https://t.me/webbprotocol",
    },
    {
      name: "Discord",
      href: "https://discord.com/invite/cv8EfJu3Tn",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/tangle_network",
    },
  ],
  company: [
    { name: "Webb", href: "https://webb.tools" },
    {
      name: "Careers",
      href: "https://angel.co/company/webb-4/jobs",
    },
  ],
  legal: [
    { name: "Privacy Policy", href: "https://www.tangle.tools/privacy-policy" },
    {
      name: "Terms of Service",
      href: "https://www.tangle.tools/terms-of-service",
    },
    // { name: "Security", href: "" },
  ],
};

export function FooterContent() {
  // State for subscription success
  const [success, setSuccess] = useState(false);

  return (
    <div className="w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="w-full py-8 mx-auto">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-1 gap-8 xl:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:gap-8">
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Resources</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.general.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Documentation</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.source.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Ecosystem</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.ecosystem.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Company</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Legal</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Community</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.community.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {!success && (
            <div className="mt-12 xl:!mt-0">
              <FooterHeader>Subscribe to our newsletter</FooterHeader>
              <p className="mt-4 text-sm text-gray-600 dark:text-[#888888]">
                Subscribe to the Webb newsletter and stay updated on new
                releases and features, guides, and research.
              </p>

              <SubmitForm onSuccess={() => setSuccess(true)} />
            </div>
          )}
          {success && (
            <div className="mt-12 xl:!mt-0">
              <FooterHeader>Thanks for Subscribing!</FooterHeader>
              <p className="mt-4 text-sm text-gray-600 dark:text-[#888888]">
                Thanks for signing up! Keep an eye on your inbox for updates
                from the Webb community.
              </p>
            </div>
          )}
        </div>

        <div className="pt-8 mt-8 sm:flex sm:items-center sm:justify-between">
          <div>
            <a
              href="https://tangle.tools"
              target="_blank"
              rel="noreferrer"
              title="Webb homepage"
            >
              <svg
                width="114"
                height="28"
                className="block dark:hidden"
                viewBox="0 0 114 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2775_22293)">
                  <path
                    d="M32 21.9598C32.0014 20.3605 31.2756 18.8261 29.9818 17.6934C28.6881 16.5606 26.9321 15.9221 25.0994 15.918L17.4484 15.918C17.4003 15.2958 17.3699 14.6596 17.3699 14C17.3699 13.3404 17.3396 12.7073 17.2969 12.082L25.0994 12.082C26.9162 12.0566 28.6488 11.4089 29.9233 10.2788C31.1978 9.14863 31.9121 7.62659 31.9121 6.041C31.9121 4.45541 31.1978 2.93337 29.9233 1.80323C28.6488 0.67309 26.9162 0.0254409 25.0994 -3.01633e-07L6.81321 -1.10095e-06C4.9964 0.02544 3.26386 0.673089 1.98936 1.80323C0.714863 2.93337 0.000568195 4.45541 0.000568126 6.041C0.000568057 7.62659 0.714862 9.14863 1.98936 10.2788C3.26386 11.4089 4.9964 12.0566 6.81321 12.082L14 12.25C14.5 12.25 14.5427 13.3404 14.5427 14C14.5427 14.6596 14.573 15.2927 14.6158 15.918L6.81321 15.918C4.9964 15.9434 3.26386 16.5911 1.98936 17.7212C0.714862 18.8514 0.000567499 20.3734 0.00056743 21.959C0.000567361 23.5446 0.714862 25.0666 1.98936 26.1968C3.26386 27.3269 4.9964 27.9746 6.81321 28L25.0994 28C26.9318 27.9959 28.6875 27.3576 29.9812 26.2252C31.2749 25.0928 32.0009 23.5588 32 21.9598ZM29.1727 6.04022C29.1732 6.98405 28.7446 7.8895 27.981 8.5579C27.2173 9.22631 26.181 9.60308 25.0994 9.60556L16.9974 9.60555C16.7039 7.83811 16.1447 6.11213 15.3342 4.47222C14.9768 3.7617 14.5193 3.09283 13.9723 2.48111L25.0994 2.48111C26.1798 2.48358 27.215 2.8595 27.9785 3.52656C28.7419 4.19362 29.1713 5.09747 29.1727 6.04022ZM6.81321 9.60555C5.72959 9.60555 4.69036 9.22992 3.92412 8.56129C3.15789 7.89266 2.72742 6.98581 2.72742 6.04022C2.72742 5.09464 3.15789 4.18778 3.92412 3.51915C4.69036 2.85052 5.7296 2.47489 6.81321 2.47489L8.64754 2.47489C10.2679 2.47489 11.8028 3.59489 12.7583 5.47244C13.4124 6.7954 13.8776 8.18352 14.1434 9.60555L6.81321 9.60555ZM2.7399 21.9598C2.73943 21.0159 3.16802 20.1105 3.93166 19.4421C4.6953 18.7737 5.73161 18.3969 6.81321 18.3944L14.9153 18.3944C15.2088 20.1619 15.768 21.8879 16.5785 23.5278C16.9358 24.2383 17.3933 24.9072 17.9404 25.5189L6.81321 25.5189C5.73285 25.5164 4.69762 25.1405 3.93418 24.4734C3.17074 23.8064 2.74131 22.9025 2.7399 21.9598ZM19.1651 22.5276C18.511 21.2046 18.0458 19.8165 17.78 18.3944L25.0994 18.3944C26.1831 18.3944 27.2223 18.7701 27.9885 19.4387C28.7548 20.1073 29.1852 21.0142 29.1852 21.9598C29.1852 22.9054 28.7548 23.8122 27.9885 24.4809C27.2223 25.1495 26.1831 25.5251 25.0994 25.5251L23.2651 25.5251C21.6518 25.5251 20.117 24.4051 19.1651 22.5276Z"
                    fill="url(#paint0_linear_2775_22293)"
                  />
                  <path
                    opacity="0.8"
                    d="M32 6.04022C32.0014 7.63948 31.2756 9.17389 29.9818 10.3066C28.688 11.4394 26.9321 12.0779 25.0993 12.082L17.4481 12.082C17.4 12.7042 17.3697 13.3404 17.3697 14C17.3697 14.6596 17.3394 15.2927 17.2966 15.918L25.0993 15.918C26.9162 15.9434 28.6487 16.5911 29.9232 17.7212C31.1978 18.8514 31.9121 20.3734 31.9121 21.959C31.9121 23.5446 31.1978 25.0666 29.9232 26.1968C28.6487 27.3269 26.9162 27.9746 25.0993 28L6.81277 28C4.99592 27.9746 3.26335 27.3269 1.98883 26.1968C0.714308 25.0666 5.31303e-08 23.5446 7.20382e-08 21.959C9.09462e-08 20.3734 0.714308 18.8514 1.98883 17.7212C3.26335 16.5911 4.99592 15.9434 6.81277 15.918L13.9997 15.75C14.4997 15.75 14.5424 14.6596 14.5424 14C14.5424 13.3404 14.5727 12.7073 14.6155 12.082L6.81277 12.082C4.99592 12.0566 3.26335 11.4089 1.98883 10.2788C0.714308 9.14863 2.42951e-07 7.62659 2.61858e-07 6.041C2.80766e-07 4.45541 0.714308 2.93337 1.98883 1.80323C3.26335 0.673093 4.99592 0.0254399 6.81277 -3.00355e-07L25.0993 -8.22899e-08C26.9317 0.00411981 28.6875 0.642418 29.9812 1.77482C31.2749 2.90723 32.0009 4.44123 32 6.04022ZM29.1727 21.9598C29.1732 21.016 28.7446 20.1105 27.9809 19.4421C27.2173 18.7737 26.1809 18.3969 25.0993 18.3944L16.9971 18.3944C16.7036 20.1619 16.1444 21.8879 15.3339 23.5278C14.9765 24.2383 14.519 24.9072 13.9719 25.5189L25.0993 25.5189C26.1797 25.5164 27.2149 25.1405 27.9784 24.4734C28.7418 23.8064 29.1713 22.9025 29.1727 21.9598ZM6.81277 18.3944C5.72913 18.3944 4.68987 18.7701 3.92363 19.4387C3.15738 20.1073 2.7269 21.0142 2.7269 21.9598C2.7269 22.9054 3.15738 23.8122 3.92363 24.4808C4.68987 25.1495 5.72913 25.5251 6.81277 25.5251L8.64713 25.5251C10.2676 25.5251 11.8024 24.4051 12.7579 22.5276C13.412 21.2046 13.8772 19.8165 14.1431 18.3944L6.81277 18.3944ZM2.73939 6.04022C2.73891 6.98405 3.16751 7.8895 3.93117 8.55791C4.69482 9.22631 5.73115 9.60308 6.81277 9.60555L14.915 9.60555C15.2085 7.8381 15.7677 6.11213 16.5782 4.47222C16.9356 3.7617 17.3931 3.09283 17.9401 2.48111L6.81277 2.48111C5.73238 2.48358 4.69713 2.8595 3.93368 3.52656C3.17023 4.19362 2.7408 5.09747 2.73939 6.04022ZM19.1648 5.47244C18.5107 6.79541 18.0455 8.18352 17.7797 9.60555L25.0993 9.60555C26.183 9.60555 27.2222 9.22992 27.9885 8.56129C28.7547 7.89266 29.1852 6.98581 29.1852 6.04022C29.1852 5.09464 28.7547 4.18778 27.9885 3.51915C27.2222 2.85052 26.183 2.47489 25.0993 2.47489L23.265 2.47489C21.6516 2.47489 20.1168 3.59489 19.1648 5.47244Z"
                    fill="url(#paint1_linear_2775_22293)"
                  />
                </g>
                <path
                  d="M48.685 8.598V22.5H45.283V8.598H48.685ZM40.873 10.11V6.96H53.095V10.11H40.873ZM57.2788 22.773C56.1728 22.773 55.2908 22.472 54.6328 21.87C53.9888 21.254 53.6668 20.435 53.6668 19.413C53.6668 18.447 53.9958 17.677 54.6538 17.103C55.3258 16.529 56.2918 16.193 57.5518 16.095L60.4918 15.864V15.696C60.4918 15.346 60.4218 15.059 60.2818 14.835C60.1418 14.597 59.9388 14.422 59.6728 14.31C59.4208 14.184 59.0988 14.121 58.7068 14.121C58.0208 14.121 57.4958 14.247 57.1318 14.499C56.7818 14.751 56.6068 15.115 56.6068 15.591H53.9188C53.9188 14.793 54.1218 14.1 54.5278 13.512C54.9338 12.924 55.5078 12.469 56.2498 12.147C57.0058 11.825 57.8808 11.664 58.8748 11.664C59.8968 11.664 60.7578 11.846 61.4578 12.21C62.1718 12.574 62.7108 13.106 63.0748 13.806C63.4528 14.506 63.6418 15.36 63.6418 16.368V22.5H60.7858L60.5758 21.114C60.4078 21.59 60.0088 21.989 59.3788 22.311C58.7628 22.619 58.0628 22.773 57.2788 22.773ZM58.4128 20.379C59.0288 20.379 59.5328 20.232 59.9248 19.938C60.3168 19.63 60.5128 19.175 60.5128 18.573V18.006L58.8748 18.153C58.1748 18.209 57.6778 18.328 57.3838 18.51C57.1038 18.678 56.9638 18.93 56.9638 19.266C56.9638 19.644 57.0828 19.924 57.3208 20.106C57.5588 20.288 57.9228 20.379 58.4128 20.379ZM70.4553 22.5H67.2213V12H70.2663L70.4763 13.092C70.7983 12.644 71.2393 12.294 71.7993 12.042C72.3733 11.79 73.0033 11.664 73.6893 11.664C74.9353 11.664 75.9013 12.049 76.5873 12.819C77.2873 13.575 77.6373 14.639 77.6373 16.011V22.5H74.4033V16.788C74.4033 16.13 74.2353 15.605 73.8993 15.213C73.5633 14.807 73.1153 14.604 72.5553 14.604C71.9113 14.604 71.4003 14.8 71.0223 15.192C70.6443 15.57 70.4553 16.088 70.4553 16.746V22.5ZM80.6916 17.061C80.6916 15.997 80.9016 15.059 81.3216 14.247C81.7556 13.435 82.3506 12.798 83.1066 12.336C83.8766 11.874 84.7516 11.643 85.7316 11.643C86.5576 11.643 87.2646 11.811 87.8526 12.147C88.4547 12.483 88.8677 12.924 89.0917 13.47L88.7766 13.68L89.0286 12H92.0737V21.828C92.0737 23.074 91.8427 24.145 91.3807 25.041C90.9187 25.951 90.2606 26.644 89.4066 27.12C88.5527 27.61 87.5237 27.855 86.3197 27.855C84.7096 27.855 83.4006 27.421 82.3926 26.553C81.3846 25.699 80.8036 24.53 80.6496 23.046H83.9256C83.9536 23.634 84.1776 24.089 84.5976 24.411C85.0176 24.747 85.5846 24.915 86.2986 24.915C87.0826 24.915 87.6986 24.698 88.1466 24.264C88.6087 23.83 88.8397 23.242 88.8397 22.5V20.274L89.1967 20.547C88.9727 21.093 88.5387 21.534 87.8946 21.87C87.2506 22.206 86.5086 22.374 85.6686 22.374C84.6886 22.374 83.8206 22.15 83.0646 21.702C82.3226 21.254 81.7416 20.631 81.3216 19.833C80.9016 19.035 80.6916 18.111 80.6916 17.061ZM83.9466 16.977C83.9466 17.481 84.0516 17.929 84.2616 18.321C84.4716 18.699 84.7586 19 85.1226 19.224C85.4866 19.448 85.9066 19.56 86.3827 19.56C86.8726 19.56 87.2996 19.455 87.6636 19.245C88.0416 19.021 88.3286 18.72 88.5246 18.342C88.7347 17.95 88.8397 17.495 88.8397 16.977C88.8397 16.459 88.7347 16.018 88.5246 15.654C88.3286 15.276 88.0416 14.982 87.6636 14.772C87.2996 14.562 86.8656 14.457 86.3616 14.457C85.8856 14.457 85.4657 14.562 85.1016 14.772C84.7376 14.982 84.4506 15.276 84.2406 15.654C84.0446 16.032 83.9466 16.473 83.9466 16.977ZM98.9997 22.5H95.7657V6.666H98.9997V22.5ZM107.558 22.773C106.508 22.773 105.57 22.535 104.744 22.059C103.932 21.583 103.288 20.932 102.812 20.106C102.35 19.266 102.119 18.307 102.119 17.229C102.119 16.137 102.343 15.178 102.791 14.352C103.253 13.512 103.89 12.854 104.702 12.378C105.514 11.902 106.445 11.664 107.495 11.664C108.601 11.664 109.553 11.895 110.351 12.357C111.149 12.805 111.765 13.449 112.199 14.289C112.633 15.115 112.85 16.102 112.85 17.25V18.069L103.82 18.111L103.862 16.116H109.637C109.637 15.556 109.448 15.115 109.07 14.793C108.692 14.457 108.174 14.289 107.516 14.289C106.97 14.289 106.522 14.394 106.172 14.604C105.836 14.814 105.584 15.143 105.416 15.591C105.248 16.025 105.164 16.585 105.164 17.271C105.164 18.251 105.36 18.979 105.752 19.455C106.158 19.917 106.781 20.148 107.621 20.148C108.237 20.148 108.748 20.043 109.154 19.833C109.56 19.623 109.819 19.329 109.931 18.951H112.892C112.71 20.113 112.136 21.044 111.17 21.744C110.204 22.43 109 22.773 107.558 22.773Z"
                  fill="#1F1D2B"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2775_22293"
                    x1="2.38462"
                    y1="1.77333"
                    x2="26.529"
                    y2="29.367"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8E59FF" />
                    <stop offset="1" stopColor="#6888F9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2775_22293"
                    x1="2.3841"
                    y1="26.2267"
                    x2="26.5285"
                    y2="-1.36739"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8E59FF" />
                    <stop offset="1" stopColor="#6888F9" />
                  </linearGradient>
                  <clipPath id="clip0_2775_22293">
                    <rect
                      width="28"
                      height="32"
                      fill="white"
                      transform="translate(32) rotate(90)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="115"
                height="28"
                className="hidden dark:block"
                viewBox="0 0 115 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2775_765)">
                  <path
                    d="M32.5 21.9598C32.5014 20.3605 31.7756 18.8261 30.4818 17.6934C29.1881 16.5606 27.4321 15.9221 25.5994 15.918L17.9484 15.918C17.9003 15.2958 17.8699 14.6596 17.8699 14C17.8699 13.3404 17.8396 12.7073 17.7969 12.082L25.5994 12.082C27.4162 12.0566 29.1488 11.4089 30.4233 10.2788C31.6978 9.14863 32.4121 7.62659 32.4121 6.041C32.4121 4.45541 31.6978 2.93337 30.4233 1.80323C29.1488 0.67309 27.4162 0.0254409 25.5994 -3.01633e-07L7.31321 -1.10095e-06C5.4964 0.02544 3.76386 0.673089 2.48936 1.80323C1.21486 2.93337 0.500568 4.45541 0.500568 6.041C0.500568 7.62659 1.21486 9.14863 2.48936 10.2788C3.76386 11.4089 5.4964 12.0566 7.31321 12.082L14.5 12.25C15 12.25 15.0427 13.3404 15.0427 14C15.0427 14.6596 15.073 15.2927 15.1158 15.918L7.31321 15.918C5.4964 15.9434 3.76386 16.5911 2.48936 17.7212C1.21486 18.8514 0.500567 20.3734 0.500567 21.959C0.500567 23.5446 1.21486 25.0666 2.48936 26.1968C3.76386 27.3269 5.4964 27.9746 7.31321 28L25.5994 28C27.4318 27.9959 29.1875 27.3576 30.4812 26.2252C31.7749 25.0928 32.5009 23.5588 32.5 21.9598ZM29.6727 6.04022C29.6732 6.98405 29.2446 7.8895 28.481 8.5579C27.7173 9.22631 26.681 9.60308 25.5994 9.60556L17.4974 9.60555C17.2039 7.83811 16.6447 6.11213 15.8342 4.47222C15.4768 3.7617 15.0193 3.09283 14.4723 2.48111L25.5994 2.48111C26.6798 2.48358 27.715 2.8595 28.4785 3.52656C29.2419 4.19362 29.6713 5.09747 29.6727 6.04022ZM7.31321 9.60555C6.22959 9.60555 5.19036 9.22992 4.42412 8.56129C3.65789 7.89266 3.22742 6.98581 3.22742 6.04022C3.22742 5.09464 3.65789 4.18778 4.42412 3.51915C5.19036 2.85052 6.2296 2.47489 7.31321 2.47489L9.14754 2.47489C10.7679 2.47489 12.3028 3.59489 13.2583 5.47244C13.9124 6.7954 14.3776 8.18352 14.6434 9.60555L7.31321 9.60555ZM3.2399 21.9598C3.23943 21.0159 3.66802 20.1105 4.43166 19.4421C5.1953 18.7737 6.23161 18.3969 7.31321 18.3944L15.4153 18.3944C15.7088 20.1619 16.268 21.8879 17.0785 23.5278C17.4358 24.2383 17.8933 24.9072 18.4404 25.5189L7.31321 25.5189C6.23285 25.5164 5.19762 25.1405 4.43418 24.4734C3.67074 23.8064 3.24131 22.9025 3.2399 21.9598ZM19.6651 22.5276C19.011 21.2046 18.5458 19.8165 18.28 18.3944L25.5994 18.3944C26.6831 18.3944 27.7223 18.7701 28.4885 19.4387C29.2548 20.1073 29.6852 21.0142 29.6852 21.9598C29.6852 22.9054 29.2548 23.8122 28.4885 24.4809C27.7223 25.1495 26.6831 25.5251 25.5994 25.5251L23.7651 25.5251C22.1518 25.5251 20.617 24.4051 19.6651 22.5276Z"
                    fill="url(#paint0_linear_2775_765)"
                  />
                  <path
                    opacity="0.8"
                    d="M32.5 6.04022C32.5014 7.63948 31.7756 9.17389 30.4818 10.3066C29.188 11.4394 27.4321 12.0779 25.5993 12.082L17.9481 12.082C17.9 12.7042 17.8697 13.3404 17.8697 14C17.8697 14.6596 17.8394 15.2927 17.7966 15.918L25.5993 15.918C27.4162 15.9434 29.1487 16.5911 30.4232 17.7212C31.6978 18.8514 32.4121 20.3734 32.4121 21.959C32.4121 23.5446 31.6978 25.0666 30.4232 26.1968C29.1487 27.3269 27.4162 27.9746 25.5993 28L7.31277 28C5.49592 27.9746 3.76335 27.3269 2.48883 26.1968C1.21431 25.0666 0.5 23.5446 0.5 21.959C0.5 20.3734 1.21431 18.8514 2.48883 17.7212C3.76335 16.5911 5.49592 15.9434 7.31277 15.918L14.4997 15.75C14.9997 15.75 15.0424 14.6596 15.0424 14C15.0424 13.3404 15.0727 12.7073 15.1155 12.082L7.31277 12.082C5.49592 12.0566 3.76335 11.4089 2.48883 10.2788C1.21431 9.14863 0.5 7.62659 0.5 6.041C0.5 4.45541 1.21431 2.93337 2.48883 1.80323C3.76335 0.673093 5.49592 0.0254399 7.31277 -3.00355e-07L25.5993 -8.22899e-08C27.4317 0.00411981 29.1875 0.642418 30.4812 1.77482C31.7749 2.90723 32.5009 4.44123 32.5 6.04022ZM29.6727 21.9598C29.6732 21.016 29.2446 20.1105 28.4809 19.4421C27.7173 18.7737 26.6809 18.3969 25.5993 18.3944L17.4971 18.3944C17.2036 20.1619 16.6444 21.8879 15.8339 23.5278C15.4765 24.2383 15.019 24.9072 14.4719 25.5189L25.5993 25.5189C26.6797 25.5164 27.7149 25.1405 28.4784 24.4734C29.2418 23.8064 29.6713 22.9025 29.6727 21.9598ZM7.31277 18.3944C6.22913 18.3944 5.18987 18.7701 4.42363 19.4387C3.65738 20.1073 3.2269 21.0142 3.2269 21.9598C3.2269 22.9054 3.65738 23.8122 4.42363 24.4808C5.18987 25.1495 6.22913 25.5251 7.31277 25.5251L9.14713 25.5251C10.7676 25.5251 12.3024 24.4051 13.2579 22.5276C13.912 21.2046 14.3772 19.8165 14.6431 18.3944L7.31277 18.3944ZM3.23939 6.04022C3.23891 6.98405 3.66751 7.8895 4.43117 8.55791C5.19482 9.22631 6.23115 9.60308 7.31277 9.60555L15.415 9.60555C15.7085 7.8381 16.2677 6.11213 17.0782 4.47222C17.4356 3.7617 17.8931 3.09283 18.4401 2.48111L7.31277 2.48111C6.23238 2.48358 5.19713 2.8595 4.43368 3.52656C3.67023 4.19362 3.2408 5.09747 3.23939 6.04022ZM19.6648 5.47244C19.0107 6.79541 18.5455 8.18352 18.2797 9.60555L25.5993 9.60555C26.683 9.60555 27.7222 9.22992 28.4885 8.56129C29.2547 7.89266 29.6852 6.98581 29.6852 6.04022C29.6852 5.09464 29.2547 4.18778 28.4885 3.51915C27.7222 2.85052 26.683 2.47489 25.5993 2.47489L23.765 2.47489C22.1516 2.47489 20.6168 3.59489 19.6648 5.47244Z"
                    fill="url(#paint1_linear_2775_765)"
                  />
                </g>
                <path
                  d="M49.185 8.598V22.5H45.783V8.598H49.185ZM41.373 10.11V6.96H53.595V10.11H41.373ZM57.7788 22.773C56.6728 22.773 55.7908 22.472 55.1328 21.87C54.4888 21.254 54.1668 20.435 54.1668 19.413C54.1668 18.447 54.4958 17.677 55.1538 17.103C55.8258 16.529 56.7918 16.193 58.0518 16.095L60.9918 15.864V15.696C60.9918 15.346 60.9218 15.059 60.7818 14.835C60.6418 14.597 60.4388 14.422 60.1728 14.31C59.9208 14.184 59.5988 14.121 59.2068 14.121C58.5208 14.121 57.9958 14.247 57.6318 14.499C57.2818 14.751 57.1068 15.115 57.1068 15.591H54.4188C54.4188 14.793 54.6218 14.1 55.0278 13.512C55.4338 12.924 56.0078 12.469 56.7498 12.147C57.5058 11.825 58.3808 11.664 59.3748 11.664C60.3968 11.664 61.2578 11.846 61.9578 12.21C62.6718 12.574 63.2108 13.106 63.5748 13.806C63.9528 14.506 64.1418 15.36 64.1418 16.368V22.5H61.2858L61.0758 21.114C60.9078 21.59 60.5088 21.989 59.8788 22.311C59.2628 22.619 58.5628 22.773 57.7788 22.773ZM58.9128 20.379C59.5288 20.379 60.0328 20.232 60.4248 19.938C60.8168 19.63 61.0128 19.175 61.0128 18.573V18.006L59.3748 18.153C58.6748 18.209 58.1778 18.328 57.8838 18.51C57.6038 18.678 57.4638 18.93 57.4638 19.266C57.4638 19.644 57.5828 19.924 57.8208 20.106C58.0588 20.288 58.4228 20.379 58.9128 20.379ZM70.9553 22.5H67.7213V12H70.7663L70.9763 13.092C71.2983 12.644 71.7393 12.294 72.2993 12.042C72.8733 11.79 73.5033 11.664 74.1893 11.664C75.4353 11.664 76.4013 12.049 77.0873 12.819C77.7873 13.575 78.1373 14.639 78.1373 16.011V22.5H74.9033V16.788C74.9033 16.13 74.7353 15.605 74.3993 15.213C74.0633 14.807 73.6153 14.604 73.0553 14.604C72.4113 14.604 71.9003 14.8 71.5223 15.192C71.1443 15.57 70.9553 16.088 70.9553 16.746V22.5ZM81.1916 17.061C81.1916 15.997 81.4016 15.059 81.8216 14.247C82.2556 13.435 82.8506 12.798 83.6066 12.336C84.3766 11.874 85.2516 11.643 86.2316 11.643C87.0576 11.643 87.7646 11.811 88.3526 12.147C88.9547 12.483 89.3677 12.924 89.5917 13.47L89.2766 13.68L89.5286 12H92.5737V21.828C92.5737 23.074 92.3427 24.145 91.8807 25.041C91.4187 25.951 90.7606 26.644 89.9066 27.12C89.0527 27.61 88.0237 27.855 86.8197 27.855C85.2096 27.855 83.9006 27.421 82.8926 26.553C81.8846 25.699 81.3036 24.53 81.1496 23.046H84.4256C84.4536 23.634 84.6776 24.089 85.0976 24.411C85.5176 24.747 86.0846 24.915 86.7986 24.915C87.5826 24.915 88.1986 24.698 88.6466 24.264C89.1087 23.83 89.3397 23.242 89.3397 22.5V20.274L89.6967 20.547C89.4727 21.093 89.0387 21.534 88.3946 21.87C87.7506 22.206 87.0086 22.374 86.1686 22.374C85.1886 22.374 84.3206 22.15 83.5646 21.702C82.8226 21.254 82.2416 20.631 81.8216 19.833C81.4016 19.035 81.1916 18.111 81.1916 17.061ZM84.4466 16.977C84.4466 17.481 84.5516 17.929 84.7616 18.321C84.9716 18.699 85.2586 19 85.6226 19.224C85.9866 19.448 86.4066 19.56 86.8827 19.56C87.3726 19.56 87.7996 19.455 88.1636 19.245C88.5416 19.021 88.8286 18.72 89.0246 18.342C89.2347 17.95 89.3397 17.495 89.3397 16.977C89.3397 16.459 89.2347 16.018 89.0246 15.654C88.8286 15.276 88.5416 14.982 88.1636 14.772C87.7996 14.562 87.3656 14.457 86.8616 14.457C86.3856 14.457 85.9657 14.562 85.6016 14.772C85.2376 14.982 84.9506 15.276 84.7406 15.654C84.5446 16.032 84.4466 16.473 84.4466 16.977ZM99.4997 22.5H96.2657V6.666H99.4997V22.5ZM108.058 22.773C107.008 22.773 106.07 22.535 105.244 22.059C104.432 21.583 103.788 20.932 103.312 20.106C102.85 19.266 102.619 18.307 102.619 17.229C102.619 16.137 102.843 15.178 103.291 14.352C103.753 13.512 104.39 12.854 105.202 12.378C106.014 11.902 106.945 11.664 107.995 11.664C109.101 11.664 110.053 11.895 110.851 12.357C111.649 12.805 112.265 13.449 112.699 14.289C113.133 15.115 113.35 16.102 113.35 17.25V18.069L104.32 18.111L104.362 16.116H110.137C110.137 15.556 109.948 15.115 109.57 14.793C109.192 14.457 108.674 14.289 108.016 14.289C107.47 14.289 107.022 14.394 106.672 14.604C106.336 14.814 106.084 15.143 105.916 15.591C105.748 16.025 105.664 16.585 105.664 17.271C105.664 18.251 105.86 18.979 106.252 19.455C106.658 19.917 107.281 20.148 108.121 20.148C108.737 20.148 109.248 20.043 109.654 19.833C110.06 19.623 110.319 19.329 110.431 18.951H113.392C113.21 20.113 112.636 21.044 111.67 21.744C110.704 22.43 109.5 22.773 108.058 22.773Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2775_765"
                    x1="2.88462"
                    y1="1.77333"
                    x2="27.029"
                    y2="29.367"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8E59FF" />
                    <stop offset="1" stopColor="#6888F9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2775_765"
                    x1="2.8841"
                    y1="26.2267"
                    x2="27.0285"
                    y2="-1.36739"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8E59FF" />
                    <stop offset="1" stopColor="#6888F9" />
                  </linearGradient>
                  <clipPath id="clip0_2775_765">
                    <rect
                      width="28"
                      height="32"
                      fill="white"
                      transform="translate(32.5) rotate(90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <p className="mt-4 text-xs text-gray-500 dark:text-[#888888]">
              &copy; {new Date().getFullYear()} Tangle Foundation 2024 All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const SubmitForm: FC<{ onSuccess: (isSuccess: boolean) => void }> = ({
  onSuccess,
}) => {
  const [email, setEmail] = useState("");
  // State for error handling
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <form
        className="mt-4 sm:flex sm:max-w-md"
        onSubmit={(e) => {
          fetch("/api/subscribers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }).then((res) => {
            if (res.ok) {
              setError(null);
              onSuccess(true);
              return res.json();
            } else {
              // error handling
              res.json();
              setError("Something went wrong: " + res.statusText);
              return;
            }
          });
          e.preventDefault();
        }}
      >
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-[#666666] dark:border-[#888888] w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border rounded-md appearance-none dark:text-white sm:text-sm dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:border-white focus:placeholder-gray-400"
          placeholder="you@example.com"
        />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md dark:bg-white dark:text-black sm:text-sm betterhover:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white dark:betterhover:hover:bg-gray-300"
          >
            Subscribe
          </button>
        </div>
      </form>
      {error && (
        <span className="flex mt-4 text-red dark:red">
          <p className="text-red dark:red">{error}</p>
        </span>
      )}
    </>
  );
};

export function Footer({ menu }: { menu?: boolean }): ReactElement {
  return (
    <footer className="bg-[#FAFAFA] pb-[env(safe-area-inset-bottom)] relative dark:bg-[#1f1d2b]">
      <div className="absolute top-0 h-12 w-full -translate-y-full bg-gradient-to-t from-[#FAFAFA] to-transparent dark:from-black" />
      <div
        className={cn(
          "mx-auto max-w-[90rem] py-2 px-4 flex gap-2",
          menu ? "flex" : "hidden"
        )}
      >
        <ThemeSwitch />
      </div>
      <hr className="dark:border-neutral-800" />
      <div
        className={cn(
          "mx-auto max-w-[90rem] py-12 flex justify-center md:justify-center text-black dark:text-white",
          "pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
        )}
      >
        <FooterContent />
      </div>
    </footer>
  );
}
