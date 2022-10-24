import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import ProfilePhoto from "../../public/profile-photo.jpeg";

const AboutMe = () => {
  return (
    <>
      <div className="container md:px-6 lg:px-20 px-4 lg:rounded-2xl sm:px-5 font-mono  items-center">
        <div className="py-12 bg-[#f2f6f7] h-full">
          <h2 className="mt-12 text-4xl lg:mt-0">About Me</h2>
          <div className="grid grid-cols-12  md:gap-10 pt-4 md:pt-[40px] items-center justify-center">
            <div className="col-span-12 md:col-span-4">
              <Image
                alt="about-me-photo"
                src={ProfilePhoto}
                width={330}
                height={400}
                className="w-full object-cover overflow-hidden rounded-[30px] mb-3 md:w-[330px] md:h-[400px]"
              />
            </div>
            <div className="col-span12 md:col-span-8 space-y-2.5">
              <div>
                <h3 className="text-3xl mb-2.5">Who Am I?</h3>
                <p className="text-lg mb-2.5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  vitae molestiae repellendus expedita officiis culpa neque
                  aliquam rerum necessitatibus dignissimos, officia porro animi
                  mollitia velit. Vitae assumenda corporis eaque labore.
                </p>
                <p className="text-md mt-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                  consequuntur ipsum, maiores officia labore, pariatur ducimus
                  sit accusantium ex obcaecati reprehenderit dolore. Ad veniam
                  molestiae ipsum cumque atque, consequatur quis.
                </p>
              </div>
              <div>
                <h3 className="text-2xl">Contact Info</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="flex">
                    <span className="mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 ">
                      {/* add Email Icon Here  */}
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
                      {/* Add Github */}
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
          <h3 className="text-[30px] pb-5">What I Do!</h3>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
