import Main from "@components/Main";
import Technology from "@components/Technology";
import Experience from "@components/Experience";
import GetInTouch from "@components/GetInTouch";
import Contact from "@components/Contact";
// import pool from "@utils/postgres";

// // you can also use async/await
// const res = await pool.query("select*from contacts");
// console.log(res.rows);

// await pool.end();

const Home = () => {
  return (
    <>
      <Main />
      <Technology />
      <Experience />
      <Contact />
      <GetInTouch />
    </>
  );
};

export default Home;
