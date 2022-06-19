import type { GetStaticProps } from "next";
import BrauloHeader from "../sections/BrauloHeader";
import { GitRepo } from "../types/GitRepo";
import getGitRepos from "../utils/git-repos";
import getLatestCommit from "../utils/latest-commit";

const Home = ({
  repos,
  latestCommit,
}: {
  repos: GitRepo[];
  latestCommit: { sha: string };
}) => {
  return (
    <>
      <BrauloHeader></BrauloHeader>
      <div className="h-screen">
        <div className="flex">
          <div className="p-4 text-xl">😉</div>
          <h1 className="p-4 text-base w-2/3">
            Hello, my name is Paul im x years old and have been... todo Hello,
            my name is Paul im x years old and have been... todo Hello, my name
            is Paul im x years old and have been... todo Hello, my name is Paul
            im x years old and have been... todo Hello, my name is Paul im x
            years old and have been... todo
          </h1>
        </div>
        <div className="flex">
          <div className="p-4 text-xl">😎</div>
          <h1 className="p-4 text-base w-2/3">Todo Skills/ Languages</h1>
        </div>
        <div className="flex">
          <div className="p-4 text-xl">🤖</div>
          <div>
            {repos.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </div>
          <h1 className="p-4 text-base w-2/3">Todo Github projekte</h1>
        </div>
        <div className="flex">
          <div className="p-4 text-xl">🤯</div>
          <h1 className="p-4 text-base w-2/3">Todo current profession</h1>
        </div>
      </div>
      <footer>
        <div>
          <h1>Commit {latestCommit?.sha?.slice(0, 7)}</h1>
        </div>
      </footer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
