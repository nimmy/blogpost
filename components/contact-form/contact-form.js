import React, { useState, useRef } from "react";
import style from "./contact-form.module.css";
import Notification from "./../ui/notification";

async function sendFormData(contactFormDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactFormDetails),
  });

  const result = response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong!");
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requsetStatus, setRequestStatus] = useState(); // Pending, success, error

  const data = {
    email: enteredEmail,
    name: enteredName,
    message: enteredMessage,
  };

  async function subbmitForm(e) {
    e.preventDefault();
    setRequestStatus("pending");

    try {
      await sendFormData(data);
      setRequestStatus("success");
    } catch (error) {
      setRequestStatus("error");
    }
  }

  let notification;

  if (requsetStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way",
    };
  }

  if (requsetStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully",
    };
  }

  if (requsetStatus === "error") {
    notification = {
      status: "error",
      title: "error!",
      message: "There is an error",
    };
  }

  return (
    <section className={style.contact}>
      <h1>How may i Help you</h1>
      <form className={style.form} onSubmit={subbmitForm}>
        <div className={style.controls}>
          <div className={style.control}>
            <label htmlFor="email">Your Email</label>
            <input
              name="email"
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={style.control}>
            <label htmlFor="name">Your Name</label>
            <input
              name="name"
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
          <div className={style.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              value={enteredMessage}
              onChange={(event) => setEnteredMessage(event.target.value)}
            ></textarea>
          </div>
          <div className={style.actions}>
            <button>Send Message</button>
          </div>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
