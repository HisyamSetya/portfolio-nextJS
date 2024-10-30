"use server";

import pool from "@utils/postgres";

export default async function getData(formData) {
  // console.log(formData.get("email"));
  const email = formData.get("email");
  const title = formData.get("title");
  const textArea = formData.get("textArea");

  // console.log(textArea);

  let rawData = await pool.query(
    `insert into contacts (email,title,message) values ($1, $2, $3) returning *`,
    [email, title, textArea]
  );
  console.log(rawData.rows);
}
