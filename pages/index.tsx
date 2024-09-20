import type { GetServerSideProps } from "next";
import BrauloHeader from "../sections/BrauloHeader";
import getLatestCommit from "../utils/latest-commit";
import useTranslation from "next-translate/useTranslation";
import { IoIosArrowDown } from "react-icons/io";
import { skills } from "../utils/skills";
import CopyIcon from "../svg/copyicon";
import copy from "copy-to-clipboard";
import Link from "next/link";
import GitHubLogo from "../svg/github";
import LinkedIn from "../svg/linkedin";
import { IoMailOutline } from "react-icons/io5";
import NavbarMobile from "../sections/NavbarMobile";
import { projects } from "../utils/projects";
import DialogProjects from "../components/Dialog";
import { useState } from "react";

const Home = ({ latestCommit }: { latestCommit: { sha: string } }) => {
  const { t } = useTranslation("common");
  const [openDialogs, setOpenDialogs] = useState<Record<string, boolean>>({});
  const [selectedValue, setSelectedValue] = useState("value");

  const handleClickOpen = (projectName: string) => {
    // Check if the dialog for this project has already been opened
    if (!openDialogs[projectName]) {
      setOpenDialogs((prevState) => ({
        ...prevState,
        [projectName]: true,
      }));
    }
  };

  const handleClose = (projectName: string, value: string) => {
    setOpenDialogs((prevState) => ({
      ...prevState,
      [projectName]: false,
    }));
    setSelectedValue(value);
  };

  return (
    <>
      <NavbarMobile></NavbarMobile>
      <BrauloHeader></BrauloHeader>
      <main className="h-[94vh]">
        <div className="md:w-[50rem] w-[20rem] m-auto flex flex-col gap-24 md:gap-32">
          <div className="flex flex-col justify-around h-[94vh]">
            <div className="flex flex-col sm:gap-6 gap-4 text-left">
              <div className="flex justify-start items-center gap-4">
                <div>
                  <h1 className="sm:text-5xl text-xl font-bold">Hi, I'm Paul </h1>
                  <h1 className="sm:text-5xl text-xl font-bold">a Fullstack Developer!</h1>
                </div>
              </div>
              <p className="sm:mt-10 mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, libero iste.
                Dicta repudiandae magnam cum illo eius amet quisquam modi nemo reiciendis neque nisi
                voluptatem, esse, debitis magni fuga enim. Quasi autem odit amet delectus.
                Blanditiis dicta obcaecati repudiandae, cumque distinctio cupiditate aperiam
                suscipit pariatur alias sed non rerum facere.
              </p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, libero iste.
                Dicta repudiandae magnam cum illo eius amet quisquam modi nemo reiciendis neque nisi
              </p>
              <button className="self-end inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  bg-[#00FF29] rounded-lg hover:bg-red  shadow-lg hover:ease-in-out hover:shadow-[#00FF29]/50 transition-all">
                Download CV
              </button>
            </div>
            <span className="self-center">
              <IoIosArrowDown size={60} />
            </span>
          </div>
          <div id="history">
            <div className="w-14 h-1 mb-3 bg-[#00FF29]" />
            <h1 className="text-2xl font-bold mb-10">History</h1>
            <div className="-my-6">
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex items-center justify-between gap-4">
                  <div className="font-caveat font-medium text-2xl mb-1 sm:mb-0 ">REWE Digital</div>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[#1E1E1E] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#00FF29] after:border-4 after:box-content after:border-[#1E1E1E] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"></div>
                  <div className="text-slate-500">2023</div>
                </div>
                <div className="text-slate-500">Fullstack Web Developer</div>
              </div>

              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex items-center justify-between gap-4">
                  <div className="font-caveat font-medium text-2xl mb-1 sm:mb-0">
                    ORBIT IT-Solutions
                  </div>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#1E1E1E] after:border-4 after:box-content after:border-[#1E1E1E] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"></div>
                  <div className="text-slate-500">2021</div>
                </div>
                <div className="text-slate-500">Fulltack Web Developer</div>
              </div>
            </div>
          </div>
          <div id="skills">
            <div className="w-14 h-1 mb-3 bg-[#00FF29]" />
            <h1 className="text-2xl font-bold mb-10">Skills</h1>
            <div className="flex flex-wrap">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="p-2 m-1 text-white bg-[#1E1E1E] rounded-full hover:bg-[#00FF29] hover:text-black hover:cursor-pointer"
                >
                  #{skill}
                </div>
              ))}
            </div>
          </div>
          <div id="projects">
            <div className="w-14 h-1 mb-3 bg-[#00FF29]" />
            <h1 className="text-2xl font-bold">Public Projects</h1>
            <p className="text text-slate-500 mb-10">contact me for project-related work</p>

            <div className="flex flex-wrap gap-4">
              {projects.map((project) => (
                <div key={project.name}>
                  <div
                    className="max-w-sm dark:bg-[#1E1E1E] rounded-lg shadow-xl  shadow-[#00FF29]/10 hover:bg-gradient-to-t from-[#00FF29]/[0.5] hover:cursor-pointer"
                    onClick={() => handleClickOpen(project.name)}
                  >
                    <img className="rounded-t-lg" src={project.mainImage} alt="not found" />
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight">{project.name}</h5>
                      </a>
                      <p className="mb-3 font-normal">{project.shortDescription}</p>
                      <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  bg-[#00FF29] rounded-lg hover:bg-red">
                        Read more
                        <DialogProjects
                          selectedValue={selectedValue}
                          open={openDialogs[project.name] || false}
                          onClose={(value: any) => handleClose(project.name, value)}
                          project={project}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="contact">
            <div className="w-14 h-1 mb-3 bg-[#00FF29]" />
            <h1 className="text-2xl font-bold mb-10">Contact</h1>
            <div>
              <div className="mt-12 flex h-32 rounded-lg justify-around items-center bg-gradient-to-t from-[#00FF29]/[0.2]">
                <div className="mr-3 flex items-center gap-1">
                  <IoMailOutline size={32} />
                  <Link href="mailto:breuer.paulo@googlemail.com">breuerpaul@outlook.com</Link>
                  <div
                    className="hover:text-[#00FF29] cursor-pointer"
                    onClick={() => copy("breuerpaul@outlook.com")}
                  >
                    <CopyIcon></CopyIcon>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div>
                    <Link href="https://github.com/braulo">
                      <GitHubLogo></GitHubLogo>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.linkedin.com/in/paul-breuer-9230741a1/">
                      <LinkedIn></LinkedIn>
                    </Link>
                  </div>
                </div>
                {/* <div className="flex">
                  <h3>Public Key</h3>
                  <div
                    className="hover:text-[#00FF29] cursor-pointer"
                    onClick={() => copy(publicKey())}
                  >
                    <CopyIcon></CopyIcon>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <footer className="flex flex-row-reverse">
          <div className="p-4">
            <a href={"https://github.com/Braulo/braulo.xyz/commit/" + latestCommit.sha}>
              <h1 className="">
                commit <span className="text-[#00FF29]">{latestCommit?.sha?.slice(0, 7)}</span>
              </h1>
            </a>
          </div>
        </footer>
      </main>
    </>
  );
};

// executes for every request to the server
export const getServerSideProps: GetServerSideProps = async () => {
  const latestCommit = await getLatestCommit();

  return {
    props: {
      latestCommit,
    },
  };
};

export default Home;
