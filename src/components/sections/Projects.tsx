
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Custom e-commerce solution with advanced inventory management and payment processing.",
      tech: "React, Node.js, PostgreSQL"
    },
    {
      title: "AI Customer Service",
      description: "Intelligent chatbot system that handles customer queries and integrates with existing CRM systems.",
      tech: "Python, TensorFlow, React"
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with virtual tours and comprehensive search functionality.",
      tech: "Vue.js, Laravel, MySQL"
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with virtual tours and comprehensive search functionality.",
      tech: "Vue.js, Laravel, MySQL"
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with virtual tours and comprehensive search functionality.",
      tech: "Vue.js, Laravel, MySQL"
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with virtual tours and comprehensive search functionality.",
      tech: "Vue.js, Laravel, MySQL"
    }
  ];

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Recent Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Take a look at some of the innovative solutions we've built for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="text-[#1bd095] font-medium">{project.tech}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
