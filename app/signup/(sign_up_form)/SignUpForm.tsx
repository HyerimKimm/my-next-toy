"use client";

import { useActionState } from "react";
import styles from "./SignUpForm.module.css";
import { signUpUser } from "@/lib/user/actions/signUpAction";
import SubmitButton from "./(submit_button)/SubmitButton";

export default function SignUpForm() {
  const [state, formAction] = useActionState(signUpUser, {
    success: true,
    errorCode: "",
  });

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
        {!state.success && state.errorCode === "email" && (
          <div className={styles.error_text}>이메일을 확인해 주세요.</div>
        )}
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
        {!state.success && state.errorCode === "name" && (
          <div className={styles.error_text}>이름을 확인해 주세요.</div>
        )}
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
        {!state.success && state.errorCode === "password" && (
          <div className={styles.error_text}>비밀번호를 확인해 주세요.</div>
        )}
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
        {!state.success && state.errorCode === "passwordCheck" && (
          <div className={styles.error_text}>
            비밀번호를 확인을 확인해 주세요.
          </div>
        )}
        {!state.success &&
          state.errorCode === "passwordNotSameAsPasswordCheck" && (
            <div className={styles.error_text}>
              비밀번호와 비밀번호 확인이 일치하지 않습니다.
            </div>
          )}
      </label>
      <div className={styles.buttons_wrap}>
        <SubmitButton text="회원가입" />
      </div>
    </form>
  );
}
