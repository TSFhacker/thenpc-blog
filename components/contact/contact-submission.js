"use client";
import classes from "./contact-form.module.css";
import useFormStatus from "react-dom";

export default function ContactSubmission() {
  const { pending } = useFormStatus();

  return (
    <div className={classes.actions}>
      <button disabled={pending}>Send Message</button>
    </div>
  );
}
