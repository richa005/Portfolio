"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Education", link: "#education" },
];

export default function Navbar() {
  return <FloatingNav navItems={navItems} />;
}
