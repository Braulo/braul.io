const getLatestCommit = async () => {
  // returns the latest commit from braulo.xyz repo
  return (await fetch(
    "https://api.github.com/repos/braulo/braulo.xyz/commits/master",
    {
      headers: {
        Authorization: `token ${process.env.GitHubAccessToken}`,
      },
      method: "GET",
    }
  ).then((response) => response.json())) as { sha: string };
};

export default getLatestCommit;
