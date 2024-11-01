import Image from "next/image";
import imgCom from "@public/img/img-com.png";

const Main = () => {
  return (
    <main
      id="a"
      className="my-20 px-5 py-5 justify-items-center lg:flex lg:min-h-full lg:items-center lg:mb-56 lg:text-lg"
    >
      <div className="px-16 mb-10 lg:mt-16">
        <h1 className="font-bold mb-10 text-5xl lg:text-6xl leading-snug">
          Professional Website Developer
        </h1>
        <p className="mt-5 lg:leading-relaxed">
          I'am Hisyam, based on Indonesia and have a Working Experience 5 Years++ In IT Industry,
          start from IT Analyst at the Big FMCG Company in Indonesia and now becoming Web Developer
          building web from scratch with latest various technology
        </p>
      </div>
      <Image
        className="lg:size-1/2 rounded-lg px-2"
        src={imgCom}
        alt="computer-image"
        placeholder="empty"
      />
    </main>
  );
};

export default Main;
