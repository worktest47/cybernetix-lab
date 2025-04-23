
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Placeholder sections for future development */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600">About section coming soon...</p>
        </div>
      </section>
      
      <section id="offering" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Offerings</h2>
          <p className="text-gray-600">Offerings section coming soon...</p>
        </div>
      </section>
      
      <section id="work" className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Work</h2>
          <p className="text-gray-600">Portfolio section coming soon...</p>
        </div>
      </section>
      
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600">Contact form coming soon...</p>
        </div>
      </section>
      
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p>© {new Date().getFullYear()} DevFolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
