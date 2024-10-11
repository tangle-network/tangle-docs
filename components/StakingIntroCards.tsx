import React from "react";
import { GrNodes } from "react-icons/gr";
import { BetweenVerticalEnd } from "lucide-react";
import Link from "next/link";

const StakingIntroCards = () => {
  const cards = [
    {
      icon: <BetweenVerticalEnd className="text-blue-500" size={24} />,
      title: "Validator Staking",
      description:
        "Learn about Tangle's Nominated Proof of Stake (NPoS) system for validator selection and rewards.",
      link: "../restake/staking-intro",
    },
    {
      icon: <BetweenVerticalEnd className="text-blue-500" size={24} />,
      title: "Liquid Staking",
      description:
        "Explore Tangle's liquid staking protocols for validator-specific staking operations and liquid staked tokens (LSTs).",
      link: "../restake/lst-concepts",
    },
    {
      icon: <GrNodes className="text-blue-500" size={24} />,
      title: "Restaking",
      description:
        "Discover Tangle's permissionless and asset-configurable restaking system for Blueprints and shared security.",
      link: "../restake/restake-introduction",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
      {cards.map((card, index) => (
        <Link href={card.link} key={index} className="block">
          <div className="border border-black p-4 h-full flex flex-col transition-colors duration-300 hover:bg-purple-100">
            <div className="flex-shrink-0 mb-2">{card.icon}</div>
            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
            <p className="text-sm flex-grow">{card.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StakingIntroCards;
