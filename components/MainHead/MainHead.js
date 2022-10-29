import { BsGithub, BsLinkedin } from "react-icons/bs";

import Image from "next/image";
import { MdEmail } from "react-icons/md";
import ProfilePhoto from "../../public/profile-photo.jpeg";

const MainHead = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] font-mono">
      <Image
        className="rounded-full"
        alt="profile-photo"
        src={ProfilePhoto}
        width={250}
        height={250}
        layout="fixed"
      />
      <h3 className="mt-6 mb-1 text-xl font-semibold">Amil Silahic</h3>
      <p>Front End Developer</p>
      <p className="mt-2 flex ">
        <MdEmail className="text-2xl mr-2" />
        {/* Make this an link to email */}
        <span>amil@amil.dev</span>
      </p>
      <div className="flex space-x-4  mt-2 p-4">
        <span className="btn btn-ghost text-3xl hover:bg-black hover:text-white">
          <a
            className=""
            href="https://www.linkedin.com/in/amil-silahic-4b5a01140/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </span>
        <span className="btn btn-ghost hover:bg-black hover:text-white text-3xl">
          <a
            href="https://github.com/SilahicAmil"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </span>
      </div>
    </div>
  );
};

export default MainHead;
