import React from "react";
import { GrNodes } from "react-icons/gr";
import CallToActionCard from "./CallToActionCard";
import { BetweenVerticalEnd, SquareDashedBottomCode } from "lucide-react";

const OperatorIntroCards = () => {
  const cards = [
    {
      icon: <SquareDashedBottomCode />,
      title: <span className="text-xl font-bold ">Service Operators</span>,
      description: "Run Blueprint instances and earn job revenue.",
      link: "../pages/operators/service-operator/service-provider.mdx",
    },
    {
      icon: <BetweenVerticalEnd />,
      title: <span className="text-xl font-bold ">Validators</span>,
      description:
        "Secure the network by participating in Nominated Proof-of-Stake (nPoS).",
      link: "../pages/operators/validator/introduction.mdx",
    },
    {
      icon: <GrNodes />,
      title: <span className="text-xl font-bold ">Run a Node</span>,
      description:
        "Get started with Tangle by running a node, a great way to get familiar with operating.",
      link: "../pages/operators/node-basics/quickstart.mdx",
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

export default OperatorIntroCards;
