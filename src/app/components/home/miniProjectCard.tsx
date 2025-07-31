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
  ribbon,
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
      {ribbon}

      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={alt}
          className="object-cover w-full h-full transition-opacity duration-500"
          draggable={false}
          width={1920}
          height={1080}
        />

        <div
          className="absolute inset-0 bg-black hover:opacity-80 flex items-center justify-center 
                     transition-opacity duration-500 opacity-0"
        >
          <div
            className="text-white text-center text-2xl font-bold px-4 
                        transition-opacity duration-500"
          >
            {alt}
          </div>
        </div>
      </div>
    </a>
  );
};

export default MiniProjectCard;