import React, { useState } from "react";
import {
  blake2AsU8a,
  encodeAddress,
  decodeAddress,
} from "@polkadot/util-crypto";
import { hexToU8a, stringToU8a, u8aConcat, u8aToHex } from "@polkadot/util";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { BlockCopyButton } from "./ui/block-copy-button";
import Link from "next/link";

const AddressConverter = () => {
  const [evmAddress, setEvmAddress] = useState("");
  const [substrateAddress, setSubstrateAddress] = useState("");
  const [substrateAddressToConvert, setSubstrateAddressToConvert] =
    useState("");
  const [evmAddressResult, setEvmAddressResult] = useState("");

  const convertEvmToSubstrate = () => {
    if (!evmAddress) {
      setSubstrateAddress("Please enter an EVM address.");
      return;
    }
    const addr = hexToU8a(evmAddress);
    const data = stringToU8a("evm:");
    const res = blake2AsU8a(u8aConcat(data, addr));
    const output = encodeAddress(res, 42);
    setSubstrateAddress(output);
  };

  return (
    <div className="mt-8">
      <Card>
        <CardHeader>
          <CardTitle>EVM-to-Substrate Address Converter</CardTitle>
          <CardDescription>
            Enter an EVM Address to convert to the SS58 Substrate format. To
            convert an SS58 address to a public key, you can use{" "}
            <Link
              className="underline font-semibold text-linkBlue"
              href="https://ss58.org/"
            >
              SS58.org
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <label
                htmlFor="evmAddress"
                className="block mb-1 text-gray-800 font-semibold"
              >
                EVM Address:
              </label>
              <input
                type="text"
                id="evmAddress"
                className="bg-gray-200 text-gray-800 font-mono px-4 py-2 rounded w-full"
                value={evmAddress}
                onChange={(e) => setEvmAddress(e.target.value)}
                placeholder="Enter EVM address"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="substrateAddress"
                className="block mb-1 font-semibold"
              >
                Substrate Address:
              </label>
              <div
                id="substrateAddress"
                className="bg-gray-200 px-4 py-2 font-mono rounded w-full text-gray-800"
              >
                {substrateAddress || "Waiting..."}
              </div>
            </div>
            <div className="ml-0 self-end flex">
              <BlockCopyButton
                name="Substrate Address"
                code={substrateAddress}
                className="h-10 w-10 rounded [&_svg]:size-4"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={convertEvmToSubstrate}>
            Convert
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddressConverter;
