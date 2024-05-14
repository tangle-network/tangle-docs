import React from "react";
import Link from "next/link";

const WALLET_DATA = [
  {
    name: "Subwallet",
    supports: "Substrate",
    url: "https://www.subwallet.app/download.html",
  },
  {
    name: "Polkadot.js Extension",
    supports: "Substrate",
    url: "https://polkadot.js.org/",
  },
  {
    name: "Talisman Wallet",
    supports: "Substrate",
    url: "https://www.talisman.xyz/",
  },
  {
    name: "Rainbow Wallet",
    supports: "EVM",
    url: "https://rainbow.me/en-us/download",
  },
  { name: "MetaMask", supports: "EVM", url: "https://metamask.io/" },
  { name: "WalletConnect", supports: "EVM", url: "https://walletconnect.com/" },
];

const WalletTable = () => {
  return (
    <div>
      <h2 className="text-lg mb-4">Wallets</h2>
      <span className="mb-4">
        The Tangle Network is a versatile blockchain that integrates both
        Substrate and Ethereum Virtual Machine (EVM) functionalities, offering a
        wide range of features and compatibility with numerous wallets. This
        document outlines the wallets available for use on the Tangle Network,
        including details for both the Substrate and EVM sides of the network.
      </span>
      <table className="w-full my-10 border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-slate-100">Wallet</th>
            <th className="px-4 py-2 bg-slate-100">Supports</th>
            <th className="px-4 py-2 bg-slate-100">Link</th>
          </tr>
        </thead>
        <tbody>
          {WALLET_DATA.map((wallet, index) => (
            <tr className="border-b" key={index}>
              <td className="px-4 py-2">{wallet.name}</td>
              <td className="px-4 py-2">{wallet.supports}</td>
              <td className="px-4 py-2">
                <Link
                  href={wallet.url}
                  className="underline underline-offset-1 text-linkBlue"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {wallet.url}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="text-lg mb-4">Network Details for Adding to Wallets</h3>
      <strong className="block"> Substrate Wallets:</strong>
      Follow the specific wallet's instructions to add the Tangle Network as a
      custom network. We work to ensure these wallets have the latest
      information and in-app support to connect.
      <span className="block mt-4">
        {" "}
        <strong className="block">EVM Wallets</strong>
        Add the Tangle Network using the ChainID and a RPC server address on
        this page.
      </span>
      <span>
        Please follow the standard process in your wallet to add a new network,
        using the ChainID and the RPC server addresses provided above.
      </span>
    </div>
  );
};

export default WalletTable;
