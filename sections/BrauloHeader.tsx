import type { NextComponentType } from "next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Sun from "../svg/sun";
import Moon from "../svg/moon";
import Link from "next/link";
import CopyIcon from "../svg/copyicon";
import copyToClipboard from "../utils/uitls";
import publicKey from "../utils/public-key";

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
    <>
      <div className="p-4 flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">Paul Breuer</h1>
        </div>
        <div className="flex">
          <div className="m-1 cursor-pointer hover:text-[#E32D3D]">
            <Link href="/" locale="en">
              <h2>Eng</h2>
            </Link>
          </div>
          <div className="m-1 mr-4 cursor-pointer hover:text-[#E32D3D]">
            <Link href="/" locale="de">
              <h2>De</h2>
            </Link>
          </div>
          <div>{renderThemeToggle()}</div>
        </div>
      </div>
      <div className="p-4 pt-px flex flex-wrap">
        <div className="mr-3 hover:text-[#E32D3D]">
          <Link href="https://github.com/braulo">GitHub</Link>
        </div>
        <div className="mr-3 hover:text-[#E32D3D]">
          <Link href="https://twitter.com/braul1337">Twitter</Link>
        </div>
        <div className="mr-3 flex">
          <Link href="mailto:breuer.paulo@googlemail.com">Email</Link>
          <div
            className="hover:text-[#E32D3D] cursor-pointer"
            onClick={() => copyToClipboard("breuer.paulo@googlemail.com")}
          >
            <CopyIcon></CopyIcon>
          </div>
        </div>
        <div className="flex">
          <h3>GPG Key</h3>
          <div
            className="hover:text-[#E32D3D] cursor-pointer"
            onClick={() => copyToClipboard(publicKey())}
          >
            <CopyIcon></CopyIcon>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrauloHeader;
