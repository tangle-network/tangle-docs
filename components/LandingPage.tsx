import Image from "next/image";
import DocsLandingGraphic from '../public/images/DocsLandingGraphic.png';

const LandingPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      {/* Header and Image Row */}
      <div className="flex flex-col items-center z-10 font-bold p-5 lg:p-0 lg:flex-row lg:items-end justify-between">
        <div className="flex flex-col items-start mb-8 gap-1 space-y-4 lg:space-y-6">
          <p className="text-sm font-bol md:absolute text-gray-400 pl-1 lg:text-sm">
            TANGLE DOCUMENTATION
          </p>
          <h1 className="text-3xl font-normal text-gray-900 dark:text-white md:text-3xl lg:text-5xl">
            Your Guide to the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700">
              Modular Restaking Infrastructure
            </span>
          </h1>
          <p className="text-lg font-bold md:font-normal text-gray-700 lg:text-lg dark:text-gray-400">
            Create and market modular services that securely deploy across any
            blockchain ecosystem.
          </p>
          <button
            type="button"
            className="text-white flex justify-center content-center !bg-gradient-to-br ml-1 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium relative flex-wrap rounded-lg text-md px-5 py-2.5 text-center"
          >
            Claim Airdrop
          </button>
        </div>

        <div className="hidden lg:flex  z-0 ">
          <div className="flex flex-col content-end z-0 h-full">
            <Image
              src={DocsLandingGraphic}
              alt="A visualization of the Tangle Network"
              width={1000}
              height={600}
              className="md:content-end max-w-screen-md z-0 "
            />
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className=" opacity-0 sm:opacity-100 border-b border-gray-300 mb-8"></div>

      {/* Call-to-Action Cards Row */}
      <div className="flex flex-col sm:flex-row items-center gap-5 mb-8">
        <a
          href="#"
          className="block max-w-sm min-h-44 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 md:text-lg lg:text-xl font-semibold tracking-tight text-violet-700 dark:text-white">
            Get started building Blueprints
          </h5>
          <p className="text-sm font-normal text-gray-900 dark:text-gray-400">
            Blueprints are the template object implemented as software in the
            Tangle codebase.
          </p>
        </a>
        <a
          href="#"
          className="block max-w-sm min-h-44 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 md:text-lg lg:text-xl font-semibold tracking-tight text-violet-700 dark:text-white">
            Restake TNT or other assets.
          </h5>
          <p className="text-sm font-normal text-gray-900 dark:text-gray-400">
            Restaking secures the actively validated services on Tangle, and
            earns rewards.
          </p>
        </a>
        <a
          href="#"
          className="block max-w-sm min-h-44 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 md:text-lg lg:text-xl font-semibold tracking-tight text-violet-700 dark:text-white">
            Run a Node, Validator, or Service Operator
          </h5>
          <p className="text-sm font-normal text-gray-900 dark:text-gray-400">
            Noderunners can earn staking rewards, secure the network, and
            operators earn income from services.
          </p>
        </a>
        <a
          href="#"
          className="block max-w-sm min-h-44 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 md:text-lg lg:text-xl font-semibold tracking-tight text-violet-700 dark:text-white">
            Learn more about the network.
          </h5>
          <p className="text-sm font-normal text-gray-900 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
