/**
 * sendEmail.ts
 * This file defines the 'sendEmail' function for server-side email sending in response to contact form submissions.
 * It uses the Resend library for email delivery, performs validation on the form data, and formats the email content
 * using a React component. The function handles both the success and error scenarios.
 */

"use server"; // Indicates that this file is intended for server-side execution

import React from "react";
import { Resend } from "resend"; // Importing Resend library for email sending
import { validateString, getErrorMessage } from "@/lib/utils"; // Utility functions for validation and error handling
import ContactFormEmail from "@/email/contact-form-email"; // Component to create an HTML email template

const resend = new Resend(process.env.RESEND_API_KEY); // Initializing Resend with an API key

// Function to send an email
export const sendEmail = async (formData: FormData) => {
  // Extracting sender email and message from the form data
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Simple server-side validation for sender email and message
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  let data;
  try {
    // Sending an email using Resend
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Sender's email
      to: "bytegrad@gmail.com", // Recipient's email
      subject: "Message from contact form", // Subject of the email
      reply_to: senderEmail, // Reply-to email address
      react: React.createElement(ContactFormEmail, {
        // Creating an email template using React
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    // Handling errors and returning a custom error message
    return { error: getErrorMessage(error) };
  }

  // Returning the response data from the email sending operation
  return { data };
};
