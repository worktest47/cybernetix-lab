import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { PhoneCall, Facebook, MessageCircle, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const codingBg =
  "bg-gradient-to-br from-[#1a1f2c] via-[#221f26] to-[#23243d]";

const mainColor = "#1bd095";

const contactMethods = [
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

const Consultation: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    needs: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [showRequestCall, setShowRequestCall] = useState(false);
  const [callForm, setCallForm] = useState({
    name: "",
    surname: "",
    cell: "",
    description: "",
    contactMethod: "",
    methodContact: "",
  });
  const [callFormTouched, setCallFormTouched] = useState(false);
  const [callFormSubmitted, setCallFormSubmitted] = useState(false);
  const [showMethodField, setShowMethodField] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      navigate("/");
    }, 1500);
  };

  function handleBack() {
    window.history.length > 1 ? navigate(-1) : navigate("/");
  }

  function handleRequestCallChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setCallFormTouched(true);
    setCallForm({
      ...callForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleContactMethodSelect(method: string) {
    setCallFormTouched(true);
    setCallForm({ ...callForm, contactMethod: method, methodContact: "" });
    setShowMethodField(true);
  }

  async function handleRequestCallSubmit(e: React.FormEvent) {
    e.preventDefault();
    setCallFormSubmitted(true);

    toast({
      title: "Request sent",
      description: `You've requested a call via ${contactMethods.find(x => x.value === callForm.contactMethod)?.label}. We'll be in touch!`,
    });

    setTimeout(() => {
      setShowRequestCall(false);
      setShowMethodField(false);
      setCallForm({
        name: "",
        surname: "",
        cell: "",
        description: "",
        contactMethod: "",
        methodContact: "",
      });
      setCallFormSubmitted(false);
      setCallFormTouched(false);
    }, 1200);
  }

  const selectedMethod = contactMethods.find(
    (m) => m.value === callForm.contactMethod
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1bd095]/10 to-purple-100 px-0 py-0 relative">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen pt-28 px-4 pb-8">
        <Card className="w-full max-w-xl shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center" style={{ color: mainColor }}>
              Book a Free Consultation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`rounded-2xl ${codingBg} p-6 md:p-10 border border-[#27293b] shadow-2xl`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name" style={{ color: mainColor }}>
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-transparent text-white placeholder:text-gray-400 border-[#1bd095] focus:border-[#14ad78]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email" style={{ color: mainColor }}>
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-transparent text-white placeholder:text-gray-400 border-[#1bd095] focus:border-[#14ad78]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="company" style={{ color: mainColor }}>
                    Company (Optional)
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={handleChange}
                    className="bg-transparent text-white placeholder:text-gray-400 border-[#1bd095] focus:border-[#14ad78]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="website" style={{ color: mainColor }}>
                    Current Website (Optional)
                  </label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={form.website}
                    onChange={handleChange}
                    className="bg-transparent text-white placeholder:text-gray-400 border-[#1bd095] focus:border-[#14ad78]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="needs" style={{ color: mainColor }}>
                    What are your website needs?
                  </label>
                  <Textarea
                    id="needs"
                    name="needs"
                    placeholder="Describe the purpose and requirements for your website or project."
                    value={form.needs}
                    onChange={handleChange}
                    rows={4}
                    className="bg-transparent text-white placeholder:text-gray-400 border-[#1bd095] focus:border-[#14ad78]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full text-white text-lg"
                  style={{
                    backgroundColor: mainColor,
                    borderColor: mainColor,
                  }}
                  disabled={submitted}
                >
                  {submitted ? "Submitting..." : "Submit"}
                </Button>
                <div className="flex flex-col md:flex-row gap-3 mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowRequestCall((prev) => !prev)}
                    className="w-full md:w-1/2 border-2 flex items-center justify-center gap-2 transition-all"
                    style={{
                      color: mainColor,
                      borderColor: mainColor,
                    }}
                    disabled={submitted}
                  >
                    <PhoneCall size={20} className="mr-1" />
                    Request a Call
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="w-full md:w-1/2 border-2"
                    style={{
                      color: mainColor,
                      borderColor: mainColor,
                    }}
                    disabled={submitted}
                  >
                    Back
                  </Button>
                </div>
              </form>
              {showRequestCall && (
                <form
                  className="mt-8 p-6 rounded-xl border shadow-md bg-[#101321]/90 border-[#1bd095]/30"
                  onSubmit={handleRequestCallSubmit}
                  style={{ animation: "fadeIn .4s" }}
                >
                  <div className="mb-4 flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="r_name" style={{ color: mainColor }}>
                        Name
                      </label>
                      <Input
                        id="r_name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={callForm.name}
                        onChange={handleRequestCallChange}
                        className="bg-transparent text-white placeholder:text-gray-400 border-[#1bd095] focus:border-[#14ad78]"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="r_surname" style={{ color: mainColor }}>
                        Surname
                      </label>
                      <Input
                        id="r_surname"
                        name="surname"
                        type="text"
                        placeholder="Enter your surname"
                        value={callForm.surname}
                        onChange={handleRequestCallChange}
                        className="bg-transparent text-white placeholder:text-gray-400 border-[#1bd095] focus:border-[#14ad78]"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="r_cell" style={{ color: mainColor }}>
                      Cell Number
                    </label>
                    <Input
                      id="r_cell"
                      name="cell"
                      type="tel"
                      placeholder="e.g. 082 123 4567"
                      value={callForm.cell}
                      onChange={handleRequestCallChange}
                      className="bg-transparent text-white placeholder:text-gray-400 border-[#1bd095] focus:border-[#14ad78]"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1" htmlFor="r_description" style={{ color: mainColor }}>
                      Short Description
                    </label>
                    <Textarea
                      id="r_description"
                      name="description"
                      placeholder="What is the call about?"
                      value={callForm.description}
                      onChange={handleRequestCallChange}
                      rows={3}
                      className="bg-transparent text-white placeholder:text-gray-400 border-[#1bd095] focus:border-[#14ad78]"
                      required
                    />
                  </div>
                  {!showMethodField && (
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
                            onClick={() => handleContactMethodSelect(method.value)}
                            style={{
                              borderColor: callForm.contactMethod === method.value ? mainColor : "#27293b",
                              background: callForm.contactMethod === method.value ? "#1bd09522" : "transparent",
                              color: callForm.contactMethod === method.value ? mainColor : "#fff",
                              transition: "all 0.15s",
                            }}
                            className={`rounded-full border-2 p-3 flex flex-col items-center shadow-sm hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1bd095]`}
                          >
                            <span className="mb-1">
                              {React.cloneElement(
                                method.icon as React.ReactElement,
                                {
                                  color: callForm.contactMethod === method.value ? mainColor : "#aaa",
                                }
                              )}
                            </span>
                            <span className="text-xs font-medium">{method.label}</span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {showMethodField && selectedMethod?.field && (
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-1" htmlFor="methodContact" style={{ color: mainColor }}>
                        {selectedMethod.label} Contact Info
                      </label>
                      <Input
                        id="methodContact"
                        name="methodContact"
                        type="text"
                        placeholder={selectedMethod.placeholder}
                        value={callForm.methodContact}
                        onChange={handleRequestCallChange}
                        className="bg-transparent text-white placeholder:text-gray-400 border-[#1bd095] focus:border-[#14ad78]"
                        required
                      />
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full text-white text-lg mt-2"
                    style={{
                      backgroundColor: mainColor,
                      borderColor: mainColor,
                    }}
                    disabled={
                      callFormSubmitted ||
                      !callForm.name ||
                      !callForm.surname ||
                      !callForm.cell ||
                      !callForm.description ||
                      !callForm.contactMethod ||
                      !callForm.methodContact
                    }
                  >
                    {callFormSubmitted ? "Request Sent!" : "Submit Request"}
                  </Button>
                  {callFormSubmitted && (
                    <div className="mt-4 text-center animate-fade-in" style={{ color: mainColor }}>
                      Thank you! We'll be in touch soon.
                    </div>
                  )}
                </form>
              )}
              {submitted && (
                <div className="mt-4 text-center animate-fade-in" style={{ color: mainColor }}>
                  Thank you! Your message has been received. We will contact you soon.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Consultation;
