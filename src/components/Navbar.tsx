
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Logo />
          
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <NavLinks className="hidden md:flex space-x-8" />
        </div>
        
        {isOpen && (
          <div className="md:hidden bg-white absolute top-16 left-0 right-0 shadow-md py-4 px-4">
            <NavLinks className="flex flex-col space-y-4" onClick={() => setIsOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
