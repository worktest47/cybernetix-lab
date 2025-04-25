
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo: React.FC = () => {
  const navigate = useNavigate();
  const mainColor = "#1bd095";

  return (
    <button
      onClick={() => navigate("/")}
      className="font-bold text-2xl tracking-tight flex items-center focus:outline-none group"
      style={{ background: "none", border: "none", padding: 0, margin: 0, cursor: "pointer" }}
      aria-label="Go to Home"
      tabIndex={0}
    >
      <div
        className="rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
        style={{ backgroundColor: mainColor }}
      >
        <span className="text-lg font-bold text-white">CL</span>
      </div>
      <span className="ml-2 text-xl font-bold">CyberNetix Lab</span>
    </button>
  );
};

export default Logo;
