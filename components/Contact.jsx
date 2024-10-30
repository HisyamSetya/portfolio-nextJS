"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useActionState } from "react";
import handleForm from "@actions/handleForm";

const Contact = () => {
  const [input, setInput] = useState({ userInput: "", valueUser: "" });
  const [state, action, isPending] = useActionState(handleForm, null);

  function handleChange(e) {
    const { value, name } = e.target;

    setInput({ ...input, userInput: name, valueUser: value });
  }

  return (
    <>
      <div id="contact" className="w-full px-12">
        <h3 className="text-center font-bold text-lg py-5 border-gray-500 border-b-2 mb-16">
          Contact
        </h3>

        <form
          action={(formData) => {
            // console.log(e);

            //Feedback Form Data
            const rawFormData = {
              email: formData.get("email"),
              subject: formData.get("subject"),
              text: formData.get("text"),
            };

            //Get Value Object
            const dataObj = Object.values(rawFormData);
            //Trim Array Object
            const trimObj = dataObj.map((e) => e.trim());
            //Get inserted Spacing Only
            const spacingCheck = trimObj.includes("");
            // console.log(spacingCheck);

            const { email, subject, text } = rawFormData;

            //Validate Null of String
            if (!email || !subject || !text) alert("Form can't be empty");
            //Validate max of string
            if (email.length > 35 || subject.length > 50 || text.length > 350)
              alert("MAX CHAR!");
            if (spacingCheck) alert("SPACING ONLY??");

            return action(formData);
          }}
          className="flex  flex-col items-center w-full"
        >
          <div className="w-1/2 mb-6">
            <Label htmlFor="email">* Input your email address</Label>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              required
              maxLength="35"
              className="bg-black"
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2  mb-6">
            <Label htmlFor="subject">Input your subject</Label>
            <Input
              name="subject"
              type="text"
              maxLength="50"
              onChange={handleChange}
              placeholder="Subject"
              className="bg-black"
            />
          </div>
          <div className="w-1/2 mb-6">
            <Label htmlFor="email">* Type a message for us!</Label>
            <Textarea
              name="text"
              type="text"
              required
              onChange={handleChange}
              maxLength="350"
              placeholder="Type your message here."
              className="h-52 bg-black"
            />
          </div>
          <div className="w-1/2  mb-6">
            <Button
              variant="outline"
              type="submit"
              className="text-black w-full hover:bg-secondary-300"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
