import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { Menu, X, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NavItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuopend, setismenuopened] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight nav item based on scroll position
  useEffect(() => {
    const handleActive = () => {
      const sections = NavItems.map(item => document.querySelector(item.href));
      const scrollPos = window.scrollY + 80;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActive(NavItems[i].name);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleActive);
    return () => window.removeEventListener('scroll', handleActive);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuopend) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuopend]);

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled
        ? "py-3 bg-background/80 backdrop-blur-md shadow-lg border-b border-gradient-to-r from-primary/40 via-purple-400/30 to-pink-400/30"
        : "py-5"
    )}>
      <div className="container flex items-center justify-between relative">
        <a className="text-xl font-bold flex items-center gap-2 group select-none" href="#hero">
          <span className="relative z-10 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
            Alok Dwivedi's
          </span>
          <span className="text-glow text-foreground">Portfolio</span>
          <Sparkles className="ml-1 h-6 w-6 text-primary animate-pulse group-hover:rotate-12 transition-transform" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {NavItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "relative text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold px-2 py-1 group",
                active === item.name && "text-primary"
              )}
            >
              <span className="flex items-center gap-1">
                {item.name}
                {active === item.name && (
                  <span className="inline-block animate-bounce text-pink-500 text-lg">★</span>
                )}
              </span>
              {/* Animated underline for active link */}
              <span className={cn(
                "absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full transition-all duration-300 scale-x-0 group-hover:scale-x-100",
                active === item.name && "scale-x-100"
              )}></span>
            </a>
          ))}
        </div>

        {/* Theme Toggle - Hide when mobile menu is open */}
        <ThemeToggle hide={isMenuopend} />

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setismenuopened((prev) => !prev)}
          className='md:hidden p-2 text-foreground z-50'
          aria-label={isMenuopend ? "Close Menu" : "Open Menu"}
        >
          {isMenuopend ? <X size={28} className="animate-spin-slow" /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Menu */}
        <div className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-500 md:hidden",
          isMenuopend ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-95"
        )}>
          <button
            onClick={() => setismenuopened(false)}
            className="absolute top-6 right-6 p-2 text-foreground"
            aria-label="Close Menu"
          >
            <X size={32} />
          </button>
          <div className="flex flex-col space-y-8 text-2xl">
            {NavItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "relative text-foreground/80 hover:text-primary transition-colors duration-300 font-bold px-4 py-2 group",
                  active === item.name && "text-primary"
                )}
                onClick={() => setismenuopened(false)}
              >
                <span className="flex items-center gap-1">
                  {item.name}
                  {active === item.name && (
                    <span className="inline-block animate-bounce text-pink-500 text-lg">★</span>
                  )}
                </span>
                <span className={cn(
                  "absolute left-0 -bottom-1 h-1 w-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full transition-all duration-300 scale-x-0 group-hover:scale-x-100",
                  active === item.name && "scale-x-100"
                )}></span>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Animated gradient border */}
      <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 blur-sm opacity-60"></div>
      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-spin-slow {
          animation: spin 1.5s linear infinite;
        }
      `}</style>
    </nav>
  );
}
