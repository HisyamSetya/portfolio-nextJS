import Link from "next/link";

const GetInTouch = () => {
  return (
    <>
      <section id="contact" className="mx-auto py-14 px-12">
        <h5 className="font-bold text-center pb-5 mb-5 border-b-2 border-gray-500">
          Get In Touch
        </h5>

        <div className="flex items-center justify-center">
          <Link
            href="https://www.instagram.com/mhisyamsetya/"
            target="_blank"
            className="mr-7 hover:text-gray-500"
          >
            Instagram
          </Link>
          <Link
            href="https://id.linkedin.com/in/mhisyamsetya"
            target="_blank"
            className="mr-7 hover:text-gray-500"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:mhisyamsetya22@gmail.com"
            target="_blank"
            className="mr-7 hover:text-gray-500"
          >
            Mail
          </Link>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
