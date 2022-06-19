import { GitRepo } from "../types/GitRepo";

const getGitRepos = async () => {
  return (await fetch("https://api.github.com/user/repos", {
    headers: {
      Authorization: `token ${process.env.GitHubAccessToken}`,
    },
    method: "GET",
  }).then((response) => response.json())) as GitRepo[];
};

export default getGitRepos;
