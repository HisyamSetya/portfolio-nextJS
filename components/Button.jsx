"use client";

import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();
  return <button type="submit">{pending ? "loading..." : "Submit"}</button>;
};

export default Button;
