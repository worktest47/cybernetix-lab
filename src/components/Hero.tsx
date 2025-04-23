
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
            <span className="block text-white mb-3">Lawrence Baatjies</span>
            <span className="text-[#1bd095] text-2xl md:text-3xl font-light block mb-6">
              Web Developer & Digital Creator
            </span>
            <span className="hidden md:block text-lg font-normal text-gray-200">
              Crafting Digital Experiences That{" "}
              <span className="text-[#1bd095] font-semibold">Inspire</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            I build websites and applications that help businesses grow and
            succeed online.<br className="hidden md:block" />
            Let's create your next project together.
          </p>
          <Button
            className="bg-[#1bd095] hover:bg-[#14ad78] text-white px-8 py-6 rounded-md text-lg font-medium transition-all transform hover:scale-105 shadow-lg"
            onClick={handleConsultation}
          >
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
