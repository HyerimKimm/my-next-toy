"use server";

import dayjs from "dayjs";
import { saveUser } from "../db/saveUser";

type CreateUserType = {
  email: string;
  password: string;
  passwordCheck: string;
  username: string;
  createdDate: string;
};

export async function signUpUser(
  prevState: { errorCode: string },
  formData: FormData
) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const email = formData.get("email") as string | null;
    const password = formData.get(`password`) as string | null;
    const passwordCheck = formData.get(`passwordCheck`) as string | null;
    const username = formData.get(`username`) as string | null;

    if (!email || email.trim() === "" || !email.includes("@")) {
      return {
        success: false,
        errorCode: "email",
      };
    }

    if (!password || password.trim() === "") {
      return {
        success: false,
        errorCode: "password",
      };
    }

    if (!passwordCheck || passwordCheck.trim() === "") {
      return {
        success: false,
        errorCode: "passwordCheck",
      };
    }

    if (password !== passwordCheck) {
      return {
        success: false,
        errorCode: "passwordNotSameAsPasswordCheck",
      };
    }

    if (!username || username.trim() === "") {
      return {
        success: false,
        errorCode: "username",
      };
    }

    const user: CreateUserType = {
      email: email,
      password: password,
      passwordCheck: passwordCheck,
      username: username,
      createdDate: dayjs().format(`YYYY-MM-DD HH:mm:ss`),
    };

    await saveUser(user);

    return {
      success: true,
      errorCode: "",
    };
  } catch (e) {
    return {
      success: false,
      errorCode: "any",
    };
  }
}
