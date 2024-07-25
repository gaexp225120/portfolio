import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ExportedImage from "next-image-export-optimizer";
import CustomInput from "./CustomInput";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type FormEvent = React.FormEvent<HTMLFormElement>;

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

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
            src="/images/email.svg"
            alt="Email"
            width={350}
            height={200}
            className="hidden lg:block"
          />
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
              className="resize-none block p-2.5 w-full text-sm text-mainWhite bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            />
          </div>
          <div className="w-full flex justify-center mt-8">
            <button
              type="submit"
              className="px-12 py-4 rounded-full bg-pureWhite font-bold text-pureBlack tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
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
