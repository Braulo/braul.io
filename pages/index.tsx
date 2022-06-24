import type { GetServerSideProps } from "next";
import BrauloHeader from "../sections/BrauloHeader";
import GitHubLogo from "../svg/github";
import { GitRepo } from "../types/GitRepo";
import getGitRepos from "../utils/git-repos";
import getLatestCommit from "../utils/latest-commit";
import useTranslation from "next-translate/useTranslation";
import { privateProjects } from "../utils/private-projects";
import WebsiteIcon from "../svg/website";

const Home = ({
  repos,
  latestCommit,
}: {
  repos: GitRepo[];
  latestCommit: { sha: string };
}) => {
  const { t } = useTranslation("common");
  return (
    <>
      <BrauloHeader></BrauloHeader>
      <div className="h-auto">
        <div className="flex">
          <div className="p-4 text-xl">😉</div>
          <div>
            <h1 className="p-4 font-bold w-full md:w-1/2 sm:w-1/2">
              {t("me")}
            </h1>
            <h1 className="p-4 pt-0 text-base w-full md:w-1/2 sm:w-1/2">
              {t("me2")}
            </h1>
          </div>
        </div>
        <div className="flex">
          <div className="p-4 text-xl">🤓</div>
          <div className="p-4 text-base w-2/3">
            <ul>
              <li className="text-lg font-bold">
                {t("programming-languages")}
              </li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Solidity</li>
              <li>C#</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS/ SCSS</li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <div className="p-4 text-xl">🤖</div>
          <div className="p-4 text-base w-2/3">
            <ul>
              <li className="text-lg font-bold">{t("technologies")}</li>
              <li>Angular</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Docker</li>
              <li>Express.js</li>
              <li>ASP.NET</li>
              <li>SQL</li>
              <li>Hardhat/ Truffle</li>
              <li>Redux/ NGRX</li>
            </ul>
          </div>
        </div>
        <div className="flex md:flex">
          <div className="p-4 text-xl">😎</div>
          <div className="flex-1 mr-0 md:mr-48">
            <h1 className="p-4 text-lg font-bold">{t("projects")}</h1>
            <div>
              <div className="grid md:grid-cols-3 gap-4 p-4">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    target="_blank"
                    rel="noreferrer"
                    href={repo.html_url}
                    className="block p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors duration-500"
                  >
                    <div className="flex justify-between">
                      <h5 className="mb-2 text-lg font-bold tracking-tight text-black-900 dark:text-white break-words">
                        {repo.name}
                      </h5>
                      <GitHubLogo></GitHubLogo>
                    </div>
                    <p className="font-normal text-white-700 dark:text-black-400 break-words">
                      {repo.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex">
          <div className="p-4 text-xl">🤫</div>
          <div>
            <h1 className="p-4 text-lg font-bold">{t("closed-projects")}</h1>
            <div className="flex-1 mr-0 md:mr-48">
              <div className="grid md:grid-cols-3 gap-4 p-4">
                {privateProjects.map((project) => (
                  <a
                    key={project.name}
                    target="_blank"
                    rel="noreferrer"
                    href={project.website || ""}
                    className={
                      project.website
                        ? "block p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors duration-500"
                        : "block disabledlink cursor-auto p-4 bg-white rounded-lg border border-gray-200 dark:bg-slate-900 dark:border-gray-700 transition-colors duration-500"
                    }
                  >
                    <div className="flex justify-between">
                      <h5 className="mb-2 text-lg font-bold tracking-tight text-white-900 dark:text-white break-words">
                        {project.name}
                      </h5>
                      {project.website ? <WebsiteIcon></WebsiteIcon> : ""}
                    </div>
                    <br />
                    <div>
                      <p className="font-bold text-white-700 dark:text-black-400">
                        {t("description")}
                      </p>
                      <p className="font-normal text-white-700 dark:text-black-400 break-words">
                        {t(project.description)}
                      </p>
                    </div>
                    <br />
                    <div>
                      <p className="font-bold text-white-700 dark:text-black-400">
                        Status:
                      </p>
                      <p className="font-normal text-white-700 dark:text-black-400 break-words">
                        {t(project.status)}
                      </p>
                    </div>
                    <br />
                    <div>
                      <p className="font-bold text-white-700 dark:text-black-400">
                        Techstack:
                      </p>
                      <p className="font-normal text-white-700 dark:text-black-400 break-words">
                        {project.techstack}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex flex-row-reverse">
        <div className="p-4">
          <a
            href={
              "https://github.com/Braulo/braulo.xyz/commit/" + latestCommit.sha
            }
          >
            <h1 className="">
              commit{" "}
              <span className="text-[#E32D3D]">
                {latestCommit?.sha?.slice(0, 7)}
              </span>
            </h1>
          </a>
        </div>
      </footer>
    </>
  );
};

// executes for every request to the server
export const getServerSideProps: GetServerSideProps = async () => {
  const repos = await getGitRepos();
  const latestCommit = await getLatestCommit();

  return {
    props: {
      repos,
      latestCommit,
    },
  };
};

export default Home;
