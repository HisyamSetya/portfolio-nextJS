"use server";

import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "@utils/upstasth";
import pool from "@utils/postgres";
import { headers } from "next/headers";
import date from "date-and-time";

export default async function handleForm(prevState, formData) {
  const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, "86400s"),
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
  //Get date
  const now = new Date();
  const dates = date.format(now, "YYYY-MM-DD HH:mm:ss");

  // console.log(remaining, limit, success);

  try {
    if (success) {
      await pool.query(
        "insert into contacts (email,message,subject,createdDate) values ($1,$2,$3,$4)",
        [email, subject, text, dates]
      );
      return { success: "Success" };
    } else {
      return { exeeded: "Request Exeeded" };
    }
  } catch (e) {
    return { error: "Something Went Wrong" };
  }

  // mutate data
  // revalidate cache
}
