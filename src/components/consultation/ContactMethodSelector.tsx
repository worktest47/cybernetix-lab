
import React from "react";
import { MessageCircle, Facebook, Video, PhoneCall } from "lucide-react";

export const contactMethods = [
  {
    label: "WhatsApp",
    value: "whatsapp",
    icon: <MessageCircle size={32} />,
    placeholder: "Enter your WhatsApp number",
    field: "whatsappNumber"
  },
  {
    label: "Facebook",
    value: "facebook",
    icon: <Facebook size={32} />,
    placeholder: "Enter your Facebook username or profile link",
    field: "facebookContact"
  },
  {
    label: "Zoom",
    value: "zoom",
    icon: <Video size={32} />,
    placeholder: "Enter your Zoom email or Meeting Link",
    field: "zoomContact"
  },
  {
    label: "Phone Call",
    value: "phone-call",
    icon: <PhoneCall size={32} />,
    placeholder: "Enter your phone number",
    field: "phoneNumber"
  },
];

interface ContactMethodSelectorProps {
  selectedMethod: string;
  onMethodSelect: (method: string) => void;
  mainColor: string;
}

const ContactMethodSelector: React.FC<ContactMethodSelectorProps> = ({
  selectedMethod,
  onMethodSelect,
  mainColor,
}) => {
  return (
    <>
      <label className="block text-sm font-medium mb-2" style={{ color: mainColor }}>
        Preferred Contact Method
      </label>
      <div className="flex items-center gap-6 mb-4">
        {contactMethods.map((method) => (
          <button
            key={method.value}
            type="button"
            aria-label={method.label}
            onClick={() => onMethodSelect(method.value)}
            style={{
              borderColor: selectedMethod === method.value ? mainColor : "#27293b",
              background: selectedMethod === method.value ? "#1bd09522" : "transparent",
              color: selectedMethod === method.value ? mainColor : "#fff",
              transition: "all 0.15s",
            }}
            className="rounded-full border-2 p-3 flex flex-col items-center shadow-sm hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1bd095]"
          >
            <span className="mb-1">
              {React.cloneElement(method.icon as React.ReactElement, {
                color: selectedMethod === method.value ? mainColor : "#aaa",
              })}
            </span>
            <span className="text-xs font-medium">{method.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default ContactMethodSelector;
