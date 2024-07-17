import React from "react";
import TitleArea from "./TitleArea";
import { SideNavBarProps } from "../Interface/SideNavBarInterface";

const navigationItems: { href: string; label: string }[] = [
  { href: "about", label: "About" },
  { href: "skill", label: "My Skill" },
  { href: "experience", label: "Experience" },
  { href: "project", label: "Projects" },
];

const SideNavBar: React.FC<SideNavBarProps> = ({ sideBarRefs }) => {
  const handleClick = (section: string) => {
    const element = sideBarRefs.current?.[section];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <TitleArea />
      <nav className="nav hidden lg:block" aria-label="In-page jump links">
        <ul className="mt-16 w-max">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <button onClick={() => handleClick(item.href)}>
                <div className="group flex items-center py-3 active">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {item.label}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNavBar;
