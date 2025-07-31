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
      className="block relative overflow-hidden"
      style={{
        border: `2px solid ${borderColor}`,
        background: bgColor,
      }}
      tabIndex={0}
      aria-label={alt}
    >
      {ribbon}
      <Image
        src={image}
        alt={alt}
        className="object-cover w-full h-full"
        draggable={false}
        width={1920}
        height={1080}
      />
    </a>
  );
};

export default MiniProjectCard;