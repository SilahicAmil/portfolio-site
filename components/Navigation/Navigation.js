import { CgMenuLeftAlt } from "react-icons/cg";
import Link from "next/link";
import { MdDarkMode } from "react-icons/md";

const Navigation = () => {
  return (
    <div className="navbar bg-white text-black font-mono">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-xl">
            <CgMenuLeftAlt />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            <li className=" text-black">
              <Link href="/about">About</Link>
            </li>

            <li className=" text-black">
              <Link href="/works">Works</Link>
            </li>
          </ul>
        </div>
        <div className="btn btn-ghost normal-case text-xl">
          {" "}
          <Link href="/">amil.dev</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-4">
          <li className="btn rounded-lg text-white">
            {/* change buttons colors  */}
            <Link href="/about">About</Link>
          </li>

          <li className="btn rounded-lg  text-white">
            <Link href="/works">Works</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-white text-xl">
          <MdDarkMode />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
