import Image from "next/image";

export default function About() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* <p className="text-lg mb-4">
        Hi, I'm Ethan Dith, a passionate Product Designer focused on creating
        inclusive and meaningful experiences that make a difference. With a
        background in UI/UX design and web development, I strive to build
        products that not only look great but also solve real user problems.
      </p> */}
      <div className="flex flex-row items-center">
        <div className="w-1/3">
          <Image
            src="/images/profile3.webp"
            alt="Ethan Dith"
            className="w-3/4 h-full shadow-lg border border-[#DADADA]"
            draggable={false}
            width={500}
            height={500}
          />
        </div>
        <div className="w-2/3">
          <div className="flex flex-col font-medium">
            <h2 className="text-xl">
              <span className="font-bold">Ethan Dith</span> -{" "}
              <span className="italic">
                <span className="text-accent">Product Designer</span> Based In
                Seattle
              </span>
            </h2>
            <p className="mt-4 text-xl">
              What drives me to design is the idea of creating something
              visually pleasing, that help address real-world problems. My love
              for design stems from playing video games. I was always fascinated
              by the ability to create visual experiences that could tell
              stories.{" "}
            </p>
            <p className="mt-8 text-xl">
              When I’m not designing, you can find me playing video games,
              making music, or playing basketball.{" "}
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold"> 🎓 Education</h3>
            <p className="text-xl mt-2">B.A. Interactive Media Design @ <u className="font-bold">University of Washington</u></p>
            <p className="text-xl mt-1">Minor in Business Administration</p>
          </div>
        </div>
        </div>
    </section>
  );
}
