"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Button from "../components/ButtonNavbar";
import Link from "next/link";
import ToggleTheme from "../components/ToggleTheme";
import useTranslation from "next-translate/useTranslation";

const menu = [
  { name: "history", link: "#history" },
  { name: "skills", link: "#skills" },
  { name: "projects", link: "#projects" },
  { name: "contact", link: "#contact" },
];
const NavbarMobile = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handler = (event: { target: any }) => {
      if (navbarOpen && ref.current && !(ref.current as any).contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [navbarOpen]);

  const { t } = useTranslation("common");

  return (
    <>
      <nav
        ref={ref}
        className="navbar text-white md:hidden top-0 w-full h-[5vh] flex p-8 bg-black gap-3 justify-between items-center"
      >
        <div className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
          {navbarOpen ? (
            <MdClose style={{ width: "32px", height: "32px" }} />
          ) : (
            <FiMenu
              style={{
                width: "32px",
                height: "32px",
              }}
            />
          )}
          <ul className={`menu-nav${navbarOpen ? " show-menu" : ""} mt-3`}>
            {menu?.map((item) => (
              <li key={item.name}>
                <Button className="hover:underline hover:text-[#00FF29]">
                  <Link href={"/" + item.link}>
                    <p className="font-light">{t(item.name)}</p>
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <ToggleTheme></ToggleTheme>
      </nav>
    </>
  );
};

export default NavbarMobile;
