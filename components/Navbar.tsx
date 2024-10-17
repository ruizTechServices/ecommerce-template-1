"use client";

// Import necessary libraries and components
import { cn } from "@/lib/utils";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Introduction from "./introduction";
import { CenteredWithLogo } from "./Footer";

// Import Shadcn UI components
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Define types for navigation items
interface NavItem {
  name: string;
  link: string;
  children?: NavItem[];
}

// Main component that includes the Navbar and other sections
export function NavbarWithChildren() {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-20 px-2">
      <Navbar /> 
      {/* Navbar component */}
      <div className="h-full mt-8 w-full flex flex-col items-center justify-center gap-10">
        <Introduction /> {/*you can remove this if you want*/}
        <CenteredWithLogo />{/*you can remove this if you want*/}
      </div>
    </div>
  );
}

// Navbar component that switches between desktop and mobile navigation
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

// Desktop navigation component
const DesktopNav: React.FC<NavProps> = ({ navItems }) => {
  return (
    <div
      className={cn(
        "hidden lg:flex items-center justify-between py-4 px-6 max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-full shadow-md",
        "sticky top-4 inset-x-0 z-50"
      )}
    >
      <Logo />
      <nav className="flex space-x-8">
        {navItems.map((item) => (
          <div key={item.name} className="relative group">
            {item.children ? (
              // Use Shadcn UI DropdownMenu for items with children
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                    aria-haspopup="true"
                  >
                    {item.name}
                    <IconChevronDown size={16} className="ml-1" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white dark:bg-gray-800">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link href={child.link} className="w-full">
                        {child.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                href={item.link}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
      <Button
        variant="default"
        className="px-6 py-2 text-sm font-bold rounded-full"
      >
        Book a call
      </Button>
    </div>
  );
};

interface MobileNavItemProps {
  item: NavItem;
}

// Mobile navigation component
const MobileNav: React.FC<NavProps> = ({ navItems }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative flex lg:hidden items-center justify-between py-4 px-6 bg-white dark:bg-gray-800 shadow-md">
      <Logo />
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-700 dark:text-gray-300 focus:outline-none"
        aria-label="Toggle menu"
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
            className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-md origin-top z-40"
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <MobileNavItem key={item.name} item={item} />
              ))}
              <Button
                variant="default"
                className="mt-4 mx-4 px-6 py-2 text-sm font-bold rounded-full"
              >
                Book a call
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Mobile navigation item component
const MobileNavItem: React.FC<MobileNavItemProps> = ({ item }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="px-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
        aria-expanded={open}
        aria-controls={`mobile-menu-${item.name}`}
      >
        {item.name}
        {item.children && <IconChevronDown size={16} />}
      </button>
      <AnimatePresence>
        {open && item.children && (
          <motion.div
            id={`mobile-menu-${item.name}`}
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
                className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
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

// Logo component
const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo-computer.png" alt="Logo" width={30} height={30} />
      <span className="text-lg font-semibold text-gray-900 dark:text-white">
        ruizTechServices<span className="animate-pulse">|</span>
      </span>
    </Link>
  );
};
