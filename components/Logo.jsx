import Image from "next/image";
import logo from "@public/img/logo.png";

const Logo = () => {
  return (
    <li>
      <Image src={logo} alt="brand-logo" className="w-14 lg:w-20" />
    </li>
  );
};

export default Logo;
