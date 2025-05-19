
import React from "react";
import { Mail, PhoneCall } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-600 mb-8">
        Ready to discuss your project? Contact us today for a free consultation and let's start building something amazing together.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-[#1bd095] p-2 rounded-full mr-4">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Email</h3>
            <a href="mailto:cybernetixlab@gmail.com" className="text-[#1bd095] hover:underline">cybernetixlab@gmail.com</a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-[#1bd095] p-2 rounded-full mr-4">
            <PhoneCall className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Phone</h3>
            <p className="text-gray-600">+27 76815 2463</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
