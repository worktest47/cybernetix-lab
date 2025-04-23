
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const codingBg =
  "bg-gradient-to-br from-[#1a1f2c] via-[#221f26] to-[#23243d]"; // dark purple/charcoal gradient

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-0 py-0 relative">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen pt-28 px-4 pb-8">
        <Card className="w-full max-w-xl shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center">Book a Free Consultation</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className={`rounded-2xl ${codingBg} p-6 md:p-10 border border-[#27293b] shadow-2xl`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1 text-blue-200" htmlFor="name">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-transparent text-white placeholder:text-gray-400 border-blue-700 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-blue-200" htmlFor="email">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-transparent text-white placeholder:text-gray-400 border-blue-700 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-blue-200" htmlFor="company">
                    Company (Optional)
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={handleChange}
                    className="bg-transparent text-white placeholder:text-gray-400 border-blue-700 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-blue-200" htmlFor="website">
                    Current Website (Optional)
                  </label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={form.website}
                    onChange={handleChange}
                    className="bg-transparent text-white placeholder:text-gray-400 border-blue-700 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-blue-200" htmlFor="needs">
                    What are your website needs?
                  </label>
                  <Textarea
                    id="needs"
                    name="needs"
                    placeholder="Describe the purpose and requirements for your website or project."
                    value={form.needs}
                    onChange={handleChange}
                    rows={4}
                    className="bg-transparent text-white placeholder:text-gray-400 border-blue-700 focus:border-blue-500"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg"
                  disabled={submitted}
                >
                  {submitted ? "Submitting..." : "Submit"}
                </Button>
              </form>
              {submitted && (
                <div className="mt-4 text-center text-blue-400 animate-fade-in">
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
