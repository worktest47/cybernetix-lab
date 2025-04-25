
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

interface ConsultationFormProps {
  form: {
    name: string;
    email: string;
    company: string;
    website: string;
    needs: string;
  };
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  submitted: boolean;
  mainColor: string;
  onRequestCall: () => void;
  handleBack: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({
  form,
  onSubmit,
  onChange,
  submitted,
  mainColor,
  onRequestCall,
  handleBack,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onClick={onRequestCall}
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
  );
};

export default ConsultationForm;
