
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleConsultation = () => {
    navigate("/consultation");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="block text-white mb-3">CyberNetix Lab</span>
            <span className="text-[#1bd095] text-2xl md:text-3xl font-light block mb-6">
              Digital DNA for the Next Generation
            </span>
            <span className="hidden md:block text-lg font-normal text-gray-200">
              Where Code Meets <span className="text-[#1bd095] font-semibold">Intelligence</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            We build cutting-edge digital solutions that help businesses transform and thrive in the digital landscape.<br className="hidden md:block" />
            Let's create your next innovative project together.
          </p>
          <Button
            className="bg-[#1bd095] hover:bg-[#14ad78] text-white px-8 py-6 rounded-md text-lg font-medium 
            transition-all transform hover:scale-105 hover:rotate-1 hover:shadow-[0_0_15px_rgba(27,208,149,0.5)] 
            relative overflow-hidden group
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#1bd095] before:to-[#14ad78] 
            before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
            after:absolute after:inset-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDAgQzY5LjEgMCA0NCAyNS4xIDQ0IDU2YzAgMjQuNyAxNi4yIDQ1LjggMzguNSA1Mi45TDEwMCAxMzhsLTE3LjUtMjkuMUM2MC4yIDEwMS44IDQ0IDgwLjcgNDQgNTZjMC0zMC45IDI1LjEtNTYgNTYtNTZ6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L3N2Zz4=')] 
            after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100"
            onClick={handleConsultation}
          >
            <span className="relative z-10">Book a Free Website Consultation</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
