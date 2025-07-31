import ProjectCard from "@/app/components/home/projectcard";
import Hero from "@/app/components/home/hero";
import MiniProjectCard from "@/app/components/home/miniProjectCard";

export default function Home() {
  return (
    <section className="container mx-auto px-4">
      <Hero />
      {/* Projects */}
      <section id="work" className="mt-72">
        <h1 className="mb-6 text-5xl font-extrabold">Featured Work</h1>

        {/* Studdy Spotter */}
        <ProjectCard
          title="Studdy Spotter"
          description="Helping students find the best study spots in the nation"
          details="Web Design • Personal Project"
          tags={["UI/UX Design", "Web Development"]}
          image="/images/StuddySpotter/homeImage.png"
          link="projects/studdyspotter"
          borderColor="#E7E7E7"
          bgColor="white"
          titleColor="#3F2C59"
          reverse
        />

        {/* Tourify */}
        <ProjectCard
          title="Tourify"
          description="Transforming museums with Augmented Reality"
          details="Mobile Concept • Class Project"
          tags={["UI/UX Design", "User Research", "IOS/Android"]}
          image="/images/Tourify/homeImage.png"
          link="/projects/tourify"
          borderColor="#C8C8C8"
          bgColor="#F2F2F2"
          titleColor="#252525"
        />

        {/* MindfulU */}
        <ProjectCard
          title="MindfulU"
          description="Nurturing your well-being using an in-app experience"
          details="Mobile Concept • Hackathon"
          tags={["UI Design", "IOS/Android"]}
          image="/images/MU/homeImage.png"
          link="/projects/mindfulu"
          borderColor="#DFEAFF"
          bgColor="#F4F8FF"
          titleColor="#4583F0"
          reverse
          ribbon={
            <div
              className="
      hidden md:flex flex-col items-center z-10 mr-20 border-x-[3px] border-[#FFE866] 
      text-center p-2.5 absolute top-0 right-0 
      w-[100px] h-[150px] bg-[#FFF153]
      [clip-path:polygon(0_100%,50%_75%,100%_100%,100%_0,0_0)]
      pt-[10px]
    "
            >
              <span className="pt-5.5 text-[#F63690] font-bold text-[15px]">
                DUBHACKS
              </span>
              <span className="pt-1.5 text-black font-bold text-[13px]">
                2nd Place
              </span>
            </div>
          }
        />
      </section>

      {/* Extra Work Section */}
      <section className="my-12">
        <h2 className="mb-6 text-5xl font-extrabold">Extra Work</h2>
        {/* Dear Digital Equity */}
        <div className="flex flex-row max-md:flex-col gap-4">
          <MiniProjectCard
            image="/images/DDE/homeImage.png"
            link="/projects/DDE"
            alt="Dear Digital Equity"
            borderColor="#EBE5FF"
            bgColor="#F4F1FF"
          />
          <MiniProjectCard
            image="/images/AtlasPT/homeImage.png"
            link="https://www.atlaspt.org/"
            alt="Atlas Physical Therapy"
            borderColor="#EEEEEE"
            bgColor="#FFFFFF"
          />
        </div>
        <div className="flex flex-row max-md:flex-col gap-4 mt-4">
          <MiniProjectCard
            image="/images/AtlasWR/homeImage.png"
            link="https://www.atlasworkrehabilitation.org/"
            alt="Atlas Work Rehabilitation"
            borderColor="#EEEEEE"
            bgColor="#FFFFFF"
          />
          <MiniProjectCard
            image="/images/AlaisaInWonderland/homeImage.png"
            link="#"
            alt="A'Laisa In Wonderland"
            borderColor="#EEEEEE"
            bgColor="#FFFFFF"
          />
        </div>
      </section>
    </section>
  );
}
