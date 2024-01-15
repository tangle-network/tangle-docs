import { DetailedFeatureLink } from "./Feature";
import { GitHubIcon } from "./Icons";
import { ChartBarIcon, CodeIcon, BookOpenIcon } from "@heroicons/react/outline";

export const RepoArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: `An MPC-as-a-service blockchain infrastructure for empowering cross-chain and zero-knowledge applications development.`,
          name: "Tangle Network Repo",
        }}
        href="https://github.com/webb-tools/tangle"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: `Documentation for the Tangle Network`,
          name: "Tangle Docs Repo",
        }}
        href="https://github.com/webb-tools/tangle-docs"
      ></DetailedFeatureLink>
    </div>
  );
};

export const StatsdApp = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: ChartBarIcon,
          description: `The Stats dApp provides insights into the DKG protocol running on the Tangle Network.`,
          name: "Tangle DKG Stats dApp",
        }}
        href="https://stats.tangle.tools"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: "Monorepo for Webb dApps",
          name: "webb-dapp",
        }}
        href="https://github.com/webb-tools/webb-dapp"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: CodeIcon,
          description: `The GraphQL Playground provides a way to query the SubQuery API`,
          name: "GraphQL Playground",
        }}
        href="https://standalone-subql.tangle.tools/graphql"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: "SubQuery implementation for DKG and Webb Networks",
          name: "webb-subql",
        }}
        href="https://github.com/webb-tools/webb-subql"
      ></DetailedFeatureLink>
    </div>
  );
};
