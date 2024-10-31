"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useActionState } from "react";
import handleForm from "@actions/handleForm";

const Contact = () => {
  const [message, action, isPending] = useActionState(handleForm, null);
  console.log(isPending);

  return (
    <>
      <div id="contact" className="w-full px-12">
        <h3 className="text-center font-bold text-lg py-5 border-gray-500 border-b-2 mb-16">
          Contact
        </h3>

        <form
          className="flex  flex-col items-center w-full"
          action={(formData) => {
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
            if (email.length > 35 || subject.length > 50 || text.length > 350) alert("MAX CHAR!");
            if (spacingCheck) alert("SPACING ONLY??");

            return action(formData);
          }}
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
            />
          </div>
          <div className="w-1/2  mb-6">
            <Label htmlFor="subject">Input your subject</Label>
            <Input
              name="subject"
              type="text"
              maxLength="50"
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
              disabled={isPending}
            >
              Submit
            </Button>
          </div>
          {message?.success && <span className="text-green-500">Thank you</span>}
          {message?.exeeded && <span className="text-red-500">{message.exeeded}</span>}
          {message?.error && <span className="text-red-500">{message.error}</span>}
        </form>
      </div>
    </>
  );
};

export default Contact;
