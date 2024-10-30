import pool from "@utils/postgres";

export const dynamic = "force-dynamic";

export default async function Route() {
  let data = await pool.query("select*from contacts");
  let rows = data.rows;

  // console.log(data.rows);
  return (
    <ul>
      {rows.map((post) => (
        <li key={post.id}>{post.message}</li>
      ))}
    </ul>
  );
}
