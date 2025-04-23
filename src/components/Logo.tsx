
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="font-bold text-2xl tracking-tight text-gray-900 flex items-center space-x-2">
      <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
        <span className="text-lg font-bold">LB</span>
      </div>
      <div>
        <span className="text-primary">Lawrence</span>
        <span className="text-blue-500 ml-1">Baatjies</span>
      </div>
    </div>
  );
};

export default Logo;
