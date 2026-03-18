"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/apps", label: "Apps" },
  ];

  return (
    <nav className="bg-cream border-b border-navy/10">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpeg" alt="AZE Apps" width={40} height={40} className="rounded" />
          <span className="font-serif text-navy text-xl font-bold">AZE Apps</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-navy hover:text-navy-light font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-navy"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-navy/10 bg-cream">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-navy hover:bg-navy/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
