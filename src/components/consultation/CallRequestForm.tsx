
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ContactMethodSelector, { contactMethods } from "./ContactMethodSelector";

interface CallRequestFormProps {
  callForm: {
    name: string;
    surname: string;
    cell: string;
    description: string;
    contactMethod: string;
    methodContact: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onMethodSelect: (method: string) => void;
  showMethodField: boolean;
  callFormSubmitted: boolean;
  mainColor: string;
}

const CallRequestForm: React.FC<CallRequestFormProps> = ({
  callForm,
  onChange,
  onSubmit,
  onMethodSelect,
  showMethodField,
  callFormSubmitted,
  mainColor,
}) => {
  const selectedMethod = contactMethods.find(
    (m) => m.value === callForm.contactMethod
  );

  return (
    <form
      className="mt-8 p-6 rounded-xl border shadow-md bg-[#101321]/90 border-[#1bd095]/30"
      onSubmit={onSubmit}
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
            onChange={onChange}
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
            onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
          rows={3}
          className="bg-transparent text-white placeholder:text-gray-400 border-[#1bd095] focus:border-[#14ad78]"
          required
        />
      </div>

      {!showMethodField && (
        <ContactMethodSelector
          selectedMethod={callForm.contactMethod}
          onMethodSelect={onMethodSelect}
          mainColor={mainColor}
        />
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
            onChange={onChange}
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
  );
};

export default CallRequestForm;
