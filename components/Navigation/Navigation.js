import { MdDarkMode } from "react-icons/md";

const Navigation = () => {
  return (
    <div className="navbar bg-white">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl ">amil.dev</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 gap-4 text-white">
          <li>
            <button className="btn ">About</button>
          </li>
          <li>
            <button className="btn ">Works</button>
          </li>
          <li>
            <button className="btn">Contact</button>
          </li>
          <li>
            <button className="btn">About</button>
          </li>
          <li>
            <button className="btn text-xl">
              <MdDarkMode />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
