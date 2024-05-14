import React from "react";

const CallToActionCard = ({ icon, title, description, link }) => {
  return (
    <a
      href={link}
      className="max-w-sm min-h-44 p-2 flex items-start hover:bg-gray-100  dark:hover:bg-gray-700"
    >
      <div className="flex items-start">
        <div className="mr-4">
          {React.cloneElement(icon, { className: "size-7 mt-1.5" })}
        </div>
        <div>
          <div className="flex items-center mb-2">
            <h5 className="md:text-lg lg:text-lg text-decoration-line: underline underline-offset-4 font-bold tracking-tight text-linkBlue dark:text-white">
              {title}
            </h5>
          </div>
          <p className="text-md font-normal text-gray-900 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default CallToActionCard;
