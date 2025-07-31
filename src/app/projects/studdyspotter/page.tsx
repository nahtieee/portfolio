"use client";
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";

const tocLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#problem", label: "The Problem" },
  { href: "#solution", label: "The Solution" },
  { href: "#competitive-analysis", label: "Competitive Analysis" },
  { href: "#research", label: "Research & Testing" },
  { href: "#features", label: "Key Features" },
  { href: "#improvements", label: "Improvements" },
  { href: "#conclusion", label: "Conclusion" },
];

export default function StuddySpotter() {
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

  return (
    <div>
      <Head>
        <title>Ethan Dith | StuddySpotter</title>
        <meta
          name="description"
          content="StuddySpotter is a web app designed by Ethan Dith & Leonille Matunan to help students discover, rate, and share the best study locations. Find your ideal study spot with advanced filters, reviews, and a student-focused community."
        />
        <meta
          name="keywords"
          content="StuddySpotter, Ethan Dith, Leonille Matunan, study spots, student, UX design, web app, UI, research, usability, project, portfolio"
        />
        <meta name="author" content="Ethan Dith" />
        <meta property="og:title" content="Ethan Dith | StuddySpotter" />
        <meta
          property="og:description"
          content="Discover, rate, and share the best study locations with StuddySpotter. Designed by Ethan Dith for students seeking the perfect study environment."
        />
        <meta property="og:image" content="/images/StuddySpotter/Hero.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ethandith.com/projects/studdyspotter"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hidden lg:flex fixed bottom-8 right-8 z-50 items-center gap-2 px-5 py-3 rounded-full bg-foreground text-white border border-background font-bold shadow-lg hover:bg-gray-700 transition-colors up-botton"
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

        {/* Hero Section */}
        <div className="w-full flex flex-col items-center">
          <Image
            src="/images/StuddySpotter/Hero.png"
            alt="StuddySpotter Hero"
            className="w-full max-h-[1280px] object-cover border-b-4 border-gray-200 hero-border"
            draggable={false}
            width={1920}
            height={1280}
          />
        </div>

        {/* Overview */}
        <section id="overview" className="mt-12">
          <div className="flex flex-col md:flex-row gap-12 md:gap-44 mb-10 container mx-auto px-4">
            <div className="md:w-2/3">
              <h3 className="text-4xl font-bold mb-3">
                Find Your Ideal Study Spot
              </h3>
              <h5 className="text-xl">
                StuddySpotter is a web app designed to help students discover,
                rate, and share study locations, including cafes, libraries, and
                various other workspaces. It helps users to find their perfect
                spot by filtering based on crucial criteria, such as noise
                levels, outlet availability, and Wi-Fi, ultimately creating a
                personalized study experience.
              </h5>
              <div className="mt-4">
                <a
                  href="https://www.studdyspotter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-bold hover:underline"
                >
                  <span className="text-eyebrow">Live Site</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    className="ml-2 fill-eyebrow"
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
                <h5 className="font-bold mb-1 text-xl">Roles</h5>
                <ul className="mb-2 leading-loose list-none p-0 text-lg">
                  <li>
                    Ethan Dith,{" "}
                    <span className="font-bold">Lead Designer, Developer</span>
                  </li>
                  <li>
                    Leonille Matunan,{" "}
                    <span className="font-bold">Lead Developer, Designer</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-1 text-xl">Skills</h5>
                <ul className="mb-2 leading-loose list-none p-0 text-lg">
                  <li>UI/UX Design</li>
                  <li>User Research</li>
                  <li>Usability Testing</li>
                  <li>Web Development</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-1 text-xl">Project Duration</h5>
                <ul className="leading-loose list-none p-0 text-lg">
                  <li>Ongoing (BETA TESTING)</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/StuddySpotter/final_screens_mockup.jpg"
              alt="Final StuddySpotter App Screens Mockup"
              className="my-32"
              draggable={false}
              width={1920}
              height={1080}
            />
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="mt-12 container mx-auto px-4">
          <h6 className="text-eyebrow text-lg uppercase mb-2 font-semibold tracking-wider">
            The Problem
          </h6>
          <h2 className="font-bold text-4xl mb-4">
            Students struggle to find suitable study environments.
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <ul className="space-y-4 md:w-1/2">
              <li>
                <h5 className="text-xl">
                  <span className="text-eyebrow mr-2">&bull;</span>Students
                  often struggle to find ideal study locations that meet their
                  specific needs, like quiet zones, group friendly locations, or
                  a place with abundant power outlets.
                </h5>
              </li>
              <li>
                <h5 className="text-xl">
                  <span className="text-eyebrow mr-2">&bull;</span>Existing
                  generic review platforms lack specialized filters and
                  community insights crucial for students searching for study
                  spots.
                </h5>
              </li>
            </ul>
            <ul className="space-y-4 md:w-1/2">
              <li>
                <h5 className="text-xl">
                  <span className="text-eyebrow mr-2">&bull;</span>There's no
                  centralized, community-driven platform for students to
                  efficiently share and discover the best study environments
                  across different schools.
                </h5>
              </li>
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section id="solution" className="mt-30 container mx-auto px-4">
          <h6 className="text-eyebrow text-lg uppercase mb-2 font-semibold tracking-wider">
            The Solution
          </h6>
          <h2 className="font-bold text-4xl mb-4">
            Goals & Objectives: Empowering students to find their perfect spot.
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <ul className="space-y-4 md:w-1/2">
              <li>
                <h5 className="text-xl">
                  <span className="text-eyebrow mr-2">&bull;</span>Develop a
                  platform where students can efficiently discover, evaluate,
                  and contribute insights on study locations.
                </h5>
              </li>
            </ul>
            <ul className="space-y-4 md:w-1/2">
              <li>
                <h5 className="text-xl">
                  <span className="text-eyebrow mr-2">&bull;</span>Create
                  community for students to share real recommendations and
                  experiences.
                </h5>
              </li>
            </ul>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section
          id="competitive-analysis"
          className="mt-30 container mx-auto px-4"
        >
          <h6 className="text-eyebrow text-lg uppercase mb-2 font-semibold tracking-wider">
            Competitive Analysis
          </h6>
          <h2 className="font-bold text-4xl mb-4">
            Understanding the landscape and identifying opportunities.
          </h2>
          <h5 className="mb-12 text-xl">
            Before designing StuddySpotter, we conducted a thorough competitive
            analysis to understand existing solutions and identify gaps in the
            market. Our goal was to pinpoint how StuddySpotter could offer a
            uniquely tailored and superior experience for students seeking new
            study locations.
          </h5>
          <h5 className="font-bold mb-3 text-xl">
            Key Competitors & Our Differentiators:
          </h5>
          <ul className="space-y-4">
            <li>
              <h5 className="text-xl">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>Google Maps/Yelp:</strong> While these platforms offer
                location search and general reviews, they lack specialized
                filters (e.g., noise level, outlet availability, group-friendly)
                crucial for students. Their reviewed locations are broad, not
                focused on study environment specifics. StuddySpotter caters for{" "}
                <strong>student centric criteria</strong> and a community
                focused solely on study spots.
              </h5>
            </li>
            <li>
              <h5 className="text-xl">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>University-Specific Apps/Websites:</strong> Some
                universities have internal systems for campus study spaces, but
                these are usually limited to a single university and lack
                broader access to public spaces like cafes. They also rarely
                offer rating/review systems. StuddySpotter offers a{" "}
                <strong>nationwide scope with diverse location types</strong>{" "}
                and the ability to <strong>rate/review.</strong>
              </h5>
            </li>
          </ul>
          <h5 className="font-bold mt-12 mb-3 text-xl">
            StuddySpotter's Competitive Edge:
          </h5>
          <ul className="space-y-2">
            <li>
              <h5 className="text-xl">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>Hyper focused Niche:</strong> Dedicated solely to study
                locations (Cafe's, Libraries).
              </h5>
            </li>
            <li>
              <h5 className="text-xl">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>Detailed Filtering:</strong> Custom filters beyond basic
                amenities, catering to the basic student needs.
              </h5>
            </li>
            <li>
              <h5 className="text-xl">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>Community-Driven Content:</strong> User-generated
                ratings and reviews from a peer-to-peer perspective.
              </h5>
            </li>
            <li>
              <h5 className="text-xl">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>Cross-Campus & Beyond:</strong> Ability to switch
                between university campuses and explore external study spots.
              </h5>
            </li>
          </ul>
        </section>

        {/* Research & Testing */}
        <section id="research" className="mt-30 container mx-auto px-4">
          <hr className="mb-12 mt-24" />
          <h6 className="text-eyebrow text-lg uppercase mb-2 font-semibold tracking-wider">
            Research & Testing
          </h6>
          <h2 className="font-bold text-4xl mb-4">
            Understanding user needs and validating our design.
          </h2>
          <h5 className="mb-12 text-xl">
            To ensure StuddySpotter truly meets the needs of students, we
            conducted extensive user research throughout the design and
            development phases. Our methodology included surveys, interviews,
            and both moderated and unmoderated usability tests.
          </h5>
          <h5 className="font-bold mb-3 text-xl">
            Key Research Findings: Assumptions Validated
          </h5>
          <ul className="space-y-4">
            <li>
              <h5 className="text-xl mb-10">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>Student Priorities:</strong> Students consistently
                prioritize{" "}
                <span className="font-bold">
                  Wi-Fi quality, outlet availability, and ambient noise levels
                </span>{" "}
                when choosing a study spot. <br /> <br />
                Validated. 7/7 students.
              </h5>
            </li>
            <li>
              <h5 className="text-xl mb-10">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>Collaboration & Amenities:</strong> Many students
                actively seek locations suitable for{" "}
                <span className="font-bold">group collaboration</span> or those
                offering convenient{" "}
                <span className="font-bold">food and beverage options</span>.{" "}
                <br />
                <br />
                Validated. 6/7 students.
              </h5>
            </li>
            <li>
              <h5 className="text-xl">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>Tailored Review Experience:</strong> There's a demand
                for a{" "}
                <span className="font-bold">"Yelp-like" review experience</span>{" "}
                specifically tailored to the unique criteria of study
                environments, allowing them to see real reviews from real
                students. <br />
                <br />
                Validated. 5/7 students.
              </h5>
            </li>
          </ul>
        </section>

        {/* Key Features */}
        <section id="features" className="mt-30 container mx-auto px-4">
          <hr className="my-12" />
          <h6 className="text-eyebrow text-xl uppercase mb-2 font-semibold tracking-wider">
            Key Features
          </h6>
          <h2 className="font-bold text-4xl mb-4">
            Core functionalities for a seamless experience.
          </h2>
          <h5 className="mb-4 text-xl">
            StuddySpotter is built around a strong set of features designed to
            make finding the perfect study spot effortless and efficient,
            empowering students to find their optimal learning environment.
          </h5>
          <h5 className="font-bold mt-10 mb-4 text-xl">
            Key Features Implemented:
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Feature 1 */}
            <div className="p-10 border rounded-lg shadow-sm flex flex-col items-center key-features bg-foreground/80 text-background">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m20,2H4c-.55,0-1,.45-1,1v2c0,.22.07.43.2.6l5.8,7.73v7.67c0,.35.18.67.47.85.16.1.34.15.53.15.15,0,.31-.04.45-.11l4-2c.34-.17.55-.52.55-.89v-5.67l5.8-7.73c.13-.17.2-.38.2-.6v-2c0-.55-.45-1-1-1Zm-1,2.67l-5.8,7.73c-.13.17-.2.38-.2.6v5.38l-2,1v-6.38c0-.22-.07-.43-.2-.6l-5.8-7.73v-.67h14v.67Z"></path>
              </svg>
              <h5 className="font-bold mt-3 mb-2 text-xl">Advanced Filters</h5>
              <h6 className="text-lg text-center">
                Quickly narrow down options by noise level, outlet availability,
                Wi-Fi quality, group-friendliness, food service, and parking.
              </h6>
            </div>
            {/* Feature 2 */}
            <div className="p-10 border rounded-lg shadow-sm flex flex-col items-center key-features bg-foreground/80 text-background">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m4.83 12.49 2.04 1.83-.83 2.9-1 3.5c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02l3-2L12 18.19l2.45 1.63 3 2a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1-3.5-.83-2.9 2.04-1.83 2.5-2.25c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-3.15-.25-2.56-.2-2.47-5.46a.998.998 0 0 0-1.82 0L8.61 8.05l-2.56.2-3.15.25c-.4.03-.74.3-.87.68s-.02.8.28 1.06l2.5 2.25Zm1.39-2.25 2.52-.2.62-.05.59-.05.84-1.86 1.2-2.66 1.2 2.66.84 1.86.59.05.62.05 2.52.2.83.07-.77.69-2.5 2.25-.46.42.17.6 1.25 4.38-3.74-2.49-.55-.37-.55.37-3.74 2.49 1.25-4.38.17-.6-.46-.42L6.16 11l-.77-.69z"></path>
              </svg>
              <h5 className="font-bold text-xl mt-3 mb-2">Ratings & Reviews</h5>
              <h6 className="text-lg text-center">
                Share detailed feedback and ratings for each study spot, helping
                your peers make informed decisions.
              </h6>
            </div>
            {/* Feature 3 */}
            <div className="p-10 border rounded-lg shadow-sm flex flex-col items-center key-features bg-foreground/80 text-background">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.07.41 1.48 0s.41-1.07 0-1.48L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <h5 className="font-bold text-xl mt-3 mb-2">Powerful Search</h5>
              <h6 className="text-lg text-center">
                Easily search for any study location by name, city, or general
                keywords across different regions.
              </h6>
            </div>
          </div>
          <h2 className="font-bold mt-10 mb-4 text-xl">Additional Features:</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <ul className="space-y-4 md:w-1/2">
              <li>
                <h5 className="text-xl">
                  <span className="text-eyebrow mr-2">&bull;</span>
                  <strong>User Authentication & Profiles:</strong> Securely log
                  in and personalize your experience, managing your favorite
                  spots and contributions.
                </h5>
              </li>
              <li>
                <h5 className="text-xl">
                  <span className="text-eyebrow mr-2">&bull;</span>
                  <strong>Bookmark Favorite Study Spots:</strong> Save your
                  go-to locations for quick and easy access whenever you need
                  them.
                </h5>
              </li>
              <li>
                <h5 className="text-xl">
                  <span className="text-eyebrow mr-2">&bull;</span>
                  <strong>Contribute New Locations:</strong> Help grow the
                  community by easily adding new study spots to the database.
                </h5>
              </li>
            </ul>
            <ul className="space-y-4 md:w-1/2">
              <li>
                <h5 className="text-xl">
                  <span className="text-eyebrow mr-2">&bull;</span>
                  <strong>Location Sorting:</strong> Quickly organize search
                  results by relevance, distance, or ratings to find the best
                  fit.
                </h5>
              </li>
              <li>
                <h5 className="text-xl">
                  <span className="text-eyebrow mr-2">&bull;</span>
                  <strong>Group Study Sessions:</strong> Create and invite
                  friends to collaborative study sessions at your chosen
                  location, easily coordinating your study plans.
                </h5>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="font-bold mb-4 text-xl">
              Initial Screens: First Concepts.
            </h2>
            <h5 className="mb-10 text-xl">
              These screens represent our initial design concepts, translating
              early research insights into a tangible user interface. They
              served as a foundation for further iteration and refinement based
              on user feedback.
            </h5>
            <div className="flex flex-col gap-6 mx-auto">
              <Image
                src="/images/StuddySpotter/StuddySpotterMockup1.jpg"
                alt="Initial App Screen 1"
                className="rounded-lg w-full h-full shadow mb-4 md:mb-0"
                draggable={false}
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </section>

        {/* Improvements */}
        <section id="improvements" className="mt-30 container mx-auto px-4">
          <hr className="my-12" />
          <h6 className="text-eyebrow text-lg uppercase mb-2 font-semibold tracking-wider">
            Testing + Improvements
          </h6>
          <h2 className="font-bold text-4xl mb-4">
            Iterating on user feedback for continuous enhancement.
          </h2>
          <h5 className="mb-10 text-xl">
            After usability testing with{" "}
            <span className="font-bold text-xl">10+ students</span>, both
            moderated and unmoderated, we gathered invaluable insights that
            helped guide our iterative design process. We specifically focused
            on enhancing the user experience and addressing pain points
            identified during testing to create a more seamless and intuitive
            application.
          </h5>
          <h4 className="text-eyebrow mb-3 font-bold text-xl">
            Usability Testing Insights from Maze:
          </h4>
          <ul className="space-y-3 mb-24">
            <li>
              <h6 className="text-xl">
                <span className="text-eyebrow mr-2">1.</span>
                <strong>Writing a Review:</strong> The flow for writing a review
                was largely intuitive, with a{" "}
                <strong>83% direct success rate</strong>. Minor friction points
                were identified in the initial rating selection process, which
                we'll address in the next iteration.
              </h6>
            </li>
            <li>
              <h6 className="text-xl">
                <span className="text-eyebrow mr-2">2.</span>
                <strong>Switching Campuses:</strong> Users found the "Switch
                Campus" functionality easily accessible, achieving a{" "}
                <strong>100% success rate</strong>. The clear labeling and
                prominent placement contributed to this high completion rate.
              </h6>
            </li>
            <li>
              <h6 className="text-xl">
                <span className="text-eyebrow mr-2">3.</span>
                <strong>Bookmarking a Study Location:</strong> Bookmarking a
                favorite spot was straightforward for{" "}
                <strong>83% of testers</strong>. A few users initially looked
                for the bookmark icon in unexpected places, suggesting a need
                for visual consistency.
              </h6>
            </li>
            <li>
              <h6 className="text-xl">
                <span className="text-eyebrow mr-2">4.</span>
                <strong>Filtering for a Study Spot:</strong> The filtering
                system demonstrated strong effectiveness, with{" "}
                <strong>92% of users successfully applying filters</strong> to
                find specific study spots. The ability to combine multiple
                filters was particularly well-received.
              </h6>
            </li>
          </ul>
          <h5 className="font-bold mt-4 mb-3 text-xl">
            Key Improvements Made:
          </h5>
          <ul className="space-y-3 mb-24">
            <li>
              <h5 className="text-xl">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>Enhanced Filter & Search Accessibility:</strong> The
                location of filtering and search controls was optimized.
                Previously less accessible, these features were redesigned to be
                more prominent and intuitive, directly addressing user confusion
                and improving discoverability.
              </h5>
            </li>
            <li>
              <h5 className="text-xl">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>Moved Review & Bookmark Placement:</strong> The ability
                to write a review and bookmark a study location was moved from
                below the map and place information to a more prominent position
                above, making these key actions easier for users to find and
                utilize.
              </h5>
            </li>
            <li>
              <h5 className="text-xl">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>Optimized Performance:</strong> Focused on reducing
                loading times and improving overall app responsiveness for a
                smoother user journey, including the implementation of{" "}
                <span className="font-bold">skeleton loading</span> for a better
                perceived performance experience.
              </h5>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row gap-12 mb-12">
            <div className="md:w-3/5">
              <Image
                src="/images/StuddySpotter/filter_redesign.jpg"
                alt="Search and Filter Redesign Example"
                className="rounded-lg w-full h-full shadow mb-4"
                draggable={false}
                width={1920}
                height={1080}
              />
            </div>
            <div className="md:w-2/5 flex flex-col justify-center">
              <h5 className="font-bold mb-3 text-xl">
                Example: Search & Filter Redesign
              </h5>
              <ul className="space-y-2">
                <li>
                  <h6 className="text-xl">
                    <span className="text-eyebrow mr-2">&bull;</span>Initially,
                    our search bar and filters were{" "}
                    <span className="font-bold">hidden or less accessible</span>
                    , leading to significant user confusion and difficulty in
                    finding specific study spots.
                  </h6>
                </li>
                <li>
                  <h6 className="text-xl">
                    <span className="text-eyebrow mr-2">&bull;</span>We
                    redesigned the interface to make the search bar more
                    prominent and refined the filter system to be{" "}
                    <span className="font-bold">intuitive</span> and{" "}
                    <span className="font-bold">easily discoverable</span>,
                    allowing users to quickly and confidently apply their
                    desired criteria.
                  </h6>
                </li>
                <li>
                  <h6 className="text-xl">
                    <span className="text-eyebrow mr-2">&bull;</span>Clear
                    visual cues for active filters were added, ensuring users
                    always know their current selections at a glance and can
                    easily modify their search.
                  </h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 mb-24">
            <div className="md:w-3/5">
              <Image
                src="/images/StuddySpotter/review_bookmark_redesign.jpg"
                alt="Review and Bookmark Button Redesign Example"
                className="rounded-lg w-full h-full shadow mb-4"
                draggable={false}
                width={1920}
                height={1080}
              />
            </div>
            <div className="md:w-2/5 flex flex-col justify-center">
              <h5 className="font-bold mb-3 text-xl">
                Example: Review & Bookmark Placement
              </h5>
              <ul className="space-y-2">
                <li>
                  <h6 className="text-xl">
                    <span className="text-eyebrow mr-2">&bull;</span>Initially,
                    the review and bookmark options were placed below the study
                    spot information and map, making them difficult for users to
                    discover quickly because its below the device viewheight.
                  </h6>
                </li>
                <li>
                  <h6 className="text-xl">
                    <span className="text-eyebrow mr-2">&bull;</span>Based on
                    user feedback, we moved these crucial interaction points to
                    a more prominent position directly above the study spot
                    details.
                  </h6>
                </li>
                <li>
                  <h6 className="text-xl">
                    <span className="text-eyebrow mr-2">&bull;</span>This
                    repositioning significantly improved the discoverability and
                    engagement with the rating, review, and bookmarking
                    functionalities.
                  </h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="font-bold mb-4 text-4xl">
              Current Screens: Iteration 2 (Currently in Testing).
            </h2>
            <h5 className="mb-10 text-xl">
              These are the latest designs, reflecting further improvements
              based on ongoing usability testing. They incorporate refined
              visual elements and advanced features, bringing StuddySpotter
              closer to its final vision.
            </h5>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow relative">
              <video
                ref={videoRef}
                className="w-full h-auto cursor-pointer"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/images/StuddySpotter/StuddySpotterMockup1.jpg"
                onClick={handleVideoClick}
                onPlay={handlePlay}
                onPause={handlePause}
              >
                <source
                  src="/images/StuddySpotter/StuddySpotterScreens.mp4"
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
                    className="drop-shadow-lg"
                  >
                    <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.5)" />
                    <polygon points="10,8 16,12 10,16" fill="white" />
                  </svg>
                </div>
              )}
            </div>
          </div>
          <h2 className="font-bold text-4xl mb-4 mt-24">
            Next Steps: Evolving StuddySpotter.
          </h2>
          <ul className="space-y-4 mb-8">
            <li>
              <h5 className="text-xl">
                <span className="text-eyebrow mr-2 text-lg">&bull;</span>
                <strong>Student Ambassador Program:</strong> Launch a program to
                recruit dedicated student ambassadors at each university who
                will help curate local study spots, organize community events,
                and serve as direct liaisons for feedback and growth.
              </h5>
            </li>
            <li>
              <h5 className="text-xl">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>Gamification:</strong> Introduce engaging activities
                like badges or points for contributing insightful reviews and
                discovering new study spots, encouraging active participation.
              </h5>
            </li>
            <li>
              <h5 className="text-xl">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>School-Specific Integrations:</strong> Explore
                partnerships with universities to integrate campus maps,
                building layouts, and specific student resources directly into
                the app for a more tailored experience.
              </h5>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mt-30 container mx-auto px-4">
          <hr className="mt-30 mb-12" />
          <h6 className="text-eyebrow uppercase mb-2 text-lg font-semibold tracking-wider">
            Conclusion + Lessons Learned
          </h6>
          <h2 className="font-bold text-4xl mb-4">
            Key takeaways from the StuddySpotter journey.
          </h2>
          <h5 className="mb-4 text-xl">
            Developing StuddySpotter has been an incredibly insightful
            experience, highlighting the importance of continuous user feedback
            in the product development lifecycle. This journey reinforced my
            understanding of how iterative design, can significantly impact a
            product's usability, and success.
          </h5>
          <ul className="space-y-4 mb-12">
            <li>
              <h5 className="text-xl">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>The Power of Iteration:</strong> Even with thorough
                initial research, real-world usability testing consistently
                reveals unforeseen pain points. Dedicating enough time for
                multiple testing cycles and iterative design is crucial for
                creating a user centered product.
              </h5>
            </li>
            <li>
              <h5 className="text-xl">
                <span className="text-eyebrow mr-2">&bull;</span>
                <strong>Balancing Features:</strong> It's tempting to add a many
                different features, but prioritizing core functionalities and
                perfecting them before expanding is key to making a good
                product. This prevents bloat and ensures a solid user
                experience.
              </h5>
            </li>
          </ul>
          <div className="text-4xl my-12">
            <h3 className="font-bold mb-8">Sticker Sheet</h3>
            <Image
              src="/images/StuddySpotter/StuddySpotterStickerSheet.jpg"
              alt="StuddySpotter Sticker Sheet"
              className="mx-auto w-full h-full shadow rounded-lg"
              draggable={false}
              width={1920}
              height={1080}
            />
          </div>
          {/* Next Projects */}
          <section className="container mx-auto px-4">
            {/* Next Projects */}
            <div className="mt-20 mb-10">
              <h5 className="mb-5 font-bold text-xl">Explore other work!</h5>
              <div className="flex flex-col md:flex-row gap-8 w-full">
                <a href="/projects/tourify" className="block w-full md:w-1/2">
                  <Image
                    src="/images/Tourify/TOURIFY.jpg"
                    alt="MindfulU"
                    className="w-full h-full object-cover rounded-lg border-2 border-gray-400 shadow"
                    draggable={false}
                    width={1920}
                    height={1080}
                  />
                </a>
                <a
                  href="/projects/mindfulu"
                  className="block w-full md:w-1/2"
                >
                  <Image
                    src="/images/MU/mulogo.jpg"
                    alt="MindfulU"
                    className="w-full h-full  object-cover rounded-lg border-2 border-blue-400 shadow"
                    draggable={false}
                    width={1920}
                    height={1080}
                  />
                </a>
              </div>
            </div>
          </section>
        </section>
      </section>
    </ div>
  );
}
