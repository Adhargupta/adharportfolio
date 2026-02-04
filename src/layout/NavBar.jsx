import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../component/Button'

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contacts" },
];

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // Background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced Scroll Spy Logic
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navLinks.map(link => {
        const id = link.href.replace("#", "");
        const element = document.querySelector(`#${id}`);
        if (!element) return null;
        
        const rect = element.getBoundingClientRect();
        return {
          id,
          element,
          top: rect.top,
          bottom: rect.bottom,
          height: rect.height
        };
      }).filter(Boolean);

      // If no sections found, return
      if (sections.length === 0) return;

      // Find which section is currently in view
      // Priority: section that has its top within the upper 40% of viewport
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.3; // 30% from top

      let newActiveSection = null;

      // Check each section
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        
        // If section top is above trigger point and bottom is below it
        if (section.top <= triggerPoint && section.bottom > triggerPoint) {
          newActiveSection = section.id;
          break;
        }
        
        // If we're past all sections, activate the last one
        if (i === sections.length - 1 && section.top < triggerPoint) {
          newActiveSection = section.id;
        }
      }

      // If we're above all sections (in hero), set to null
      if (sections[0].top > triggerPoint) {
        newActiveSection = null;
      }

      setActiveSection(newActiveSection);
    };

    // Run on scroll
    window.addEventListener("scroll", handleScrollSpy);
    // Run on load
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  function mobileMenuClicked() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  function handleNavClick(e, id) {
    e.preventDefault();
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  }

  return (
    <div
      className={`text-white fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          AG<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 border border-white/10">
            {navLinks.map((link, index) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-300
                    ${
                      isActive
                        ? "text-white bg-gray-700"
                        : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <Button className="sm">
            <a href="mailto:adhargpt@gmail.com">
              Contact Me
            </a>
          </Button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={mobileMenuClicked}
          className="md:hidden p-2 text-white cursor-pointer"
        >
          {isMobileMenuOpen ? <X /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{ display: isMobileMenuOpen ? "block" : "none" }}
        className="md:hidden glass-strong animate-fade-in"
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link, index) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleNavClick(e, id)}
                className={`text-lg py-2 transition-all duration-300
                  ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-gray-400 hover:text-white"
                  }
                `}
              >
                {link.label}
              </a>
            );
          })}

          <Button onClick={() => setIsMobileMenuOpen(false)}>
            <a href="mailto:adhargpt@gmail.com">
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;