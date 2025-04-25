
import React from "react";
import { Link } from "react-scroll";

interface NavLinksProps {
  className?: string;
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ className = "", onClick }) => {
  const navItems = [
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Offering", to: "offering" },
    { name: "Our Work", to: "work" },
    { name: "Contact", to: "contact" }
  ];

  return (
    <div className={className}>
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.to}
          smooth={true}
          duration={500}
          className="text-gray-800 hover:text-[#1bd095] transition-colors cursor-pointer font-medium"
          spy={true}
          activeClass="text-[#1bd095] font-semibold"
          offset={-80}
          onClick={onClick}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
