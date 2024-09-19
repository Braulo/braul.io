import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
import Sun from "../svg/sun";
import Moon from "../svg/moon";

const ToggleTheme = () => {
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
    </>
  );
};

export default ToggleTheme;
