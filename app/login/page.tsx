"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function handleSignUpClick() {
    router.push(`/signup`);
  }

  return (
    <div className={styles.page}>
      <form className={styles.form}>
        <h2>로그인</h2>
        <label htmlFor="id" className={styles.input_wrap}>
          <div>아이디</div>
          <input
            id="id"
            type="text"
            placeholder="아이디를 입력해 주세요."
            required
          />
        </label>
        <label htmlFor="password" className={styles.input_wrap}>
          <div>비밀번호</div>
          <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            required
          />
        </label>
        <div className={styles.buttons_wrap}>
          <button className={styles.login_button}>로그인</button>
          <button
            type="button"
            className={styles.sign_up_button}
            onClick={handleSignUpClick}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
