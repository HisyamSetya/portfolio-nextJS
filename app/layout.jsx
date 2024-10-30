import "@style/global.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Welcome",
  description: "Web Profesional",
};

const Rootlayout = ({ children }) => {
  return (
    <html>
      <body className=" bg-primary font-nunito text-secondary-200 ">
        <Nav />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default Rootlayout;
