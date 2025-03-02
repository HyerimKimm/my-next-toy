"use server";

import dayjs from "dayjs";
import { saveUser } from "./users";

type CreateUserType = {
  email: string;
  password: string;
  username: string;
  created_date: string;
};

export async function signUpUser(
  prevState: { message: string },
  formData: FormData
) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const email = formData.get("email") as string | null;
    const password = formData.get(`password`) as string | null;
    const username = formData.get(`username`) as string | null;

    if (!email || !(email.trim() === "" || !email.includes("@"))) {
      return {
        message: "이메일을 확인해 주세요.",
      };
    }

    if (!password || !(password.trim() === "")) {
      return {
        message: "비밀번호를 확인해 주세요.",
      };
    }

    if (!username || !(username.trim() === "")) {
      return {
        message: "이름을 확인해 주세요.",
      };
    }

    const user: CreateUserType = {
      email: email,
      password: password,
      username: username,
      created_date: dayjs().format(`YYYY-MM-DD HH:mm:ss`),
    };

    await saveUser(user);

    return { message: "회원가입 완료!" };
  } catch (e) {
    return {
      message: "회원가입 실패",
    };
  }
}
