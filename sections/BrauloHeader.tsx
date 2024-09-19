import type { NextComponentType } from "next";
import ToggleTheme from "../components/ToggleTheme";

const BrauloHeader: NextComponentType = () => {
  return (
    <header>
      <div>
        <nav className="hidden md:flex text-white bg-black h-[6vh] justify-around items-center">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex gap-4 p-4">
              <li className="hover:text-[#00FF29] hover:underline">
                <a href="#history">History</a>
              </li>
              <li className="hover:text-[#00FF29] hover:underline">
                <a href="#skills">Skills</a>
              </li>
              <li className="hover:text-[#00FF29] hover:underline">
                <a href="#projects">Projects</a>
              </li>
              <li className="hover:text-[#00FF29] hover:underline">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <ToggleTheme></ToggleTheme>
        </nav>
      </div>
    </header>
  );
};

export default BrauloHeader;
