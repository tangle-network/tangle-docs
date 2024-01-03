import React from "react";
import Link from "next/link";
import {
  ChartBarIcon,
  BookOpenIcon,
  ServerIcon,
  BeakerIcon,
} from "@heroicons/react/outline";
import styles from "./CommonActions.module.css";
import { FaGithub } from "react-icons/fa";

const features = [
  {
    Icon: ServerIcon,
    title: "Node Deployment",
    description: `Want to spin up a full node on the Tangle Network? We've made it easier than ever!`,
    href: "/docs/node/docker-node",
    action: "Deploy a Docker Node",
  },
  {
    Icon: ServerIcon,
    title: "Validators",
    description: `Start your journey on Tangle Network. This guide will walk you through the steps to become a validator, ensuring network security and integrity.`,
    href: "/docs/node/quickstart/",
    action: "Launch a Quick Validator Node",
  },
  {
    Icon: FaGithub,
    title: "Tangle Open Source",
    description: `Multy-party threshold ECDSA (GG20) Substrate node`,
    href: "https://github.com/webb-tools/tangle",
    action: "View the Repo",
  },
  {
    Icon: ServerIcon,
    title: "Accounts",
    description: `Tangle uses Polkadot Apps to manage Accounts.`,
    href: "https://polkadot.js.org/apps/?rpc=wss://rpc.tangle.tools#/explorer",
    action: "Go to Polkadot Apps",
  },
  {
    Icon: BookOpenIcon,
    title: "Staking",
    description: `Through Polkadot Apps you can create `,
    href: "https://polkadot.js.org/apps/?rpc=wss://rpc.tangle.tools#/democracy",
    action: "Manage Staking",
  },
  {
    Icon: BookOpenIcon,
    title: "Governance",
    description: `Through governance, you can create proposals for updating cross-chain applications.`,
    href: "https://polkadot.js.org/apps/?rpc=wss://rpc.tangle.tools#/democracy",
    action: "Interact with Governance",
  },
  {
    Icon: BeakerIcon,
    title: "Faucet",
    description: `Our easy-to-use testnet faucet allows you to claim test tokens with just a few clicks. Start experimenting with Hubble Bridge today.`,
    href: "https://faucet.tangle.tools",
    action: "Go to Faucet",
  },
  {
    Icon: ChartBarIcon,
    title: "DKG Stats dApp",
    description: `The DKG Stats dApp provides insights into the DKG protocol running on the Tangle Network.`,
    href: "https://stats.tangle.tools",
    action: "View DKG Functionality",
  },
];

const Card = ({ Icon, title, description, href, action }) => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <h3 className={styles.title}>{title}</h3>
    </div>
    {/*}   <p className={styles.description}>{description}</p>
    {/* Wrap the entire footer content with Link */}
    <Link href={href} passHref className={styles.cardFooter}>
      <div className={styles.footerContent}>
        <Icon className={styles.icon} aria-hidden="true" />
        {action}
      </div>
      {/* Arrow */}
      <span className={styles.cardArrow}>→</span>
    </Link>
  </div>
);

// CommonActions component that renders a grid of Cards
export const CommonActions = () => {
  return (
    <div className={styles.actionCardGrid}>
      {features.map((feature, index) => (
        <Card key={index} {...feature} />
      ))}
    </div>
  );
};

export default CommonActions;
