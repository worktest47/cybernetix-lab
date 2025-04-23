
import React from "react";
import { Book, Package, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services: React.FC = () => {
  const serviceItems = [
    {
      icon: <Package size={48} className="text-blue-500 mb-4" />,
      title: "Web Development",
      description: "We build responsive, fast and accessible websites that drive results for your business."
    },
    {
      icon: <MessageSquare size={48} className="text-blue-500 mb-4" />,
      title: "Web Applications",
      description: "Custom web applications designed to streamline your business processes and improve efficiency."
    },
    {
      icon: <Book size={48} className="text-blue-500 mb-4" />,
      title: "UI/UX Design",
      description: "User-centric design that enhances user experience and increases conversion rates."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Can We Help You?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end web development services to help you build a strong online presence. From concept to deployment, we're with you every step of the way.
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
