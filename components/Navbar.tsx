"use client";
import { cn } from "@/lib/utils";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Introduction from "./introduction";
import { CenteredWithLogo } from "./Footer";

// Define types for nav items
interface NavItem {
  name: string;
  link: string;
  children?: NavItem[];
}

export function NavbarWithChildren() {
  return (
    <div className="w-full bg-neutral-100 dark:bg-neutral-900 py-20 px-2">
      <Navbar />
      <div className="h-full mt-8 w-full flex flex-col items-center justify-center gap-10">
        <Introduction />
        <CenteredWithLogo />
      </div>
    </div>
  );
}

const Navbar = () => {
  const navItems: NavItem[] = [
    {
      name: "Services",
      link: "#",
      children: [
        { name: "Web Development", link: "#" },
        { name: "Interface Design", link: "#" },
        { name: "Search Engine Optimization", link: "#" },
        { name: "Branding", link: "#" },
      ],
    },
    {
      name: "Products",
      link: "#",
      children: [
        { name: "Algochurn", link: "#" },
        { name: "Tailwind Master Kit", link: "#" },
      ],
    },
    {
      name: "Pricing",
      link: "#",
      children: [
        { name: "Hobby", link: "#" },
        { name: "Individual", link: "#" },
        { name: "Team", link: "#" },
      ],
    },
  ];

  return (
    <div className="w-full">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  );
};

interface NavProps {
  navItems: NavItem[];
}

const DesktopNav: React.FC<NavProps> = ({ navItems }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "hidden lg:flex items-center justify-between py-4 px-6 max-w-7xl mx-auto bg-white dark:bg-neutral-950 rounded-full shadow-md",
        "sticky top-4 inset-x-0 z-50"
      )}
    >
      <Logo />
      <nav className="flex space-x-8">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => setActive(item.name)}
            onMouseLeave={() => setActive(null)}
          >
            <Link
              href={item.link}
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              {item.name}
            </Link>
            {active === item.name && item.children && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute left-0 mt-2 w-48 bg-white dark:bg-neutral-900 rounded-md shadow-lg py-2"
              >
                {item.children.map((child) => (
                  <Link
                    key={child.name}
                    href={child.link}
                    className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    {child.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </nav>
      <button className="px-6 py-2 text-sm font-bold rounded-full bg-black dark:bg-white dark:text-black text-white shadow">
        Book a call
      </button>
    </div>
  );
};

interface MobileNavItemProps {
  item: NavItem;
}

const MobileNav: React.FC<NavProps> = ({ navItems }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative flex lg:hidden items-center justify-between py-4 px-6 bg-white dark:bg-neutral-950 shadow-md">
      <Logo />
      <button
        onClick={() => setOpen(!open)}
        className="text-black dark:text-white"
      >
        {open ? <IconX size={24} /> : <IconMenu2 size={24} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 shadow-md origin-top z-40"
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <MobileNavItem key={item.name} item={item} />
              ))}
              <button className="mt-4 mx-4 px-6 py-2 text-sm font-bold rounded-full bg-black dark:bg-white dark:text-black text-white shadow">
                Book a call
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNavItem: React.FC<MobileNavItemProps> = ({ item }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="px-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
      >
        {item.name}
        {item.children && <IconChevronDown size={16} />}
      </button>
      <AnimatePresence>
        {open && item.children && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="pl-4 overflow-hidden"
          >
            {item.children.map((child) => (
              <Link
                key={child.name}
                href={child.link}
                className="block py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
              >
                {child.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo-computer.png" alt="logo" width={30} height={30} />
      <span className="text-lg font-semibold text-black dark:text-white">
        ruizTechServices<span className="blinking">|</span>
      </span>
    </Link>
  );
};
