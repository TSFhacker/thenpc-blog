"use client";

import { handleMessage } from "@/lib/actions";
import classes from "./contact-form.module.css";
import { useFormState } from "react-dom";
import Notification from "../ui/notification";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const [state, formAction] = useFormState(handleMessage, {
    title: "",
    status: "",
    message: "",
  });
  const [notification, setNotification] = useState(state.status.length > 0);

  useEffect(() => {
    console.log("status change");
    let timer;
    if (state.status) {
      timer = setTimeout(() => {
        setNotification(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [state.status]);

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} action={formAction}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows={5} required />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && <Notification {...state} />}
    </section>
  );
}
