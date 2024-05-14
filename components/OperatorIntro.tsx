import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrValidate } from "react-icons/gr";
import { GrNodes } from "react-icons/gr";
import CallToActionCard from "./CallToActionCard";

const OperatorIntroCards = () => {
  const cards = [
    {
      icon: <VscWorkspaceTrusted />,
      title: <span className="text-xl font-bold ">Service Operators</span>,
      description: "Run Blueprint instances and earn job revenue.",
      link: "../service-operator/service-provider/",
    },
    {
      icon: <GrValidate />,
      title: <span className="text-xl font-bold ">Validators</span>,
      description:
        "Secure the network by participating in Nominated Proof-of-Stake (nPoS).",
      link: "../validator/introduction",
    },
    {
      icon: <GrNodes />,
      title: <span className="text-xl font-bold ">Run a Node</span>,
      description:
        "Get started with Tangle by running a node, a great way to get familiar with operating.",
      link: "../node-basics/quickstart",
    },
  ];

  return (
    <div className="container">
      <div className="relative flex my-20 p-5 md:p-0">
        <div className="block items-center gap-5 ">
          {cards.map((card, index) => (
            <CallToActionCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OperatorIntroCards;
