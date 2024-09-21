import type { NextComponentType } from "next";
import ToggleTheme from "../components/ToggleTheme";
import useTranslation from "next-translate/useTranslation";

const BrauloHeader: NextComponentType = () => {
  const { t } = useTranslation("common");

  return (
    <header>
      <div>
        <nav className="hidden md:flex text-white bg-black h-[6vh] justify-around items-center">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex gap-4 p-4">
              <li className="hover:text-[#00FF29] hover:underline">
                <a href="#history">{t("history")}</a>
              </li>
              <li className="hover:text-[#00FF29] hover:underline">
                <a href="#skills">{t("skills")}</a>
              </li>
              <li className="hover:text-[#00FF29] hover:underline">
                <a href="#projects">{t("projects")}</a>
              </li>
              <li className="hover:text-[#00FF29] hover:underline">
                <a href="#contact">{t("contact")}</a>
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
