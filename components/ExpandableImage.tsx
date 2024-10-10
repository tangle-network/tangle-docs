import Image from "next/image";
import { useState, useEffect } from "react";

const ExpandableImage = ({ src, alt }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Ensure the src starts with a leading slash or is an absolute URL
  const imageSrc =
    src.startsWith("http") || src.startsWith("/") ? src : `/${src}`;

  const handleImageClick = () => {
    setIsExpanded(true);
  };

  const handleModalClick = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isExpanded]);

  return (
    <>
      <div className="cursor-pointer hover:opacity-80 transition-opacity my-4">
        <img
          src={imageSrc}
          alt={alt}
          width={800}
          height={600}
          onClick={handleImageClick}
          style={{ maxWidth: "100%", height: "auto" }}
          className="mx-auto"
        />
      </div>
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleModalClick}
        >
          <img
            src={imageSrc}
            alt={alt}
            style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
};

export default ExpandableImage;
