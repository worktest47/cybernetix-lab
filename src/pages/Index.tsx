import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Dev Labs</h2>
              <p className="text-gray-600 mb-4">
                At Dev Labs, we're passionate about creating digital solutions that make a real impact. Our team of developers, designers, and strategists work together to build innovative applications that help businesses thrive in today's competitive landscape.
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
      
      <section id="offering" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable and efficient solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#1bd095] font-bold text-xl mb-2">Frontend</div>
              <ul className="text-gray-600">
                <li>React / Next.js</li>
                <li>Vue / Nuxt.js</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#1bd095] font-bold text-xl mb-2">Backend</div>
              <ul className="text-gray-600">
                <li>Node.js</li>
                <li>Python</li>
                <li>PHP / Laravel</li>
                <li>Java Spring</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#1bd095] font-bold text-xl mb-2">Database</div>
              <ul className="text-gray-600">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>Redis</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#1bd095] font-bold text-xl mb-2">DevOps</div>
              <ul className="text-gray-600">
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>AWS / GCP</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section id="work" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Recent Projects</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Take a look at some of the innovative solutions we've built for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">E-Commerce Platform</h3>
                <p className="text-gray-600 mb-4">Custom e-commerce solution with advanced inventory management and payment processing.</p>
                <div className="text-[#1bd095] font-medium">React, Node.js, PostgreSQL</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">AI Customer Service</h3>
                <p className="text-gray-600 mb-4">Intelligent chatbot system that handles customer queries and integrates with existing CRM systems.</p>
                <div className="text-[#1bd095] font-medium">Python, TensorFlow, React</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Real Estate Portal</h3>
                <p className="text-gray-600 mb-4">Property listing platform with virtual tours and comprehensive search functionality.</p>
                <div className="text-[#1bd095] font-medium">Vue.js, Laravel, MySQL</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Ready to discuss your project? Contact us today for a free consultation and let's start building something amazing together.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#1bd095] p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <a href="mailto:info@devlabs.com" className="text-[#1bd095] hover:underline">info@devlabs.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#1bd095] p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-gray-600">+27 12 345 6789</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1bd095]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1bd095]" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1bd095]" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1bd095]"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#1bd095] hover:bg-[#14ad78] text-white py-2 px-4 rounded-md transition-colors">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <Logo />
              <p className="text-gray-300 mt-4">
                Digital DNA for the Next Generation, Where Code Meets Intelligence.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-bold mb-2">Navigation</h3>
              <NavLinks className="flex flex-col space-y-2" />
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#1bd095] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#1bd095] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p>© {new Date().getFullYear()} CyberNetix Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
