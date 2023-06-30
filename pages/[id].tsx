"use client";
import { useRouter } from "next/router";
import Main from "../src/components/Main";
import UserWords from "../src/components/UserWords/UserWords";
import { getAllNewByUserId } from "../src/utils/getAllNewByUserId";
import { getAllFamiliarByUserId } from "../src/utils/getAllFamiliarByUserId";
import { getAllForgottenByUserId } from "../src/utils/getAllForgottenByUserId";

export default function Id({
  newUserWords,
  familiarUserWords,
  forgottenUserWords,
}: any) {
  const { query } = useRouter();

  const auth = () => {
    //TODO: add auth if no localStorage
    typeof window !== "undefined" &&
      localStorage.getItem("userId") !== query.id as string &&
      localStorage.setItem("userId", query.id as string);
    return query.id as string;
  };

  const userId =
    typeof window !== "undefined" && localStorage.getItem("userId") && localStorage.getItem("userId") === query.id as string
      ? localStorage.getItem("userId")
      : auth();

  return (
    <Main>
      <div>Юзер c ID - {userId}</div>
      <UserWords
        newUserWords={newUserWords}
        familiarUserWords={familiarUserWords}
        forgottenUserWords={forgottenUserWords}
      />
    </Main>
  );
}

export async function getServerSideProps(context: any) {
  const userId = context.params.id;

  const newUserWords = await getAllNewByUserId(userId);
  const familiarUserWords = await getAllFamiliarByUserId(userId);
  const forgottenUserWords = await getAllForgottenByUserId(userId);

  return {
    props: {
      newUserWords,
      familiarUserWords,
      forgottenUserWords,
    },
  };
}
