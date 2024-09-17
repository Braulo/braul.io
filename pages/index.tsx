import type { GetServerSideProps } from "next";
import BrauloHeader from "../sections/BrauloHeader";
import getLatestCommit from "../utils/latest-commit";
import useTranslation from "next-translate/useTranslation";
import { IoIosArrowDown } from "react-icons/io";

const Home = ({ latestCommit }: { latestCommit: { sha: string } }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <BrauloHeader></BrauloHeader>
      <main className="h-[94vh]">
        <div className="w-[40rem] m-auto">
          <div className="flex flex-col justify-around h-[94vh]">
            <div className="">
              <h1 className="text-2xl font-bold">Hi, im Paul </h1>
              <h1 className="text-2xl">a Fullstack Developer</h1>
              <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, libero iste.
                Dicta repudiandae magnam cum illo eius amet quisquam modi nemo reiciendis neque nisi
                voluptatem, esse, debitis magni fuga enim. Quasi autem odit amet delectus.
                Blanditiis dicta obcaecati repudiandae, cumque distinctio cupiditate aperiam
                suscipit pariatur alias sed non rerum facere.
              </p>
            </div>
            <span className="self-center">
              <IoIosArrowDown size={60} />
            </span>
          </div>

          <h1 className="text-2xl font-bold">History</h1>
        </div>
      </main>
      <footer className="flex flex-row-reverse">
        <div className="p-4">
          <a href={"https://github.com/Braulo/braulo.xyz/commit/" + latestCommit.sha}>
            <h1 className="">
              commit <span className="text-[#00FF29]">{latestCommit?.sha?.slice(0, 7)}</span>
            </h1>
          </a>
        </div>
      </footer>
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
