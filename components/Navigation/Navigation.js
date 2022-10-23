import { CgMenuLeftAlt } from "react-icons/cg";
import Link from "next/link";
import { MdDarkMode } from "react-icons/md";

const Navigation = () => {
  return (
    <div className="navbar bg-[#f2f6f7] text-black font-mono">
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
        <div className="btn btn-ghost normal-case text-xl hover:bg-black hover:text-white">
          <Link href="/">amil.dev</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-4 text-black">
          <li className="hover:bg-black hover:text-white hover:rounded-lg">
            {/* change buttons colors  */}
            <Link href="/about">About</Link>
          </li>

          <li className="hover:bg-black hover:text-white hover:rounded-lg">
            <Link href="/works">Works</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn text-white text-lg ">
          <MdDarkMode />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
