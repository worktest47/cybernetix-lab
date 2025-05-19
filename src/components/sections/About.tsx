
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About CyberNetix </h2>
            <p className="text-gray-600 mb-4">
              At CyberNetix , we're passionate about creating digital solutions that make a real impact. Our team of developers, designers, and strategists work together to build innovative applications that help businesses thrive in today's competitive landscape.
            </p>
            <p className="text-gray-600 mb-4">
              With expertise in the latest technologies and a focus on quality, we deliver solutions that are not only functional but also scalable, secure, and user-friendly.
            </p>
            <p className="text-gray-600">
              Our approach combines technical excellence with creative problem-solving to develop custom solutions that perfectly match our clients' needs and objectives.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-[#1bd095]">Our Core Values</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-[#1bd095] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700"><strong>Innovation:</strong> We constantly explore new technologies and approaches.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1bd095] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700"><strong>Quality:</strong> We don't compromise on the standard of our work.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1bd095] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700"><strong>Collaboration:</strong> We work closely with our clients throughout the process.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1bd095] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700"><strong>Results:</strong> We focus on delivering solutions that drive real business outcomes.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
