import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  // Language options
  const languages = [
    { code: "EN", name: "English" },
    { code: "DE", name: "German" },
    { code: "FR", name: "French" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { href: "#about", label: "About", ariaLabel: "Go to About page" },
    {
      href: "#experience",
      label: "Experience",
      ariaLabel: "View my experience",
    },
    { href: "#skills", label: "Skills", ariaLabel: "See my skills" },
    { href: "#projects", label: "Projects", ariaLabel: "Browse my projects" },
    {
      href: "#contact",
      label: "Contact me",
      ariaLabel: "Get in touch with me",
    },
  ];

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (langCode) => {
    setSelectedLanguage(langCode);
    setIsLanguageDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  };

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = "unset";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isLanguageDropdownOpen &&
        !event.target.closest(".language-selector")
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLanguageDropdownOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  `}
      role="navigation"
      aria-label="Main navigation"
    >
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-white text-xl sm:text-2xl font-bold hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
              aria-label="Mukund Vekariya - Data Engineer and Data Analyst"
            >
              <span>Mukund Vekariya</span>
              <span className="block text-sm font-normal text-gray-300 mt-1">
                Data Engineer + Data analyst
              </span>
            </a>
          </div>

          {/* Language Selector */}
          <div className="hidden   sm:block absolute left-1/2 transform -translate-x-1/2 language-selector">
            <div className="relative inline-block">
              <button
                className="text-white text-sm font-medium hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300"
                aria-label="Select language"
                onClick={toggleLanguageDropdown}
              >
                {selectedLanguage}
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-gray-600 rounded-md shadow-lg py-1 min-w-28 z-10 animate-fadeIn">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="block w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-800 hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:bg-gray-800"
                      onClick={() => selectLanguage(lang.code)}
                    >
                      {lang.code}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8" role="list">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white text-sm font-medium hover:text-blue-400 transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                    aria-label={item.ariaLabel}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={
                isMobileMenuOpen ? "Close main menu" : "Open main menu"
              }
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Language Selector */}
        <div className="sm:hidden absolute top-4 right-20 language-selector">
          <div className="relative inline-block">
            <button
              className="text-white text-xs font-medium hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300"
              aria-label="Select language"
              onClick={toggleLanguageDropdown}
            >
              {selectedLanguage}
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-gray-600 rounded-md shadow-lg py-1 min-w-20 z-10 animate-fadeIn">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="block w-full text-left px-2 py-1 text-xs text-white hover:bg-gray-800 hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:bg-gray-800"
                    onClick={() => selectLanguage(lang.code)}
                  >
                    {lang.code}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-75 z-40"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 w-64 h-full bg-gray-900 transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="mobile-menu-button"
      >
        <div className="pt-20 pb-3 space-y-1 px-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-white text-base font-medium hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              role="menuitem"
              aria-label={item.ariaLabel}
              onClick={toggleMobileMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
