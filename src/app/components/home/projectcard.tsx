import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  details: string;
  tags: string[];
  image: string;
  link: string;
  borderColor?: string;
  bgColor?: string;
  titleColor?: string;
  reverse?: boolean;
  ribbon?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  details,
  tags,
  image,
  link,
  borderColor = "#E7E7E7",
  bgColor = "white",
  titleColor = "#252525",
  reverse = false,
  ribbon,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center overflow-hidden relative mb-12 round"
      style={{
        border: `4px solid ${borderColor}`,
        background: bgColor,
      }}
    >
      {ribbon}
      <div
        className={`flex flex-col lg:flex-row  ${
          reverse ? "lg:flex-row-reverse " : ""
        } items-center justify-center w-full h-full text-foreground`}
      >
        <div className="flex justify-center items-center">
          <Image
            src={image}
            alt={title}
            title={title}
            className="max-h-[400px] 2xl:max-h-[500px] w-full object-fill rounded-lg"
            draggable={false}
            width={2560}
            height={1400}
          />
        </div>
        <div className="flex flex-col justify-center items-start text-left py-8 px-4 max-w-lg">
          <h2
            className="text-[2.5rem] mb-2 font-extrabold"
            style={{ color: titleColor }}
          >
            {title}
          </h2>
          <h4 className="mb-2 font-extrabold text-[1.5rem]">{description}</h4>
          <h5 className="mb-5 text-[1.25rem]">{details}</h5>
          <div className="mb-2 flex flex-wrap gap-3 text-[1rem]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center min-h-[2.5rem] px-3 py-2 bg-[#dfdfdf] text-[#3C3C3C] text-[1rem] font-semibold rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Link href={link} className="underline font-extrabold">
              Read More ⇀
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
