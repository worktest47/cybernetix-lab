
import React from "react";

const TechStack = () => {
  const technologies = [
    {
      title: "Frontend",
      items: ["React / Next.js", "Vue / Nuxt.js", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Backend",
      items: ["Node.js", "Python", "PHP / Laravel", "Java Spring"]
    },
    {
      title: "Database",
      items: ["PostgreSQL", "MongoDB", "Firebase", "Redis"]
    },
    {
      title: "DevOps",
      items: ["Docker", "Kubernetes", "AWS / GCP", "CI/CD"]
    }
  ];

  return (
    <section id="offering" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Tech Stack</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable and efficient solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#1bd095] font-bold text-xl mb-2">{tech.title}</div>
              <ul className="text-gray-600">
                {tech.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
