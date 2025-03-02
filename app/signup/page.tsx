import styles from "./page.module.css";

import SignUpForm from "./(sign_up_form)/SignUpForm";

export default function SignUpPage() {
  return (
    <div className={styles.page}>
      <SignUpForm />
    </div>
  );
}
