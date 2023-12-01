/**
 * utils.ts
 * This file defines utility functions for general purpose use in a TypeScript project.
 * 'validateString' checks if a given value is a string and within a specified length.
 * 'getErrorMessage' extracts a readable message from an error object or string.
 */

// Function to validate a string input
export const validateString = (
  value: unknown, // The value to be validated, type is unknown
  maxLength: number // The maximum length allowed for the value
): value is string => {
  // Return type is a type predicate, indicating whether the value is a string
  // Check if the value is not falsy, is a string, and its length does not exceed the maxLength
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false; // If any condition fails, return false
  }

  return true; // If all conditions pass, return true
};

// Function to extract an error message from an error object or string
export const getErrorMessage = (error: unknown): string => {
  // Declare a variable to store the error message
  let message: string;

  // Determine the type of the error and extract the message accordingly
  if (error instanceof Error) {
    // If error is an instance of Error, get the message directly
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    // If error is an object and has a message property, convert it to string
    message = String(error.message);
  } else if (typeof error === "string") {
    // If error is a string, use it as the message
    message = error;
  } else {
    // If none of the above, set a generic error message
    message = "Something went wrong";
  }

  // Return the extracted or default error message
  return message;
};
