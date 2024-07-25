"use client";

import { useRef } from "react";
import SideNavBar from "@/components/SideNavBar";
import Introduction from "@/components/Introduction";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import CopyRight from "@/components/CopyRight";
// import ProgressIndicator from "@/components/ProgressIndicator";

export default function Home() {
  const sideBarRefs = useRef<{ [key: string]: HTMLDivElement | null }>({
    about: null,
    experience: null,
    toolkit: null,
    project: null,
    contact: null,
  });
  return (
    <div>
      <div className="bg-custom-gradient px-5 py-12 font-sans sm:px-6 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4 max-w-screen-xl mx-auto">
          <header className="lg:sticky lg:top-0 lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:py-24 w-full">
            <SideNavBar sideBarRefs={sideBarRefs} />
          </header>
          <main className="lg:w-1/2 lg:py-24 w-full">
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
              className="scroll-mt-16 lg:scroll-mt-18"
            >
              <TechStack />
            </section>
          </main>
        </div>
      </div>
      <footer className="bg-contactBg p-5 sm:p-12 w-full">
        <section
          ref={(el: HTMLDivElement | null) => {
            sideBarRefs.current.contact = el;
          }}
          id="contact"
          className="mx-auto"
        >
          <Contact />
        </section>
        <section
          ref={(el: HTMLDivElement | null) => {
            sideBarRefs.current.skill = el;
          }}
          id="copy-right"
          className="mx-auto"
        >
          <CopyRight />
        </section>
      </footer>
    </div>
  );
}
