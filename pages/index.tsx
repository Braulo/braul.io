import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className="flex">
        <div className="p-4 text-xl">😉</div>
        <h1 className="p-4 text-base w-2/3">
          Hello, my name is Paul im x years old and have been... todo Hello, my
          name is Paul im x years old and have been... todo Hello, my name is
          Paul im x years old and have been... todo Hello, my name is Paul im x
          years old and have been... todo Hello, my name is Paul im x years old
          and have been... todo
        </h1>
      </div>
      <div className="flex">
        <div className="p-4 text-xl">😎</div>
        <h1 className="p-4 text-base w-2/3">Todo Skills/ Languages</h1>
      </div>
      <div className="flex">
        <div className="p-4 text-xl">🤖</div>
        <h1 className="p-4 text-base w-2/3">Todo Github projekte</h1>
      </div>
      <div className="flex">
        <div className="p-4 text-xl">🤯</div>
        <h1 className="p-4 text-base w-2/3">Todo current profession</h1>
      </div>
    </div>
  );
};

export default Home;
