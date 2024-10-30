"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@components/ui/textarea";
import contactAction from "@actions/contactAction";
import Button from "@components/Button";

const Form = () => {
  return (
    <form action={async (formData) => await contactAction(formData)}>
      <Input getInput="Email" name="email" />
      <Input getInput="Title" name="title" />
      <Textarea name="textArea" />
      <Button />
    </form>
  );
};

export default Form;
