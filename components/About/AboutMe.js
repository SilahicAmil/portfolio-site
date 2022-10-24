import { FaLocationArrow } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import ProfilePhoto from "../../public/profile-photo.jpeg";

const AboutMe = () => {
  return (
    <>
      <div className="h-[100vh] md:px-6 lg:px-20 px-4 lg:rounded-2xl sm:px-5 font-mono  items-center ">
        <div className="">
          <h2 className="mt-12 text-4xl lg:mt-0">About Me</h2>
          <div className="grid grid-cols-12  md:gap-10 pt-4 md:pt-[40px] items-center justify-center">
            <div className="col-span-12 md:col-span-4">
              <Image
                alt="about-me-photo"
                src={ProfilePhoto}
                className="w-full object-cover overflow-hidden rounded-[30px] mb-3 md:w-[330px] md:h-[400px]"
              />
            </div>
            <div className="col-span-12 md:col-span-8 space-y-2.5 ">
              <div className="md:mr-12 xl:mr-16">
                <h3 className="text-3xl mb-2.5">Who Am I?</h3>
                <p className="text-lg mb-2.5 leading-7">
                  Im a Front End Developer from Salt Lake City, Utah. Working in
                  Web and Mobile Application Development. I enjoy turning
                  complex problems into, ineractive and responsive sites and
                  apps!
                </p>
                <p className="text-md mt-2.5">
                  My aim is to bring ideas from paper into useable and enjoyable
                  products, following best practices. Check out my works for
                  more insight!
                </p>
              </div>
              <div>
                <h3 className="text-2xl mb-4 mt-4">Contact Info</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                  <div className="flex">
                    <span className="mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                      <MdEmail />
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">Email:</p>
                      <h6>
                        <Link href="mailto:jinobie02@gmail.com">
                          jinobie02@gmail.com
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 ">
                      <FaLocationArrow />
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">Location:</p>
                      <h6>Salt Lake City, Utah</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-12">
          <h3 className="text-[30px] pb-5 mt-4">What I Do!</h3>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            <div className="flex gap-1 rounded-md p-1.5 bg-black text-white ">
              <FaReact className="w-10 h-10 object-contain mr-2" />
              <div className="space-y-2">
                <h3 className="text-2xl">Web Development</h3>
                <p className="leading-8">
                  Creating responsive and interactive websites!
                </p>
              </div>
            </div>
            <div className="flex gap-1 rounded-md p-1.5  bg-black text-white ">
              <FaReact className="w-10 h-10 object-contain mr-2" />
              <div className="space-y-2">
                <h3 className="text-2xl">App Development</h3>
                <p className="leading-8">
                  Creating responsive and interactive mobile applications!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[]"></div>
      </div>
    </>
  );
};

export default AboutMe;
