import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { BsDisplay } from "react-icons/bs";
import { useState } from "react";

const ContactForm = () => {
const [name, setName]=useState("Vaishnavi")
const [email, setEmail]=useState("vaish@gamil.com")
const [text, setText]=useState("I love it")

  const onSubmit = (event) => {
    event.preventDefault(); //to prevent relode of page after submit automaticaly
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoIosCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA CALL"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
          </div>

          <div>{name + " " + email + " " + text}</div>

        </form>
      </div>
      <div className={styles.image_contain}>
        <img src="/public/images/Service 24_7-pana 1.svg" alt="Contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
