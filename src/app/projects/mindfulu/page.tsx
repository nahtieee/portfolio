"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const tocLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#problem", label: "The Problem" },
  { href: "#solution", label: "The Solution" },
  { href: "#ideation", label: "Ideation" },
  { href: "#testing", label: "Improvements" },
  { href: "#conclusion", label: "Conclusion" },
];

export default function MindfulU() {
  const [activeId, setActiveId] = useState<string>("overview");
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [paused1, setPaused1] = useState(false);
  const [paused2, setPaused2] = useState(false);

  const handleVideoClick1 = () => {
    const video = videoRef1.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPaused1(false);
    } else {
      video.pause();
      setPaused1(true);
    }
  };
  const handleVideoClick2 = () => {
    const video = videoRef2.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPaused2(false);
    } else {
      video.pause();
      setPaused2(true);
    }
  };

  const handlePlay1 = () => setPaused1(false);
  const handlePause1 = () => setPaused1(true);
  const handlePlay2 = () => setPaused2(false);
  const handlePause2 = () => setPaused2(true);

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
      <head>
        <title>Ethan Dith | MindfulU</title>
        <meta
          name="description"
          content="MindfulU is a mental health tracker app designed by Ethan Dith and Leonille Matunan at DubHacks 2023. Track your mood, set goals, and improve your well-being with a student-focused experience."
        />
        <meta
          name="keywords"
          content="MindfulU, Ethan Dith, Leonille Matunan, mental health, tracker, DubHacks, UX design, UI, research, project, portfolio, student, well-being"
        />
        <meta name="author" content="Ethan Dith" />
        <meta property="og:title" content="Ethan Dith | MindfulU" />
        <meta
          property="og:description"
          content="MindfulU is a mental health tracker app designed at DubHacks 2023 to help students manage stress and well-being. Track your mood, set goals, and learn self-care."
        />
        <meta property="og:image" content="/images/MU/Hero.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ethandith.com/projects/mindfulu"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <section>
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
        {/* Hero Image */}
        <div className="w-full flex flex-col items-center">
          <Image
            src="/images/MU/Hero.webp"
            alt="MindfulU Hero Image"
            className="w-full max-h-[1280px] object-cover"
            draggable={false}
            width={1920}
            height={1080}
          />
        </div>
        <div>
          {/* Overview Section */}
          <section id="overview" className="mt-12">
            <div className="flex flex-col md:flex-row gap-12 md:gap-44 mb-10 container mx-auto px-4">
              <div className="md:w-2/3">
                <h3 className="text-4xl font-bold mb-3">
                  Mental Health Tracker
                </h3>
                <h6 className="font-light text-[#7c7c7c] text-lg mb-2">
                  2nd Place | Vitality Track
                </h6>
                <h5 className="text-xl">
                  MindfulU is a project that was conceptualized and prototyped
                  during the{" "}
                  <a
                    href="https://dubhacks-23.devpost.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400"
                  >
                    2023 DubHacks Hackathon
                  </a>{" "}
                  with the goal of helping students better manage the stress and
                  challenges of university life. Drawing inspiration from
                  existing apps like Headspace and Habit Trackers, the team
                  embarked on a journey to create a user-centric mental health
                  application.
                </h5>
                <div className="mt-4">
                  <a
                    href="https://devpost.com/software/mindfulu-1ubr3z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-bold hover:underline"
                  >
                    <span className="text-blue-400">Project Link</span>
                  </a>{" "}
                  /{" "}
                  <a
                    href="https://www.figma.com/file/Ut6ZqiysC4O7DzB5JfuqfP/DubHacks?type=design&node-id=0%3A1&mode=design&t=W9MgdMtnkCnXkTCB-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-bold hover:underline"
                  >
                    <span className="text-blue-400">Figma</span>
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 space-y-6">
                <div>
                  <h5 className="font-bold text-xl mb-1">Roles</h5>
                  <h6 className="text-gray-600 text-lg leading-relaxed">
                    Ethan Dith, <span className="font-bold">Designer</span>
                    <br />
                    Leonille Matunan,{" "}
                    <span className="font-bold">Developer</span>
                  </h6>
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1">Skills</h5>
                  <h6 className="text-gray-600 text-lg leading-relaxed">
                    Prototyping
                    <br />
                    Researching
                  </h6>
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1">Project Duration</h5>
                  <h6 className="text-gray-600 text-lg leading-relaxed">
                    18 Hours, Oct 2023
                  </h6>
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1">Awards</h5>
                  <h6 className="text-gray-600 text-lg leading-relaxed">
                    2nd Place @{" "}
                    <a
                      href="https://dubhacks-23.devpost.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Dubhacks 2023
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="mt-12 mb-16">
              <video
                className="w-3/4 mx-auto"
                autoPlay
                muted
                playsInline
                preload="auto"
              >
                <source
                  src="/images/MU/prototypeAnimation.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
          {/* Problem Section */}
          <section id="problem" className="mt-12 container mx-auto px-4">
            <h6 className="text-blue-400 text-lg uppercase mb-2 font-semibold tracking-wider">
              The Problem
            </h6>
            <h2 className="font-bold text-4xl mb-4">
              There is a lack of resources to help students
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <ul className="space-y-4 md:w-1/2">
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>
                    Aim to address the challenges of university life and help
                    students better manage their stress and mental health.
                  </h5>
                </li>
              </ul>
              <ul className="space-y-4 md:w-1/2">
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>
                    Students are often overwhelmed with the amount of work they
                    have to do and often forget to take care of their mental
                    health.
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
                    <span className="text-blue-400 mr-2">&bull;</span>
                    Develop an App that would help students track and provide
                    activities for their mental health and well-being.
                  </h5>
                </li>
              </ul>
              <ul className="space-y-4 md:w-1/2">
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>
                    Provide students with resources and activities to help them
                    with their mental health.
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
              Creating an easy to use design
            </h2>
            <h5 className="text-xl mb-12">
              By analyzing the offerings of other competitors in the market, we
              identified the essential features and functionalities necessary to
              develop an app that distinguishes itself from the competition.
            </h5>
            <h5 className="font-bold text-2xl mb-8">Wireframe</h5>
            <Image
              src="/images/MU/Wireframe.webp"
              alt="MindfulU Wireframe"
              className="w-full h-auto rounded-2xl border-1 border-[#DADADA] mb-12"
              loading="lazy"
              draggable={false}
              width={1920}
              height={1080}
            />
          </section>
          {/* Testing + Improvements Section */}
          <section id="testing" className="mt-20 container mx-auto px-4">
            <hr className="my-12" />
            <h6 className="text-blue-400 text-lg uppercase mb-2 font-semibold tracking-wider">
              Testing + Improvements
            </h6>
            <h2 className="font-bold text-4xl mb-4">
              Reworking the initial design
            </h2>
            <h5 className="text-xl mb-10">
              Upon reviewing the wireframes, we identified additional features
              that needed to be incorporated, including the introduction of
              onboarding screens for new users, the integration of reflection
              components, and the implementation of monthly and weekly tracking
              functionalities.
            </h5>
            <div className="flex flex-col md:flex-row gap-12 mb-12">
              <div className="md:w-3/5 flex flex-col justify-center">
                <h6 className="font-light mb-2">Final Designs // Onboarding</h6>
                <h5 className="font-bold text-xl mb-2">
                  Allowing users to personalize their data.
                </h5>
                <h6>
                  Users are allowed to register and login to their accounts,
                  then have the ability to personalize their saved data.
                </h6>
              </div>
              <div className="md:w-2/5 relative">
                <video
                  className="w-1/2 mx-auto rounded-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  ref={videoRef1}
                  onClick={handleVideoClick1}
                  onPlay={handlePlay1}
                  onPause={handlePause1}
                >
                  <source src="/images/MU/UserFlow.mp4" type="video/mp4" />
                </video>
                {paused1 && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer z-10"
                    onClick={handleVideoClick1}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={96}
                      height={96}
                      fill="white"
                      viewBox="0 0 24 24"
                      className="drop-shadow-lg"
                    >
                      <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,1)" />
                      <polygon points="10,8 16,12 10,16" fill="white" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12 mb-12">
              <div className="md:w-2/5 relative">
                {" "}
                <video
                  className="w-1/2 mx-auto  rounded-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  ref={videoRef2}
                  onClick={handleVideoClick2}
                  onPlay={handlePlay2}
                  onPause={handlePause2}
                >
                  <source src="/images/MU/UserFlow2.mp4" type="video/mp4" />
                </video>
                {paused2 && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer z-10"
                    onClick={handleVideoClick2}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={96}
                      height={96}
                      fill="white"
                      viewBox="0 0 24 24"
                      className="drop-shadow-lg"
                    >
                      <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,1)" />
                      <polygon points="10,8 16,12 10,16" fill="white" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="md:w-3/5 flex flex-col justify-center">
                <h6 className="font-light mb-2">
                  Final Designs // Main Screens
                </h6>
                <h5 className="font-bold text-xl mb-2">
                  Track and review users personalized data.
                </h5>
                <h6>
                  Users are able to change and review their personalized data,
                  edit their mood, learn self care tips, and create personalized
                  goals.
                </h6>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="font-bold text-3xl mb-4">Final Screens</h3>
              <Image
                src="/images/MU/finalDesigns.webp"
                alt="MindfulU Final Designs"
                className="w-full h-auto rounded-2xl border-1 border-[#DADADA]"
                loading="lazy"
                draggable={false}
                width={1920}
                height={1080}
              />
            </div>
          </section>
          {/* Conclusion Section */}
          <section id="conclusion" className="mt-20 container mx-auto px-4">
            <hr className="mt-30 mb-12" />
            <h6 className="text-blue-400 text-lg uppercase mb-2 font-semibold tracking-wider">
              Conclusion + Lessons
            </h6>
            <h2 className="font-bold text-4xl mb-4">
              What I would do differently next time...
            </h2>
            <ul className="space-y-4 mb-8">
              <li>
                <h5 className="text-xl">
                  <span className="text-blue-400 mr-2">&bull;</span>
                  <strong>Thorough Ideation -</strong> If I had more time I
                  would do more ideation before settling with our final design
                  concept.
                </h5>
              </li>
              <li>
                <h5 className="text-xl">
                  <span className="text-blue-400 mr-2">&bull;</span>
                  <strong>Usability Testing -</strong> Being able to test the
                  design with stakeholders early on could help with
                  functionality issues and design flaws.
                </h5>
              </li>
              <li>
                <h5 className="text-xl">
                  <span className="text-blue-400 mr-2">&bull;</span>
                  <strong>Iterations -</strong> Given additional time, I would
                  have been able to go through multiple rounds of refining the
                  design and features, making the project even better.
                </h5>
              </li>
            </ul>
            <div className="mt-12">
              <h5 className="font-bold text-xl mb-2">
                Here are the things I've learned:
              </h5>
              <ul className="space-y-4 mb-8">
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>
                    <strong>Time Management -</strong> You have to make choices
                    on which activities to prioritize to effectively finish the
                    project.
                  </h5>
                </li>
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>
                    <strong>Problem Solving -</strong> Working under tight
                    deadlines has helped with my ability to overcome challenges
                    efficiently within limited timeframes.
                  </h5>
                </li>
                <li>
                  <h5 className="text-xl">
                    <span className="text-blue-400 mr-2">&bull;</span>
                    <strong>Collaborative Skills -</strong> This experience has
                    improved my ability to work effectively in a cross
                    functional team, enhancing my collaborative skills.
                  </h5>
                </li>
              </ul>
            </div>
          </section>
          {/* Next Projects */}
          <section className="container mx-auto px-4">
            {/* Next Projects */}
            <div className="mt-20 mb-10">
              <h5 className="mb-5 font-bold text-xl">Explore other work!</h5>
              <div className="flex flex-col md:flex-row gap-8 w-full">
                <a href="/projects/tourify" className="block w-full md:w-1/2">
                  <Image
                    src="/images/Tourify/TOURIFY.jpg"
                    alt="Tourify"
                    className="w-full h-full object-cover rounded-lg border-2 border-gray-400 shadow"
                    draggable={false}
                    width={1920}
                    height={1080}
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
                    width={1920}
                    height={1080}
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
