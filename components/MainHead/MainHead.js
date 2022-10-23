import { BsGithub, BsLinkedin } from "react-icons/bs";

import Image from "next/image";
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
      <h3 className="mt-6 mb-2 text-xl font-semibold">Amil Silahic</h3>
      <p>Front End Developer</p>
      <div className="flex space-x-4 text-xl mt-2">
        {/* add logos here */}
        <a href="https://google.com">
          <BsLinkedin />
        </a>
        <a href="https://github.com">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default MainHead;
