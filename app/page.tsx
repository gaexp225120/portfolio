"use client";

import { useRef } from "react";
import SideNavBar from "@/components/SideNavBar";
import Introduction from "@/components/Introduction";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
// import ProgressIndicator from "@/components/ProgressIndicator";

export default function Home() {
  const sideBarRefs = useRef<{ [key: string]: HTMLDivElement | null }>({
    about: null,
    experience: null,
    toolkit: null,
    project: null,
  });

  return (
    <div className="min-h-screen bg-darkBlue px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex flex-col lg:flex-row lg:justify-between lg:gap-4 max-w-screen-xl mx-auto">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <SideNavBar sideBarRefs={sideBarRefs} />
        </header>
        <main className="lg:w-1/2 lg:py-24">
          {/* <ProgressIndicator /> */}
          <section
            ref={(el: HTMLDivElement | null) => {
              sideBarRefs.current.about = el;
            }}
            id="about"
            className="scroll-mt-16 lg:scroll-mt-24"
          >
            <Introduction />
          </section>
          <section
            ref={(el: HTMLDivElement | null) => {
              sideBarRefs.current.experience = el;
            }}
            id="experience"
            className="scroll-mt-16 lg:scroll-mt-18"
          >
            <Experience />
          </section>
          <section
            ref={(el: HTMLDivElement | null) => {
              sideBarRefs.current.toolkit = el;
            }}
            id="toolkit"
          >
            <TechStack />
          </section>
        </main>
      </div>
      <footer className="py-12">
        <section
          ref={(el: HTMLDivElement | null) => {
            sideBarRefs.current.skill = el;
          }}
          id="project"
          className="max-w-[600px]  mx-auto"
        >
          <Contact />
        </section>
      </footer>
    </div>
  );
}
