/**
 * types.ts
 * This file contains TypeScript type definitions used throughout the project. Currently, it defines 'SectionName',
 * a type that corresponds to the 'name' property in the elements of the 'links' array imported from the 'data' file.
 */

import { links } from "./data"; // Importing the 'links' array from the 'data' file

// Type definition for 'SectionName'
export type SectionName = (typeof links)[number]["name"];
