"use client";
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
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

export default function Tourify() {
  const [activeId, setActiveId] = useState<string>("overview");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  };

  const handlePlay = () => setPaused(false);
  const handlePause = () => setPaused(true);
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
        mybutton?.classList.remove("hidden", "lg:flex");
        mybutton?.classList.add("lg:flex");
      } else {
        mybutton?.classList.remove("lg:flex");
        mybutton?.classList.add("hidden");
      }
    };

    window.onscroll = scrollFunction;
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <>
      <Head>
        <title>Ethan Dith | Tourify</title>
        <meta
          name="description"
          content="Tourify is an augmented reality museum experience designed by Ethan Dith and team for the Edmonds Historical Museum. Discover how AR can transform visitor engagement, research, and interactive exhibits."
        />
        <meta
          name="keywords"
          content="Tourify, Ethan Dith, museum, AR, augmented reality, Edmonds Historical Museum, UX design, UI, research, project, portfolio"
        />
        <meta name="author" content="Ethan Dith" />
        <meta property="og:title" content="Ethan Dith | Tourify" />
        <meta
          property="og:description"
          content="Tourify is an augmented reality museum experience designed by Ethan Dith and team for the Edmonds Historical Museum. Discover how AR can transform visitor engagement, research, and interactive exhibits."
        />
        <meta property="og:image" content="/images/Tourify/Hero.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ethandith.com/projects/tourify"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
                      ? "text-eyebrow text-orange font-extrabold"
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
            src="/images/Tourify/Hero.jpg"
            alt="Tourify Hero Image"
            className="w-full max-h-[1280px] object-cover"
            draggable={false}
            width={2560}
            height={1400}
          />
        </div>

        <div className="">
          {" "}
          {/* Overview Section */}
          <section id="overview" className="mt-12">
            <div className="flex flex-col md:flex-row gap-12 md:gap-44 mb-10 container mx-auto px-4">
              <div className="md:w-2/3">
                <h3 className="text-4xl font-bold mb-3">
                  Augmented Reality in Museums
                </h3>
                <h5 className="text-xl">
                  Tourify aims to revolutionize the traditional museum
                  experience by using the power of augmented reality (AR)
                  technology. This innovative concept transforms the way
                  visitors engage with the museum, offering a highly immersive,
                  interactive, and personalized journey through the exhibits. By
                  integrating AR into the museum experience, the project
                  redefines the visitor's understanding of history and culture.
                </h5>
                <div className="mt-4">
                  {" "}
                  <a
                    href="https://historicedmonds.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-bold hover:underline"
                  >
                    <span className="text-blue-400">
                      Edmonds Historical Museum
                    </span>
                  </a>{" "}
                  /
                  <a
                    href="https://www.figma.com/proto/RY7CWgUQlJrjYp05kLHgX9/Tourify?page-id=1%3A66&type=design&node-id=1-91&viewport=399%2C125%2C0.13&t=UNn3cte37wRRgHol-1&scaling=scale-down&starting-point-node-id=1%3A91&mode=design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-bold hover:underline"
                  >
                    <span className="text-blue-400">Figma</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      className="ml-2 fill-blue-600"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.88 18.36a3 3 0 0 1-4.24 0 3 3 0 0 1 0-4.24l2.83-2.83-1.41-1.41-2.83 2.83a5.003 5.003 0 0 0 0 7.07c.98.97 2.25 1.46 3.54 1.46s2.56-.49 3.54-1.46l2.83-2.83-1.41-1.41-2.83 2.83ZM12.71 4.22 9.88 7.05l1.41 1.41 2.83-2.83a3 3 0 0 1 4.24 0 3 3 0 0 1 0 4.24l-2.83 2.83 1.41 1.41 2.83-2.83a5.003 5.003 0 0 0 0-7.07 5.003 5.003 0 0 0-7.07 0Z"></path>
                      <path d="m16.95 8.46-.71-.7-.7-.71-4.25 4.24-4.24 4.25.71.7.7.71 4.25-4.24z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="md:w-1/3 space-y-6">
                <div>
                  <h5 className="font-bold text-xl mb-1">Roles</h5>
                  <ul className="mb-2 leading-loose list-none p-0 text-lg">
                    {" "}
                    <li>
                      Ethan Dith, <span className="font-bold">Designer</span>
                    </li>
                    <li>
                      RJ Mao, <span className="font-bold">Designer</span>
                    </li>
                    <li>
                      Evan Hoang, <span className="font-bold">Designer</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1">Skills</h5>
                  <ul className="mb-2 leading-loose list-none p-0 text-lg">
                    {" "}
                    <li>Prototyping</li>
                    <li>Researching</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1">Project Duration</h5>
                  <ul className="leading-loose list-none p-0 text-lg">
                    {" "}
                    <li>10 Weeks</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-20 mb-16">
              <Image
                src="/images/Tourify/final.jpg"
                alt="Tourify Final Designs"
                className="my-32 w-full"
                draggable={false}
                width={2560}
                height={1400}
              />
            </div>
          </section>
          {/* Problem Section */}
          <section id="problem" className="mt-12 container mx-auto px-4">
            <h6 className="text-blue-400 text-lg uppercase mb-2 font-semibold tracking-wider">
              {" "}
              The Problem
            </h6>
            <h2 className="font-bold text-4xl mb-4">
              Not enough engagement within the museum
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <ul className="space-y-4 md:w-1/2">
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>The
                    Edmonds Historical Museum currently heavily relies on
                    physical artifacts and exhibits, limiting visitor immersion
                    and interaction.
                  </h5>
                </li>
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>The
                    museum's low return rate is directly associated with its
                    outdated and physically reliant exhibits.
                  </h5>
                </li>
              </ul>
              <ul className="space-y-4 md:w-1/2">
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>Visitors
                    can explore most of the museum in a couple of hours, leaving
                    little incentive for a return visit, as much of the museum
                    remains unchanged.
                  </h5>
                </li>
              </ul>
            </div>
          </section>
          {/* Solution Section */}
          <section id="solution" className="mt-30 container mx-auto px-4">
            <h6 className="text-blue-400 text-lg uppercase mb-2 font-semibold tracking-wider">
              The Solution
            </h6>
            <h2 className="font-bold text-4xl mb-4">Goals & Objectives</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <ul className="space-y-4 md:w-1/2">
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>Revamp the
                    Edmonds Historical Museum, making it more appealing,
                    engaging, and inclusive for the entire community using
                    cutting-edge digital technology.
                  </h5>
                </li>
              </ul>
              <ul className="space-y-4 md:w-1/2">
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>Introduce
                    digital exhibits that are easy to use for tech novices to
                    tech-savvy youth and people of diverse backgrounds.
                  </h5>
                </li>
              </ul>
            </div>
          </section>
          {/* Research Section */}
          <section id="research" className="mt-30 container mx-auto px-4">
            <hr className="mb-12 mt-24" />
            <h6 className="text-blue-400 text-lg uppercase mb-2 font-semibold tracking-wider">
              Research
            </h6>
            <h2 className="font-bold text-4xl mb-4">Understanding the users</h2>
            <h5 className="text-xl mb-24">
              Museum visitor experience is a critical aspect of cultural
              institutions. To address this, we conducted an observational
              study, focusing on the behaviors of visitors. This research aims
              to explore the effectiveness of interactive exhibits.
            </h5>
            <div className="flex flex-col lg:flex-row gap-24 mb-24">
              <div className="lg:w-2/7">
                <Image
                  src="/images/Tourify/image1.jpeg"
                  alt="Murakami Artwork Seattle Asian Art Museum"
                  className="w-full h-auto rounded-2xl"
                  draggable={false}
                  width={2560}
                  height={1400}
                />
              </div>
              <div className="lg:w-5/7 flex flex-col justify-center">
                {" "}
                <h5 className="font-bold text-xl mb-4">
                  {" "}
                  Opportunity for Research and Design (Research Findings):
                </h5>
                <ul className="space-y-2">
                  {" "}
                  <li>
                    <h6 className="text-xl">
                      {" "}
                      <span className="text-blue-400 mr-2">&bull;</span>
                      Many museum goers were smartphone users and would often
                      use their devices to interact with the museum in a
                      non-direct way.
                    </h6>
                  </li>
                  <li>
                    <h6 className="text-xl">
                      <span className="text-blue-400 mr-2">&bull;</span>
                      Lack of a younger audience at the museum.
                    </h6>
                  </li>
                  <li>
                    <h6 className="text-xl">
                      <span className="text-blue-400 mr-2">&bull;</span>
                      How will we implement augmented reality for mobile phone
                      users to enhance their engagement with the museum?
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-24 items-center mb-24">
              <div className="lg:w-1/2">
                <h2 className="font-bold text-3xl mb-4 mt-24">
                  Younger audiences have a greater understanding of technology
                </h2>
                <h5 className="text-lg mb-12">
                  To further guide the design and research process for our
                  project we aimed at enhancing museum visitor experience
                  through interactive exhibits for younger audiences.
                </h5>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/images/Tourify/Persona.jpg"
                  alt="Persona"
                  className="w-full h-auto rounded-2xl border-1 border-[#DADADA]"
                  draggable={false}
                  width={2560}
                  height={1400}
                />
              </div>
            </div>
            <h2 className="font-bold text-4xl mb-4">Targeted Stakeholders:</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <ul className="space-y-4 md:w-1/2">
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>
                    <strong className="font-poppinsBold">
                      Museum Visitors
                    </strong>{" "}
                    who are seeking an educational approach
                  </h5>
                </li>
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>
                    <strong className="font-poppinsBold">
                      Museum Board of Directors
                    </strong>{" "}
                    who value a cost effective approach
                  </h5>
                </li>
              </ul>
              <ul className="space-y-4 md:w-1/2">
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>
                    <strong className="font-poppinsBold">
                      The City of Edmonds
                    </strong>{" "}
                    who desires to increase cultural engagement
                  </h5>
                </li>
              </ul>
            </div>
          </section>
          {/* Ideation Section */}
          <section id="ideation" className="mt-30 container mx-auto px-4">
            <h6 className="text-blue-400 text-lg uppercase mb-2 font-semibold tracking-wider">
              Ideation
            </h6>
            <h2 className="font-bold text-4xl mb-4">
              Choosing a design direction
            </h2>
            <h5 className="text-xl mb-12">
              We envision a transformative design direction for the Edmonds
              Historical Museum, leveraging more advanced technology to redefine
              the museum experience. Our goal is to create an engaging,
              immersive, and inclusive journey through the exhibits, catering to
              a diverse audience ranging from tech novices to the tech-savvy and
              people of varied backgrounds.
            </h5>
            <h5 className="font-bold text-2xl mb-8">Initial Concepts</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {" "}
              <div className="p-10 border flex flex-col items-center key-features bg-gray-100 text-black rounded-2xl">
                {" "}
                <Image
                  src="/images/Tourify/InterationVR.svg"
                  height={2560}
                  width={1400}
                  alt="Virtual Reality"
                />
                <h5 className="font-bold text-xl mb-2">VR Tours</h5>
                <h6 className="text-lg text-center">
                  Virtual tours and 3D renders of artifacts.
                </h6>
              </div>
              <div className="p-10 border flex flex-col items-center key-features bg-gray-100 text-black rounded-2xl">
                <Image
                  src="/images/Tourify/InterationAR.svg"
                  height={2560}
                  width={1400}
                  alt="Augmented Reality"
                />
                <h5 className="font-bold text-xl mt-3 mb-2">AR Tours</h5>
                <h6 className="text-lg text-center">
                  Gamification and virtual tours.
                </h6>
              </div>
              <div className="p-10 border flex flex-col items-center key-features bg-gray-100 text-black rounded-2xl">
                <Image
                  src="/images/Tourify/InterationInteractive.svg"
                  height={2560}
                  width={1400}
                  alt="Interactive Exhibit"
                />
                <h5 className="font-bold text-xl mt-3 mb-2">
                  Sensory Exhibits
                </h5>
                <h6 className="text-lg text-center">
                  Interactive visuals and sounds.
                </h6>
              </div>
            </div>
            <h5 className="font-bold text-2xl mb-4 mt-16">Final Concept</h5>
            <h5 className="text-xl mb-12">
              AR implementation was chosen due the cost limitations and
              versatility of smartphones using AR.
            </h5>
            <h2 className="font-bold text-4xl mb-4">
              Key features to implement
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <ul className="space-y-4 md:w-1/2">
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>
                    Seamless Navigation with a Digital Tour Guide
                  </h5>
                </li>
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>
                    Scannable artifacts through smartphone AR implementation
                  </h5>
                </li>
              </ul>
              <ul className="space-y-4 md:w-1/2">
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>
                    Narrative text descriptions for artifacts & exhibits
                  </h5>
                </li>
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>
                    Gamification through scavenger hunts & achievements
                  </h5>
                </li>
              </ul>
            </div>
            <hr className="my-12" />
            <h2 className="font-bold text-4xl mb-4">Initial Mockup</h2>
            <h5 className="text-xl mb-12">
              The initial design reflects some of the key features that we plan
              to implement in the final product. Although the scavenger hunt was
              created to enhance the user's experience at the museum, we did not
              include the scavenger hunt in the initial mockup as we wanted to
              focus on the core features of the app.
            </h5>
            <div className="flex flex-col gap-6 mx-auto">
              <Image
                src="/images/Tourify/initalDesigns1.jpg"
                alt="Initial Designs of Tourify"
                className="w-full h-full mb-4 md:mb-0 border-[#DADADA] border-1 rounded-2xl"
                draggable={false}
                width={2560}
                height={1400}
              />
              <Image
                src="/images/Tourify/initalDesigns2.jpg"
                alt="Initial Designs of Tourify"
                className="w-full h-full border-[#DADADA] border-1 rounded-2xl"
                draggable={false}
                width={2560}
                height={1400}
              />
            </div>
          </section>
          {/* Testing + Improvements Section */}
          <section id="testing" className="mt-20 container mx-auto px-4">
            <hr className="my-12" />
            <h6 className="text-blue-400 text-lg uppercase mb-2 font-semibold tracking-wider">
              Testing + Improvements
            </h6>
            <h2 className="font-bold text-4xl mb-4">
              Iterationing on user feedback
            </h2>
            <h5 className="text-xl mb-10">
              After receiving feedback from our peers and instructor doing User
              Testing using Neilsen's 10 Heuristics, we decided to make some
              changes to our initial design.
            </h5>
            <h5 className="font-bold text-xl mb-3">Changes</h5>{" "}
            <div className="space-y-3 mb-24">
              {" "}
              <h5 className="text-xl">
                <span className="text-blue-400 mr-2">&bull;</span>Remove
                redundant features within the maps
              </h5>
              <h5 className="text-xl">
                <span className="text-blue-400 mr-2">&bull;</span>Created
                onboarding screens to help first time users understand how to
                use the app
              </h5>
              <h5 className="text-xl">
                <span className="text-blue-400 mr-2">&bull;</span>Added
                scavenger hunt feature to the app to increase user engagement
              </h5>
              <h5 className="text-xl">
                <span className="text-blue-400 mr-2">&bull;</span>Work closer
                together to make a more cohesive design
              </h5>
            </div>
            <div className="flex flex-col md:flex-row gap-12 mb-12">
              {" "}
              <div className="md:w-3/5">
                {" "}
                <Image
                  src="/images/Tourify/Iteration1.jpg"
                  alt="First Iteration of Tourify"
                  className="w-full h-full border-[#DADADA] border-1 rounded-2xl"
                  draggable={false}
                  width={2560}
                  height={1400}
                />
              </div>
              <div className="md:w-2/5 flex flex-col justify-center">
                {" "}
                <h5 className="font-bold mb-3 text-xl">
                  Removal of redundant features
                </h5>
                <ul className="space-y-2">
                  {" "}
                  <li>
                    <h6 className="text-xl">
                      <span className="text-blue-400 mr-2">&bull;</span>Map Key
                      and help is not needed
                    </h6>
                  </li>
                  <li>
                    <h6 className="text-xl">
                      <span className="text-blue-400 mr-2">&bull;</span>Location
                      is already shown on the map
                    </h6>
                  </li>
                  <li>
                    <h6 className="text-xl">
                      <span className="text-blue-400 mr-2">&bull;</span>Added
                      scavenger hunt feature to the app to increase user
                      engagement with historical artifacts
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="font-bold text-4xl mb-4 mt-24">Final Screens</h2>
            <Image
              src="/images/Tourify/finaldesign.jpg"
              alt="All Screens for the final designs of Tourify"
              className="w-full h-auto mb-24 rounded-2xl border-1 border-[#DADADA]"
              draggable={false}
              width={2560}
              height={1400}
            />
          </section>
          <section id="conclusion" className="mt-20 container mx-auto px-4">
            <hr className="mt-30 mb-12" />
            <h2 className="font-bold text-4xl mb-4">Next Steps:</h2>
            <ul className="space-y-4 mb-8">
              <li>
                <h5 className="text-xl">
                  <span className="text-blue-400 mr-2">&bull;</span>
                  <strong className="font-poppinsBold">
                    QR Code Integration:
                  </strong>{" "}
                  We would like to add QR codes to the artifacts and exhibits so
                  more users that do not have AR enabled phones can access them.
                </h5>
              </li>
              <li>
                <h5 className="text-xl">
                  <span className="text-blue-400 mr-2">&bull;</span>
                  <strong className="font-poppinsBold">
                    Social Network:
                  </strong>{" "}
                  We would like to implement a networked social feature to the
                  app so users can share their experiences with others and have
                  created a competitive edge to the scavenger hunt.
                </h5>
              </li>
              <li>
                <h5 className="text-xl">
                  <span className="text-blue-400 mr-2">&bull;</span>
                  <strong className="font-poppinsBold">
                    Business Implementation:
                  </strong>{" "}
                  We would like to make the app more accessible to other
                  museums, allowing different museums to upload information
                  regarding their museum, allowing for a one museum navigation
                  app.
                </h5>
              </li>
            </ul>
            <h6 className="text-blue-400 uppercase mb-2 text-lg font-semibold tracking-wider">
              {" "}
              Conclusion + Lessons
            </h6>
            <h2 className="font-bold text-4xl mb-4">
              What I would do differently next time...
            </h2>
            <h5 className="text-xl mb-4">
              The overall process was very fascinating, being able to work with
              real stakeholders of a museum. This not only helped me further
              develop my skills not only in UX design but in UI design.
            </h5>
            <ul className="space-y-4 mb-12">
              <li>
                <h5 className="text-xl">
                  <span className="text-blue-400 mr-2">&bull;</span>
                  <strong className="font-poppinsBold">Iterations -</strong> If
                  we were given additional time, I would like to have done user
                  testing at least one more time. This would have helped us
                  minimize some of the remaining user pain points.
                </h5>
              </li>
            </ul>

            <div className="aspect-video w-full overflow-hidden relative">
              <video
                ref={videoRef}
                className="w-full h-auto cursor-pointer"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onClick={handleVideoClick}
                onPlay={handlePlay}
                onPause={handlePause}
              >
                <source
                  src="/images/Tourify/prototypeAnimation.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {paused && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer z-10"
                  onClick={handleVideoClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={96}
                    height={96}
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.5)" />
                    <polygon points="10,8 16,12 10,16" fill="white" />
                  </svg>
                </div>
              )}
            </div>
          </section>
          <section className="container mx-auto px-4">
            {/* Next Projects */}
            <div className="mt-20 mb-10">
              <h5 className="mb-5 font-bold text-xl">Explore other work!</h5>
              <div className="flex flex-col md:flex-row gap-8 w-full">
                <a href="/projects/mindfulu" className="block w-full md:w-1/2">
                  <Image
                    src="/images/MU/mulogo.jpg"
                    alt="MindfulU"
                    className="w-full h-full object-cover rounded-lg border-2 border-blue-400 shadow"
                    draggable={false}
                    height={1400}
                    width={2560}
                  />
                </a>
                <a
                  href="/projects/studdyspotter"
                  className="block w-full md:w-1/2"
                >
                  <Image
                    src="/images/StuddySpotter/SSLogo.jpg"
                    alt="StuddySpotter"
                    className="w-full h-full  object-cover rounded-lg border-2 border-purple-400 shadow"
                    draggable={false}
                    height={1400}
                    width={2560}
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
