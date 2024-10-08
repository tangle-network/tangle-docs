import React from "react";
import { GrNodes } from "react-icons/gr";
import CallToActionCard from "./CallToActionCard";
import { BetweenVerticalEnd } from "lucide-react";

const BlueprintIntroCards = () => {
  const cards = [
    {
      icon: <BetweenVerticalEnd />,
      title: (
        <span className="text-xl font-bold ">Tangle's Gadget SDK Repo</span>
      ),
      description:
        "Check out our Gadget SDK repository to get started building your own gadgets.",
      link: "https://github.com/webb-tools/gadget",
    },
    {
      icon: <GrNodes />,
      title: (
        <span className="text-xl font-bold ">Build a Tangle Blueprint</span>
      ),
      description:
        "Get started building on Tangle with Blueprints, resuable AVS templates. Build innovative applications using Tangle's advanced macro system",
      link: "../developers/tangle-blueprint",
    },
    {
      icon: <GrNodes />,
      title: (
        <span className="text-xl font-bold ">Build an Eigenlayer AVS</span>
      ),
      description:
        "Build an Eigenlayer AVS with Tangle's Blueprint SDK and hook into a variety of EVM compatible utilities for task automation, slashing, and more.",
      link: "../developers/eigenlayer-avs",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-center items-stretch gap-5 my-20 p-5 md:p-0">
      {cards.map((card, index) => (
        <div key={index} className="flex-1">
          <CallToActionCard
            icon={card.icon}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        </div>
      ))}
    </div>
  );
};

export default BlueprintIntroCards;
