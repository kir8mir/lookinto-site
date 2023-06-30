import { useRouter } from "next/router";
import Main from "../src/components/Main";
import UserWords from "../src/components/UserWords/UserWords";

export default function Id() {
  const { query } = useRouter();

  return (
    <Main>
      <div>Юзер c ID - {query.id}</div>
      <UserWords />
    </Main>
  );
}
