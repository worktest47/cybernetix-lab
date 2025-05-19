
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Logo: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleLogoClick}
      className="font-bold text-2xl tracking-tight flex items-center focus:outline-none group"
      style={{ background: "none", border: "none", padding: 0, margin: 0, cursor: "pointer" }}
      aria-label="Go to Home"
      tabIndex={0}
    >
      <img 
        src="src\components\assest\cyber-logo1.jpg"
        alt="CyberNetix Lab Logo"
        className="h-14 w-auto rounded-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
      />
      <span className="ml-2 text-xl font-bold">CyberNetix Lab</span>
    </button>
  );
};

export default Logo;
