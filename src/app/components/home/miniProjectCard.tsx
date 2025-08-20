import React from "react";
import Image from "next/image";

interface MiniProjectCardProps {
  image: string;
  alt?: string;
  link: string;
  borderColor?: string;
  bgColor?: string;
  ribbon?: React.ReactNode;
}

const MiniProjectCard: React.FC<MiniProjectCardProps> = ({
  image,
  alt = "",
  link,
  borderColor = "#E7E7E7",
  bgColor = "white",
}) => {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className="group relative block overflow-hidden"
      style={{
        border: `2px solid ${borderColor}`,
        background: bgColor,
      }}
      tabIndex={0}
      aria-label={alt}
    >
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={alt}
          className="object-cover w-full h-full duration-500"
          draggable={false}
          width={2560}
          height={1400}
        />

        <div
          className="absolute inset-0 bg-black hover:opacity-90 flex items-center justify-center 
                      duration-500 opacity-0"
        >
          <div
            className="text-white text-center text-2xl font-bold px-4 
                        duration-500"
          >
            {alt}
          </div>
        </div>
      </div>
    </a>
  );
};

export default MiniProjectCard;