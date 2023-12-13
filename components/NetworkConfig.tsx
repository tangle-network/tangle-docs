import React, { useState } from "react";
import Link from "next/link";
import styles from "./NetworkConfig.module.css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

const NetworkCard = ({
  cardTitle,
  network,
  type,
  symbol,
  decimals,
  chainId,
  rpcUrl,
  wssUrl,
  explorerUrls,
  fundingInfo,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.networkCard}>
      <div className={styles.networkType}>
        {type} {cardTitle}
      </div>
      <div className={styles.titleContainer} onClick={toggleCollapse}>
        <h2 className={styles.networkTitle}>{network}</h2>
        {isCollapsed ? (
          <ChevronDownIcon className={styles.chevronIcon} />
        ) : (
          <ChevronUpIcon className={styles.chevronIcon} />
        )}
      </div>
      {!isCollapsed && (
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tableRow}>
              <th className={styles.tableHeader}>Network Type</th>
              <td className={styles.tableCell}>{type}</td>
            </tr>
            <tr className={styles.tableRow}>
              <th className={styles.tableHeader}>Native Asset Symbol</th>
              <td className={styles.tableCell}>{symbol}</td>
            </tr>
            <tr className={styles.tableRow}>
              <th className={styles.tableHeader}>Native Asset Decimals</th>
              <td className={styles.tableCell}>{decimals}</td>
            </tr>
            <tr className={styles.tableRow}>
              <th className={styles.tableHeader}>Chain ID</th>
              <td className={styles.tableCell}>{chainId}</td>
            </tr>
            <tr className={styles.tableRow}>
              <th className={styles.tableHeader}>Public RPC URL</th>
              <td className={styles.tableCell}>
                <Link href={rpcUrl}>{rpcUrl}</Link>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <th className={styles.tableHeader}>Public WSS URL</th>
              <td className={styles.tableCell}>
                <Link href={wssUrl}>{wssUrl}</Link>
              </td>
            </tr>
            {explorerUrls.map((explorer, index) => (
              <tr key={index}>
                <th className={styles.tableHeader}>
                  {index === 0 ? "Interfaces & Explorers" : ""}
                </th>
                <td className={styles.tableCell}>
                  <Link href={explorer.url}>{explorer.name}</Link>
                </td>
              </tr>
            ))}
            <tr className={styles.tableRow}>
              <th className={styles.tableHeader}>Faucet</th>
              <td className={styles.tableCell}>
                <p>{fundingInfo.description}</p>
                <Link href={fundingInfo.url}>{fundingInfo.url}</Link>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

const NetworkInfo = () => {
  // Define the network details here or fetch from an API
  const networks = [
    {
      cardTitle: "Network Information",
      network: "Tangle Network",
      type: "Testnet",
      symbol: "tTNT",
      decimals: 18,
      chainId: "4006",
      rpcUrl: "https://rpc.tangle.tools",
      wssUrl: "wss://rpc.tangle.tools",
      explorerUrls: [
        { name: "BlockScout", url: "https://explorer.tangle.tools" },
        {
          name: "PolkadotJS",
          url: "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.tangle.tools#/explorer",
        },
      ],
      fundingInfo: {
        url: "https://faucet.tangle.tools/",
      },
    },
    // Add Tangle Mainnet details here when available
  ];

  return (
    <div className={styles.networkInfo}>
      {networks.map((network, index) => (
        <NetworkCard key={index} {...network} />
      ))}
    </div>
  );
};

export default NetworkInfo;
