import List from "@components/List.jsx";
import Logo from "@components/Logo.jsx";

const Nav = () => {
  return (
    <nav
      id="home"
      className="sticky top-0 backdrop-blur-md py-2  bg-primary max-w-full px-16 drop-shadow-xl lg:px-16 z-10"
    >
      <ul className="flex space-x-16  content-center lg:justify-between ">
        <Logo />
        <div className="flex space-x-2 pt-3 lg:space-x-6">
          <List list={"home"} />
          <List list={"about"} />
          <List list={"contact"} />
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
