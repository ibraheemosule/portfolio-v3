import { ContactStyles } from "./ContactStyles.styled";
import img from "../../../../assets/img/image";
import SMHandles from "../../../others/SMhandles/SMHandles";
import { Button } from "../../../others/Button.styled";
import Image from "next/image";
import React, { useContext, useRef, useState } from "react";
import { Context } from "../../../../assets/utils/Context";
import emailjs from "@emailjs/browser";
import { Loader } from "../../../others/Loader.styled";

const lettersAndSpaceOnly = (value: string) => /^[A-Za-z\s]*$/.test(value);

const Contact = () => {
  const date = new Date();
  const { darkmode } = useContext(Context);
  const form = useRef<any>();
  const [loading, setLoading] = useState<string>("");
  const [error, setError] = useState<string>("");

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading("loading");
    setError("");

    const nameInput: HTMLInputElement = document.querySelector("#name")!,
      emailInput: HTMLInputElement = document.querySelector("#email")!,
      messageInput: HTMLInputElement = document.querySelector("#message")!,
      name = nameInput.value.trim(),
      email = emailInput.value.trim(),
      message = messageInput.value.trim();

    try {
      if (!name || !lettersAndSpaceOnly(name))
        throw new Error("Invalid Name syntax");

      if (!message || !email) throw new Error("Some fields are empty");

      if ((message + email).includes("<")) throw new Error("'<' not allowed");

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      );

      setLoading("success");
    } catch (e: any) {
      setLoading("unsuccessful");
      setError(e.message ? e.message : "An Error Occurred");
      setTimeout(() => {
        setLoading("");
        setError("");
      }, 3000);
    }
  };

  return (
    <ContactStyles darkMode={darkmode}>
      <h3>Contact Me</h3>
      <footer>
        <div>
          <Image
            src={img.email}
            height="90"
            width="100"
            alt="email delivery man"
            layout="responsive"
            priority={true}
          />
        </div>
        <div>
          <h4 id="Contact">Reach out in one click</h4>
          <p>
            Want to have a cup of coffee with me while we talk about building
            your amazing project ideas? Or do you have other opportunities you
            would like to share with me?
          </p>
          <div className="wrapper">
            {loading == "success" ? (
              <>
                <div className="feedback">
                  <h4>Thank you for contacting me!</h4>
                  <p>I will reply as soon as possible</p>
                </div>
              </>
            ) : (
              <form ref={form} onSubmit={submitForm}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input id="name" maxLength={30} type="text" name="name" />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input id="email" maxLength={30} type="email" name="email" />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message"></textarea>
                </div>

                <div className="btn-wrapper">
                  <Button>Email Me</Button>{" "}
                  {loading === "unsuccessful" ? <span>{error}</span> : ""}
                  {loading === "loading" ? <Loader /> : ""}
                </div>
              </form>
            )}

            <SMHandles />
          </div>
        </div>
      </footer>
      <span>
        <strong>Ibrahim</strong> &copy; {date.getFullYear()}
      </span>
    </ContactStyles>
  );
};

export default Contact;
