
import React from "react";
import Logo from "../Logo";
import NavLinks from "../NavLinks";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-50/90 text-gray-800 py-12 rounded-t-xl shadow-inner">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo />
            <p className="text-gray-600 mt-4">
              Digital DNA for the Next Generation, Where Code Meets Intelligence.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <NavLinks className="flex flex-col space-y-2 text-gray-600 [&>a]:hover:text-cyan-600" />
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">© {currentYear} CyberNetix Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
