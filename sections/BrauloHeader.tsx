import type { NextComponentType } from "next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Sun from "../svg/sun";
import Moon from "../svg/moon";
import Link from "next/link";
import CopyIcon from "../svg/copyicon";
import publicKey from "../utils/public-key";
import copy from "copy-to-clipboard";

const BrauloHeader: NextComponentType = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeToggle = () => {
    if (!mounted) return null;
    const currentTheme = theme;

    return currentTheme === "dark" ? (
      <Button className="bg-white" onClick={() => setTheme("light")}>
        <Sun></Sun>
      </Button>
    ) : (
      <Button className="bg-black" onClick={() => setTheme("dark")}>
        <Moon></Moon>
      </Button>
    );
  };

  return (
    <header className="bg-black h-[6vh]">
      <div>
        <nav className="flex justify-center items-center">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex gap-4 p-4">
              <li className="hover:text-[#00FF29] hover:underline">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-[#00FF29] hover:underline">
                <a href="#">History</a>
              </li>
              <li className="hover:text-[#00FF29] hover:underline">
                <a href="#">Skills</a>
              </li>
              <li className="hover:text-[#00FF29] hover:underline">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className="cursor-pointer hover:text-[#00FF29]">
              <Link href="/" locale="en">
                Eng
              </Link>
            </div>
            <div className="cursor-pointer hover:text-[#00FF29]">
              <Link href="/" locale="de">
                De
              </Link>
            </div>
            <div>{renderThemeToggle()}</div>
          </div>
        </nav>
      </div>
      {/* <div className="p-4 pt-px flex flex-wrap">
        <div className="mr-3 hover:text-[#E32D3D]">
          <Link href="https://github.com/braulo">GitHub</Link>
        </div>
        <div className="mr-3 hover:text-[#E32D3D]">
          <Link href="https://twitter.com/braulo1337">Twitter</Link>
        </div>
        <div className="mr-3 hover:text-[#E32D3D]">
          <Link href="https://www.linkedin.com/in/paul-breuer-9230741a1/">LinkedIn</Link>
        </div>
        <div className="mr-3 flex">
          <Link href="mailto:breuer.paulo@googlemail.com">Email</Link>
          <div
            className="hover:text-[#E32D3D] cursor-pointer"
            onClick={() => copy("breuer.paulo@googlemail.com")}
          >
            <CopyIcon></CopyIcon>
          </div>
        </div>
        <div className="flex">
          <h3>Public Key</h3>
          <div className="hover:text-[#E32D3D] cursor-pointer" onClick={() => copy(publicKey())}>
            <CopyIcon></CopyIcon>
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default BrauloHeader;
