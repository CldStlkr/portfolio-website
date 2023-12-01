/**
 * contact-form-email.tsx
 * This file defines a React component to generate an HTML email template for contact form responses.
 * It uses various components from '@react-email/components' and Tailwind CSS for styling. The template
 * includes a message and the sender's email address, formatted in a clean and structured layout.
 */

import React from "react";
import {
  Html, // Component for the <html> tag
  Body, // Component for the <body> tag
  Head, // Component for the <head> tag
  Heading, // Component for creating headings in the email
  Hr, // Component for horizontal rule (line separator)
  Container, // Component for a container to structure the email content
  Preview, // Component for defining the preview text of the email
  Section, // Component for defining sections within the container
  Text, // Component for text content
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind"; // Tailwind CSS integration for styling

// Type definition for the props accepted by the component
type ContactFormEmailProps = {
  message: string; // Message received from the contact form
  senderEmail: string; // Email of the sender who filled out the contact form
};

// ContactFormEmail component: Constructs an email template for contact form submissions
export default function ContactFormEmail({
  message, // Destructuring message from props
  senderEmail, // Destructuring senderEmail from props
}: ContactFormEmailProps) {
  return (
    <Html>
      {" "}
      {/* HTML structure of the email */}
      <Head />
      <Preview>New message from your portfolio site</Preview>{" "}
      {/* Preview text of the email */}
      <Tailwind>
        {" "}
        {/* Tailwind CSS wrapper for styling */}
        <Body className="bg-gray-100 text-black">
          {" "}
          {/* Body of the email with styling */}
          <Container>
            {" "}
            {/* Main container for the email content */}
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              {" "}
              {/* Section for the message content */}
              <Heading className="leading-tight">
                {" "}
                {/* Heading for the email */}
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text> {/* Displaying the message received */}
              <Hr /> {/* Horizontal rule for separation */}
              <Text>The sender's email is: {senderEmail}</Text>{" "}
              {/* Displaying the sender's email */}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
