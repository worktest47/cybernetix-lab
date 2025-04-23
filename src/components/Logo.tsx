
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo: React.FC = () => {
  const navigate = useNavigate();
  const mainColor = "#1bd095";

  return (
    <button
      onClick={() => navigate("/")}
      className="font-bold text-2xl tracking-tight flex items-center focus:outline-none"
      style={{ background: "none", border: "none", padding: 0, margin: 0, cursor: "pointer" }}
      aria-label="Go to Home"
      tabIndex={0}
    >
      <div
        className="rounded-full w-10 h-10 flex items-center justify-center transition-transform hover:scale-105"
        style={{ backgroundColor: mainColor }}
      >
        <span className="text-lg font-bold text-white">LB</span>
      </div>
    </button>
  );
};

export default Logo;
