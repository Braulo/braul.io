import type { NextComponentType } from "next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Sun from "../svg/sun";
import Moon from "../svg/moon";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const BraulHeader: NextComponentType = () => {
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
        <div>{renderThemeToggle()}</div>
      </div>
      <div className="p-4 pt-px flex flex-wrap">
        <div className="mr-3 hover:text-[#E32D3D]">
          <Link href="https://github.com/braulo">GitHub</Link>
        </div>
        <div className="mr-3 hover:text-[#E32D3D]">
          <Link href="https://twitter.com/braul1337">Twitter</Link>
        </div>
        <div className="hover:text-[#E32D3D]">
          <Link href="mailto:breuer.paulo@googlemail.com">Email</Link>
        </div>
      </div>
    </>
  );
};

export default BraulHeader;
