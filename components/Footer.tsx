import React from "react";
import DiscordBanner from "./DiscordBanner";
import { ThemeSwitch } from "nextra-theme-docs";

const Footer = () => {
  return (
    <footer className="w-full pt-2">
      <DiscordBanner />
      <div className="w-full p-4 h-6 bg-tangleLogoTextColor border-t border-gray-700 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Tangle Foundation
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm gap-5 font-medium text-gray-400 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="mailto:hello@tangle.tools" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <ThemeSwitch className="border-gray-700 border mix-blend-plus-lighter" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
