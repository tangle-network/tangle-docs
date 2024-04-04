import React, { useState } from "react";
import Link from "next/link";
import styles from "./NetworkConfig.module.css";

const NetworkCard = ({ mainnet, testnet }) => {
  const [activeTab, setActiveTab] = useState("mainnet");

  const renderTabContent = () => {
    if (activeTab === "mainnet") {
      return (
        <div className={styles.networkTabContent}>
          <div className={styles.networkType}>{mainnet.cardTitle}</div>
          <div className={styles.titleContainer}>
            <h2 className={styles.networkTitle}>{mainnet.network}</h2>
          </div>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Network Type</th>
                <td className={styles.tableCell}>{mainnet.type}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Native Asset Symbol</th>
                <td className={styles.tableCell}>{mainnet.symbol}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Native Asset Decimals</th>
                <td className={styles.tableCell}>{mainnet.decimals}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Chain ID</th>
                <td className={styles.tableCell}>{mainnet.chainId}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Public RPC URL</th>
                <td className={styles.tableCell}>
                  <Link href={mainnet.rpcUrl}>{mainnet.rpcUrl}</Link>
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Public WSS URL</th>
                <td className={styles.tableCell}>
                  <Link href={mainnet.wssUrl}>{mainnet.wssUrl}</Link>
                </td>
              </tr>
              {mainnet.explorerUrls.map((explorer, index) => (
                <tr key={index}>
                  <th className={styles.tableHeader}>
                    {index === 0 ? "Interfaces & Explorers" : ""}
                  </th>
                  <td className={styles.tableCell}>
                    <Link href={explorer.url}>{explorer.name}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className={styles.networkTabContent}>
          <div className={styles.networkType}>{testnet.cardTitle}</div>
          <div className={styles.titleContainer}>
            <h2 className={styles.networkTitle}>{testnet.network}</h2>
          </div>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Network Type</th>
                <td className={styles.tableCell}>{testnet.type}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Native Asset Symbol</th>
                <td className={styles.tableCell}>{testnet.symbol}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Native Asset Decimals</th>
                <td className={styles.tableCell}>{testnet.decimals}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Chain ID</th>
                <td className={styles.tableCell}>{testnet.chainId}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Public RPC URL</th>
                <td className={styles.tableCell}>
                  <Link href={testnet.rpcUrl}>{testnet.rpcUrl}</Link>
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Public WSS URL</th>
                <td className={styles.tableCell}>
                  <Link href={testnet.wssUrl}>{testnet.wssUrl}</Link>
                </td>
              </tr>
              {testnet.explorerUrls.map((explorer, index) => (
                <tr key={index}>
                  <th className={styles.tableHeader}>
                    {index === 0 ? "Interfaces & Explorers" : ""}
                  </th>
                  <td className={styles.tableCell}>
                    <Link href={explorer.url}>{explorer.name}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  return (
    <div className={styles.networkCard}>
      <div className={styles.tabsContainer}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "mainnet" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("mainnet")}
        >
          Mainnet
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "testnet" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
};

const NetworkInfo = () => {
  // Define the network details here or fetch from an API
  const networks = {
    mainnet: {
      cardTitle: "Network Information",
      network: "Tangle Network",
      type: "Mainnet",
      symbol: "TNT",
      decimals: 18,
      chainId: "5845",
      rpcUrl: "https://rpc.tangle.tools",
      wssUrl: "wss://rpc.tangle.tools",
      explorerUrls: [
        { name: "BlockScout", url: "https://explorer.tangle.tools" },
        {
          name: "PolkadotJS",
          url: "https://polkadot.js.org/apps/?rpc=wss://rpc.tangle.tools#/explorer",
        },
      ],
      fundingInfo: {
        url: "https://faucet.tangle.tools/",
      },
    },
    testnet: {
      cardTitle: "Network Information",
      network: "Tangle Network",
      type: "Testnet",
      symbol: "tTNT",
      decimals: 18,
      chainId: "3799",
      rpcUrl: "https://testnet-rpc.tangle.tools",
      wssUrl: "wss://testnet-rpc.tangle.tools",
      explorerUrls: [
        { name: "BlockScout", url: "https://testnet-explorer.tangle.tools" },
        {
          name: "PolkadotJS",
          url: "https://polkadot.js.org/apps/?rpc=wss://testnet-rpc.tangle.tools#/explorer",
        },
      ],
      fundingInfo: {
        url: "https://faucet.tangle.tools/",
      },
    },
  };

  return (
    <div className={styles.networkInfo}>
      <NetworkCard mainnet={networks.mainnet} testnet={networks.testnet} />
    </div>
  );
};

export default NetworkInfo;
