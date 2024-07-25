import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ExportedImage from "next-image-export-optimizer";
import CustomInput from "./CustomInput";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type FormEvent = React.FormEvent<HTMLFormElement>;

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isHovered, setIsHovered] = useState({
    "contact-github": false,
    "contact-linkedln": false,
  });
  const handleMouseEvent = (e: React.MouseEvent<HTMLImageElement>) => {
    const IsEnter = e.type === "mouseenter";
    const imageId = e.currentTarget.id;
    setIsHovered({ ...isHovered, [imageId]: IsEnter ? true : false });
  };

  const sendEmail = (event: FormEvent) => {
    event.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      throw new Error("One or more EmailJS environment variables are missing.");
    }

    if (form.current) {
      emailjs
        .sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          form.current,
          EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <section className="rounded-[5px] max-w-[1000px] mx-auto bg-form-gradient">
      <div className="flex flex-col md:flex-row ">
        <div className="rounded-l-[5px] flex flex-col items-center flex-1 px-5">
          <div className="py-4 lg:py-8 px-4 mx-auto">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white ">
              CONTACT ME!
            </h2>
            <p className="font-light text-center text-white sm:text-xl">
              Contact me by submitting the form below and I&apos;ll get back to
              you as soon as possible!!
            </p>
          </div>
          <ExportedImage
            src="./images/email.svg"
            alt="Email"
            width={300}
            height={200}
            className="hidden lg:block"
          />
          <div className="flex flex-row w-full justify-around">
            <ExportedImage
              src={
                isHovered["contact-linkedln"]
                  ? "linkedin-hover.svg"
                  : "linkedin.svg"
              }
              alt="linkedln"
              id="contact-linkedln"
              width={40}
              height={40}
              className="hidden lg:block cursor-pointer"
              onMouseEnter={handleMouseEvent}
              onMouseLeave={handleMouseEvent}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/chun-huan-w-276032206/",
                  "_blank"
                );
              }}
            />
            <ExportedImage
              src={
                isHovered["contact-github"] ? "github-hover.svg" : "github.svg"
              }
              alt="github"
              id="contact-github"
              width={40}
              height={40}
              className="hidden lg:block cursor-pointer"
              onMouseEnter={handleMouseEvent}
              onMouseLeave={handleMouseEvent}
              onClick={() => {
                window.open("https://github.com/gaexp225120", "_blank");
              }}
            />
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" px-8 py-4 lg:py-8 flex-1 "
        >
          <div>
            <CustomInput
              inputType="text"
              inputname="user_name"
              id="user_name"
              label="Your Name"
              isTextArea={false}
              placeholder="Let us know how we can help you"
            />
            <CustomInput
              inputType="email"
              inputname="user_email"
              id="email"
              label="Your email"
              isTextArea={false}
              placeholder="name@flowbite.com"
            />
          </div>
          <div className="sm:col-span-2">
            <CustomInput
              inputname="message"
              id="message"
              label="Your message"
              isTextArea={true}
              placeholder="Leave a comment..."
            />
          </div>
          <div className="w-full flex justify-center mt-8">
            <button
              type="submit"
              className="px-12 py-4 rounded-[10px] bg-pureWhite font-bold text-pureBlack tracking-widest uppercase transform hover:scale-105 hover:bg-formbuttonHover transition-colors duration-200"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
