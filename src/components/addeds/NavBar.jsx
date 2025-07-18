import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

const NavItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuopend,setismenuopened]=useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
    )}>
      <div className="container flex items-center justify-between">
       <a className="text-xl font-bold flex items-center gap-2 group select-none" href="#hero">
          <span className="relative z-10 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
            Alok Dwivedi's
          </span>
          <span className="text-glow text-foreground">Portfolio</span>
          <Sparkles className="ml-1 h-6 w-6 text-primary animate-pulse group-hover:rotate-12 transition-transform" />
        </a>

        {/* Desktop Nav */}
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
        {/*mobilenav*/}
        <button onClick={()=>setismenuopened((prev)=>!prev)}
            className='md:hidden p-2 text-foreground z-50'
            aria-label={isMenuopend? "Close Menu":"Open Menu"}
           >{isMenuopend ? <X sixe={24}/>: <Menu size={24}/>}</button>
        <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuopend ? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"
        )}>
         <div className="flex flex-col  space-y-8 text-xl">
          {NavItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transiction-colors duration-300"
              onClick={()=>setismenuopened(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
        </div>
      </div>
    </nav>
  );
}
