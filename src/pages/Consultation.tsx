
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import CallRequestForm from "@/components/consultation/CallRequestForm";

const codingBg = "bg-gradient-to-br from-[#1a1f2c] via-[#221f26] to-[#23243d]";
const mainColor = "#1bd095";

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
  const [showMethodField, setShowMethodField] = useState(false);
  const [callFormSubmitted, setCallFormSubmitted] = useState(false);

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

  const handleBack = () => {
    window.history.length > 1 ? navigate(-1) : navigate("/");
  };

  const handleRequestCallChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCallForm({
      ...callForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactMethodSelect = (method: string) => {
    setCallForm({ ...callForm, contactMethod: method, methodContact: "" });
    setShowMethodField(true);
  };

  const handleRequestCallSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCallFormSubmitted(true);

    toast({
      title: "Request sent",
      description: `You've requested a call via ${callForm.contactMethod}. We'll be in touch!`,
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
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1bd095]/10 to-purple-100 px-0 py-0 relative">
      <Navbar />
      <div 
        className="flex items-center justify-center min-h-screen pt-28 px-4 pb-8"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <Card className="w-full max-w-xl shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center" style={{ color: mainColor }}>
              Book a Free Consultation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`rounded-2xl ${codingBg} p-6 md:p-10 border border-[#27293b] shadow-2xl`}>
              <ConsultationForm
                form={form}
                onSubmit={handleSubmit}
                onChange={handleChange}
                submitted={submitted}
                mainColor={mainColor}
                onRequestCall={() => setShowRequestCall((prev) => !prev)}
                handleBack={handleBack}
              />
              
              {showRequestCall && (
                <CallRequestForm
                  callForm={callForm}
                  onChange={handleRequestCallChange}
                  onSubmit={handleRequestCallSubmit}
                  onMethodSelect={handleContactMethodSelect}
                  showMethodField={showMethodField}
                  callFormSubmitted={callFormSubmitted}
                  mainColor={mainColor}
                />
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
