"use server";

import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "@utils/upstasth";
import pool from "@utils/postgres";
import { headers } from "next/headers";

export default async function handleForm(prevState, formData) {
  const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(2, "3600s"),
  });

  //get the IP from header
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for");
  //Limit by IP
  const { remaining, limit, success } = await rateLimit.limit(ip);
  //Get data from Client
  const email = formData.get("email");
  const subject = formData.get("subject");
  const text = formData.get("text");

  try {
    if (!success) return console.log("please try again");
    const res = await pool.query(
      "insert into contacts (email,message,subject) values ($1,$2,$3) returning *",
      [email, subject, text]
    );

    console.log(remaining, limit, success);
  } catch (e) {
    return console.log("Error Occured");
  }
  // console.log(email);

  // mutate data
  // revalidate cache
}
