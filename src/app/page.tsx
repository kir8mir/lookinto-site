import Image from "next/image";
import styles from "./page.module.css";
import { getAllUsers } from "../utils/getAllUsers";
import Main from "../components/Main";

export default function Home({ users }: any) {

  return (
    <Main className={styles.main}>
      <h1>Main Page</h1>
    </Main>
  );
}
