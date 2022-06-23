import { GitRepo } from "../types/GitRepo";

const blocklist = ["jan", "Braulo"];

const getGitRepos = async () => {
  return (
    (await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `token ${process.env.GitHubAccessToken}`,
      },
      method: "GET",
    }).then((response) => response.json())) as GitRepo[]
  ).filter(({ name }) => {
    return !blocklist.includes(name);
  });
};

export default getGitRepos;
