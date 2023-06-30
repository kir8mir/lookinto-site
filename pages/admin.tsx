import Main from "../src/components/Main";
import { getAllUsers } from "../src/utils/getAllUsers";
import UsersList from "../src/components/UsersList";

export default function AdminPage({ users }: any) {
  return (
    <Main>
      <UsersList users={users}/>
    </Main>
  );
}

export async function getServerSideProps() {
  const users = await getAllUsers();
  console.log("users", users);
  return {
    props: {
      users,
    },
  };
}
