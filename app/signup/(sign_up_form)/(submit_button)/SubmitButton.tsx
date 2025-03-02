"use client";
import styles from "./SubmitButton.module.css";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
  text = "",
  pendingText = "로딩중...",
}: {
  text: string;
  pendingText?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={styles.button}>
      {pending ? pendingText : text}
    </button>
  );
}
