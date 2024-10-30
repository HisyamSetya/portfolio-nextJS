"use client";
import { Input } from "@components/ui/input";
// import { FormEvent } from "react";

const Rest = () => {
  async function makeApiCall(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // console.log(formData.get("input"));

    let input = formData.get("input");
    console.log(input);

    await fetch("http://localhost:3000/api/hello", {
      method: "POST",
      body: JSON.stringify({ hello: input }),
    });
  }

  return (
    <>
      <form onSubmit={makeApiCall}>
        <Input name="input" />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default Rest;
