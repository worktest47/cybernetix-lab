import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const codingBg =
  "bg-gradient-to-br from-[#1a1f2c] via-[#221f26] to-[#23243d]";

const mainColor = "#1bd095";

const Consultation: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    needs: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  function handleCancel() {
    setForm({
      name: "",
      email: "",
      company: "",
      website: "",
      needs: "",
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-0 py-0 relative">
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
                    onClick={handleCancel}
                    className="w-full md:w-1/2 border-2"
                    style={{
                      color: mainColor,
                      borderColor: mainColor,
                    }}
                    disabled={submitted}
                  >
                    Cancel
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
