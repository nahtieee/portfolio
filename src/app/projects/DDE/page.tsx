"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const tocLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#problem", label: "The Problem" },
  { href: "#solution", label: "The Solution" },
  { href: "#research", label: "Research" },
  { href: "#ideation", label: "Ideation" },
  { href: "#testing", label: "Improvements" },
  { href: "#conclusion", label: "Conclusion" },
];

export default function DDE() {
  const [activeId, setActiveId] = useState<string>("overview");

  useEffect(() => {
    const sectionIds = tocLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (a, b) =>
            (a.target as HTMLElement).offsetTop -
            (b.target as HTMLElement).offsetTop
        );

      if (visibleSections.length > 0) {
        setActiveId((visibleSections[0].target as HTMLElement).id);
      }
    };

    const observer = new window.IntersectionObserver(handleIntersect, {
      rootMargin: "0px 0px -80% 0px",
      threshold: 0,
    });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mybutton = document.getElementById("myBtn");
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton?.classList.remove("hidden");
        mybutton?.classList.add("flex");
      } else {
        mybutton?.classList.remove("flex");
        mybutton?.classList.add("hidden");
      }
    };

    window.onscroll = scrollFunction;
    return () => {
      window.onscroll = null; 
    };
  }, []);

  return (
    <div>
      {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          id="myBtn"
          className="hidden lg:flex fixed bottom-8 right-8 z-50 items-center gap-2 px-5 py-3 rounded-full bg-foreground text-white border border-background font-bold hover:bg-gray-700 transition-colors up-botton"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
          Top
        </button>

      {/* Floating Table of Contents */}
      <nav className="hidden lg:block fixed top-28 right-8 bg-[#F8F8F8E6] text-foreground z-20 font-mono p-4 rounded-2xl project-nav">
          <ul className="space-y-2 text-sm">
            {tocLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`hover:text-orange-400 transition-colors font-normal ${
                    activeId === link.href.replace("#", "")
                      ? "text-purple-400 text-orange font-extrabold"
                      : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      <div className="w-full flex flex-col items-center">
        <Image
          src="/images/DDE/Hero.jpg"
          alt="Dear Digital Equity Hero"
          draggable={false}
          width={2560}
          height={1400}
        />
      </div>
      <div className="container mx-auto px-4 py-8">
        {/* Overview Section */}
        <section id="overview" className="mt-12">
          <div className="text-left mt-8 mb-16">
            <h2 className="text-4xl font-bold mb-4">Overview</h2>
            <h5 className="text-xl mb-4">
              Dear Digital Equity is a project designed by the IMD Student's at
              the University of Washington Bothell for the purpose of spreading
              awareness of the digital equity space in Washington State.
            </h5>
            <div className="mt-4">
              <a
                href="https://www.deardigitalequity.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-bold hover:underline"
              >
                <span className="text-blue-400">Website</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  className="ml-2 fill-blue-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.88 18.36a3 3 0 0 1-4.24 0 3 3 0 0 1 0-4.24l2.83-2.83-1.41-1.41-2.83 2.83a5.003 5.003 0 0 0 0 7.07c.98.97 2.25 1.46 3.54 1.46s2.56-.49 3.54-1.46l2.83-2.83-1.41-1.41-2.83 2.83ZM12.71 4.22 9.88 7.05l1.41 1.41 2.83-2.83a3 3 0 0 1 4.24 0 3 3 0 0 1 0 4.24l-2.83 2.83 1.41 1.41 2.83-2.83a5.003 5.003 0 0 0 0-7.07 5.003 5.003 0 0 0-7.07 0Z"></path>
                  <path d="m16.95 8.46-.71-.7-.7-.71-4.25 4.24-4.24 4.25.71.7.7.71 4.25-4.24z"></path>
                </svg>
              </a>{" "}
              /{" "}
              <a
                href="https://www.instagram.com/deardigitalequity/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-bold hover:underline"
              >
                <span className="text-blue-400">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  className="ml-2 fill-blue-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.88 18.36a3 3 0 0 1-4.24 0 3 3 0 0 1 0-4.24l2.83-2.83-1.41-1.41-2.83 2.83a5.003 5.003 0 0 0 0 7.07c.98.97 2.25 1.46 3.54 1.46s2.56-.49 3.54-1.46l2.83-2.83-1.41-1.41-2.83 2.83ZM12.71 4.22 9.88 7.05l1.41 1.41 2.83-2.83a3 3 0 0 1 4.24 0 3 3 0 0 1 0 4.24l-2.83 2.83 1.41 1.41 2.83-2.83a5.003 5.003 0 0 0 0-7.07 5.003 5.003 0 0 0-7.07 0Z"></path>
                  <path d="m16.95 8.46-.71-.7-.7-.71-4.25 4.24-4.24 4.25.71.7.7.71 4.25-4.24z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 mt-16 text-left">
            <div>
              <h4 className="font-bold text-xl">Role</h4>
              <h5 className=" text-lg leading-relaxed">
                Researcher
                <br />
                Designer
              </h5>
            </div>
            <div>
              <h4 className="font-bold text-xl">Skills</h4>
              <h5 className="text-lg leading-relaxed">
                Wireframing
                <br />
                Prototyping
                <br />
                Interviewing
                <br />
                Researching
              </h5>
            </div>
            <div>
              <h4 className="font-bold text-xl">Tools</h4>
              <h5 className="text-lg leading-relaxed">
                Figma
                <br />
                Canva
              </h5>
            </div>
            <div>
              <h4 className="font-bold text-xl">Project Duration</h4>
              <h5 className="text-lg leading-relaxed">
                10 Weeks
              </h5>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="mt-12">
          <div className="text-left mb-16">
            <h6 className="font-light text-purple-500 text-lg mb-2">
              The Problem
            </h6>
            <h2 className="text-4xl font-bold mb-4">What is Digital Equity?</h2>
            <h5 className="text-xl">
              Digital equity refers to the idea that everyone should have equal
              access to and the ability to use digital technologies, including
              the internet, computers, and other digital devices. This includes
              having access to reliable and high-quality internet connectivity,
              the necessary hardware and software, and the skills and knowledge
              needed to use these technologies effectively.
            </h5>
          </div>

          <div className="mb-16 mt-16 px-24 py-24 border-2 border-blue-600 text-center">
            <h2 className="text-4xl font-bold mb-4 text-center align-center">
              Washington faces a digital equity problem.
            </h2>
            <h5 className="text-xl">
              Digital Equity is significant in today’s society, there are
              currently few resources available to practitioners working in this
              field to connect and work together. By bringing these
              practitioners together, we can more effectively address the
              challenges and issues facing digital equity.
              <br />
              <br />
              Under the supervision of our professors our goal was to improve
              this issue and inform other individuals of what is being done to
              help digital equity in Washington State.
            </h5>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="mt-12">
          <div className="text-left mb-16 mt-16">
            <h6 className="font-light text-purple-500 text-lg mb-2">
              The Solution
            </h6>
            <h2 className="text-4xl font-bold mb-8">Goals & Objectives</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <ul className="space-y-4 md:w-1/2">
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-600 mr-2">&bull;</span>
                    Creating a space where practitioners can learn more about
                    each other.
                  </h5>
                </li>
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-600 mr-2">&bull;</span>
                    Relating digital equity to design through media content
                    deliverables.
                  </h5>
                </li>
              </ul>
              <ul className="space-y-4 md:w-1/2">
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-600 mr-2">&bull;</span>
                    Spread awareness of what is being done to help digital
                    equity in Washington State.
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="mt-12">
          <div className="text-left">
            <h6 className="font-light text-purple-500 text-lg mb-2">
              Research
            </h6>
            <h2 className="text-4xl font-bold mb-4">
              The class was broken up into 5 different groups based off our
              interests
            </h2>
            <h5 className="text-xl">
              After breaking up into groups, each group was assigned different
              tasks for this project. I joined the Website team which was a part
              of populating the website, choosing a website platform
              (SquareSpace) and designing the website. There was also the
              Branding, Content, Social Media, and Storytelling Teams which had
              their own respective tasks.
            </h5>
            <h5 className="text-xl mt-4">
              Each student was also tasked in creating content deliverables,
              where we would create a media deliverable about digital equity in
              Washington State and Interview practitioners showcasing their work
              on the website.
            </h5>
          </div>
          <div className="text-left mt-12 mb-8">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <Image
              src="/images/DDE/Process.jpg"
              alt="Our Process"
              className="w-full h-auto"
              draggable={false}
              width={2560}
              height={1400}
            />
          </div>
        </section>

        {/* Ideation Section */}
        <section id="ideation" className="mt-12">
          <div className="text-left">
            <h6 className="font-light text-purple-500 text-lg mb-2">
              Ideation
            </h6>
            <h2 className="text-4xl font-bold mb-4">
              Creating a simple but effective design
            </h2>
            <h5 className="text-xl">
              I wanted to design something that was simple and easy to navigate.
              A design that would be modern yet effective to showcase our
              content. We then worked as a group to figure out a singular
              design.
            </h5>
          </div>

          <div className="text-left mt-12">
            <h2 className="text-4xl font-bold mb-4">Wireframing</h2>
            <Image
              src="/images/DDE/Wireframe.jpg"
              alt="Wireframe"
              className="w-full h-auto"
              draggable={false}
                width={2560}
                height={1400}

            />
          </div>
        </section>

        {/* Testing + Improvements Section */}
        <section id="testing" className="mt-12">
          <hr className="my-12" />
          <div className="text-left">
            <h6 className="font-light text-purple-500 text-lg mb-2">
              Testing + Improvements
            </h6>
            <h2 className="text-4xl font-bold mb-4">Reworking the design</h2>
            <h5 className="text-xl">
              Within the website and content team we came together and talked
              about how the final website should look like. We chose the colors
              and fonts we were going to use. We then worked with the branding
              team in order to select a logo for our project.
              <br />
              <br />
              Using our old design we came up with a design that was effective
              in showcasing our content. After polishing our design we finally
              implemented our final designs and uploaded all our deliverables.
            </h5>
          </div>

          <div className="text-left mt-24">
            <h2 className="text-4xl font-bold mb-4">Final Product</h2>
            <Image
              src="/images/DDE/Mockup.jpg"
              alt="Final Mockup"
              className="w-full h-auto"
              draggable={false}
                width={2560}
                height={1400}
            />
          </div>

          <div className="text-left mt-12">
            <h2 className="text-4xl font-bold mb-4">Style Guide</h2>
            <Image
              src="/images/DDE/StyleGuide.jpg"
              alt="Style Guide"
              className="w-full h-auto"
              draggable={false}
                width={2560}
                height={1400}
            />
          </div>
          <div className="text-left mt-12 mb-4">
            <h2 className="text-4xl font-bold">Prototype</h2>
          </div>
          <div
            className="relative w-full overflow-hidden"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fb4DrjLoLnCcF8KXeqrcGcY%2FUntitled%3Fpage-id%3D0%253A1%26node-id%3D201%253A28%26viewport%3D253%252C173%252C0.07%26scaling%3Dscale-down%26starting-point-node-id%3D201%253A28%26show-proto-sidebar%3D1"
              allowFullScreen
              className="absolute top-0 left-0 border-0"
            />
          </div>
        </section>

        {/* Conclusion Section */}
        <section id="conclusion" className="mt-12">
          <div className="text-left mt-24">
            <hr className="my-12" />
            <h6 className="font-light text-purple-500 text-lg mb-2">
              Conclusion + Lessons
            </h6>
            <h2 className="text-4xl font-bold mb-4">
              What I would do differently next time...
            </h2>
            <h5 className="text-xl mb-4">
              This project was my first team based project that I've ever done,
              which required me to collaborate with a team of over twenty
              people. Overall I found the process to be enjoyable, being able to
              collaborate with practitioners around Washington State in order to
              create content displaying what is being done in helping the
              digital divide.
              <br />
              <br />
              Here are the things I've learned:
            </h5>
            <div className="pl-4">
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  <strong className="font-bold">More Iterating -</strong> We
                  didn't spend a lot of time iterating because we were limited
                  to the 10 weeks of the quarter. I think iterating our content
                  would have helped flush out some mistakes.
                </li>
                <li>
                  <strong className="font-bold">Design Process -</strong> The
                  design process is one the design practices we learned. Using
                  the British Design Council's double diamond diagram throughout
                  our project.
                </li>
              </ol>
            </div>
          </div>

          <div className="text-left mt-24 mb-16">
            <h2 className="text-4xl font-bold mb-4">Content Deliverables</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Image
                src="/images/DDE/Content1.jpg"
                alt="Content Deliverable 1"
                draggable={false}
                height={2560}
                width={1400}
              />
              <Image
                src="/images/DDE/Content2.jpg"
                alt="Content Deliverable 2"
                draggable={false}
                height={2560}
                width={1400}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}