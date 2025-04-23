
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

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
    // Simulate success; in production, integrate with backend
    setTimeout(() => {
      setSubmitted(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4 py-8">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-center">Book a Free Consultation</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="company">
                Company (Optional)
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Your company name"
                value={form.company}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="website">
                Current Website (Optional)
              </label>
              <Input
                id="website"
                name="website"
                type="url"
                placeholder="https://yourwebsite.com"
                value={form.website}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="needs">
                What are your website needs?
              </label>
              <Textarea
                id="needs"
                name="needs"
                placeholder="Describe the purpose and requirements for your website or project."
                value={form.needs}
                onChange={handleChange}
                rows={4}
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
            <div className="mt-4 text-center text-blue-500">
              Thank you! Your message has been received. We will contact you soon.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Consultation;
