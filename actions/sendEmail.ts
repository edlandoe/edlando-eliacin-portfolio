"use server";

import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid Sender Email" };
  }

  if (!validateString(message, 5000)) {
    return { error: "Invalid Message" };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: senderEmail as string,
      to: ["landoeliacin@gmail.com"],
      subject: "Message from Portfolio Contact Form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
    console.log(data);
  } catch (error: unknown) {
    console.log("Caught error:", error);
    return { error: getErrorMessage(error) };
  }

  return {
    data,
  };
};
