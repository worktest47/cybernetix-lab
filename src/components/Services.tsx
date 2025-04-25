
import React from "react";
import { Code, Globe, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services: React.FC = () => {
  const serviceItems = [
    {
      icon: <Code size={48} className="text-[#1bd095] mb-4" />,
      title: "Custom Development",
      description: "Tailored software solutions designed to solve your unique business challenges and drive innovation."
    },
    {
      icon: <Globe size={48} className="text-[#1bd095] mb-4" />,
      title: "Web Applications",
      description: "Powerful, responsive web applications built with cutting-edge technologies for optimal performance."
    },
    {
      icon: <LineChart size={48} className="text-[#1bd095] mb-4" />,
      title: "AI Integration",
      description: "Incorporate intelligent features and automation into your applications for enhanced capabilities."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Innovative Digital Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end development services to help you build powerful digital experiences. From concept to deployment, we transform ideas into reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pt-8">
                <div className="flex justify-center">{item.icon}</div>
                <CardTitle className="text-xl font-bold mt-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
