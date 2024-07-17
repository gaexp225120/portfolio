"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import Image from "next/image";
import logo from "../public/logo.svg";
import logoHover from "../public/logo-hover.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation = [
  { href: "/About", name: "About Me", current: false },
  { href: "/project", name: "Project", current: false },
  { href: "/Resume", name: "Resume", current: false },
  { href: "/Contact", name: "Contact me", current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function NavBarMobile() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Disclosure
      as="nav"
      className="relative bg-navBarColor sm:shadow-customShadow"
    >
      <div className="mx-auto container px-8 z-10">
        <div className="relative flex items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:invisible">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-pureBlack hover:bg-textPurple hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center ">
            <div
              className="flex flex-1 justify-center sm:justify-start cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={isHovered ? logoHover : logo}
                alt="Logo"
                layout="fixed"
                width={30}
                height={30}
              />
            </div>
            <div className="invisible sm:ml-6 sm:visible">
              <div className="flex items-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? " text-textPurple"
                        : "text-pureBlack  hover:text-textPurple",
                      "text-[18px] font-bold p-8 "
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-textPurple text-pureBlack"
                  : "text-pureBlack hover:bg-hoverPurple hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
