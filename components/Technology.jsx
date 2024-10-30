import Image from "next/image";
import nextjsIcon from "@public/img/nextjsIcon.png";
import react from "@public/img/react.png";
import sqlImage from "@public/img/sql.png";
import nodeJs from "@public/img/node-js.png";
import twImage from "@public/img/tailwind.png";
import jsImage from "@public/img/jsImage.png";
import htmlImg from "@public/img/html.png";
import Marquee from "react-fast-marquee";

const Technology = () => {
  return (
    <>
      <div id="about" className="bg-secondary-200 max-w-full min-h-svh">
        <div className="flex justify-center">
          <p className="text-primary font-nunito font-bold text-3xl mt-16">
            Technology
          </p>
        </div>

        <div className="max-w-full overflow-hidden">
          <div className=" items-center relative py-52">
            <Marquee speed="150" gradient="true" gradientColor="#ECECEC">
              <Image className="w-40 mr-20" src={nextjsIcon} alt="nextjsIcon" />
              <Image className="w-32 mr-20" src={react} alt="reactImage" />
              <Image className="w-32 mr-20" src={sqlImage} alt="sqlImage" />
              <Image className="w-32 mr-20" src={nodeJs} alt="nodeJs" />
              <Image className="w-44 mr-20" src={twImage} alt="twImage" />
              <Image className="w-32 mr-20" src={jsImage} alt="jsImage" />
              <Image className="w-28 mr-20" src={htmlImg} alt="htmlImg" />
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
