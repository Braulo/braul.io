const getLatestCommit = async () => {
  // returns the latest commit from braulo.xyz repo
  return (await fetch(
    "https://api.github.com/repos/braulo/braulo.xyz/commits/master",
    { method: "GET" }
  ).then((response) => response.json())) as { sha: string };
};

export default getLatestCommit;
