import { BsGithub, BsLinkedin } from "react-icons/bs";

import Image from "next/image";
import { ProfilePhoto } from "../../public/profile-photo.jpeg";

const MainHead = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <Image
        className="rounded-full"
        alt="profile-photo"
        src="/../../images/profile-photo.jpeg"
        width={250}
        height={250}
      ></Image>
      <h3>Amil Silahic</h3>
      <p>Front End Developer</p>
      <div>
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
