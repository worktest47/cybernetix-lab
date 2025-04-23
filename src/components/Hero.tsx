
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative"
      style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Crafting Digital Experiences That <span className="text-blue-400">Inspire</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            We build stunning websites and applications that help businesses grow and succeed in the digital world.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-md text-lg font-medium transition-all transform hover:scale-105">
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
