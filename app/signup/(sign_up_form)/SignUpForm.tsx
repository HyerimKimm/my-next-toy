"use client";

import { useActionState } from "react";
import styles from "./SignUpForm.module.css";
import { signUpUser } from "@/lib/actions";
import SubmitButton from "./(submit_button)/SubmitButton";

export default function SignUpForm() {
  const [state, formAction] = useActionState(signUpUser, { message: "" });

  return (
    <form className={styles.form} action={formAction}>
      <h2>회원가입</h2>
      <label htmlFor="id" className={styles.input_wrap}>
        <div>이메일</div>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="이메일을 입력해 주세요."
          required
        />
      </label>
      <label htmlFor="name" className={styles.input_wrap}>
        <div>이름</div>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="이름을 입력해 주세요."
          required
        />
      </label>
      <label htmlFor="password" className={styles.input_wrap}>
        <div>비밀번호</div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          required
        />
      </label>
      <label htmlFor="passwordCheck" className={styles.input_wrap}>
        <div>비밀번호 확인</div>
        <input
          id="passwordCheck"
          name="passwordCheck"
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해 주세요."
          required
        />
      </label>
      <div className={styles.buttons_wrap}>
        <SubmitButton text="회원가입" />
      </div>
    </form>
  );
}
