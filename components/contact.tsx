"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import ContactBtn from "./contact-btn";
import toast from "react-hot-toast";
import { useTheme } from "@/context/theme-context";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { theme } = useTheme();

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 text-center w-[min(100%, 38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-5 dark:text-white/80 ">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:landoeliacin@gmail.com">
          landoeliacin@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black/80 "
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            if (theme === "dark") {
              toast.error(error, {
                style: {
                  background: "#020617",
                  color: "#fff",
                  //border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
                },
              });
              return;
            } else {
              toast.error(error);
              return;
            }
          }

          if (theme === "dark") {
            toast.success("Email Sent Successfully!", {
              style: {
                background: "#020617",
                color: "#fff",
                //border: "1px solid rgba(255, 255, 255, 0.4)",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
              },
            });
          } else {
            toast.success("Email Sent Successfully!");
          }
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your Message"
          name="message"
          required
          maxLength={5000}
        />
        <ContactBtn />
      </form>
    </motion.section>
  );
}
