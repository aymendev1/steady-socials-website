import { Merriweather, Great_Vibes } from "next/font/google";

export const merriweather = Merriweather({
  subsets: ["latin"], // Specify subsets (e.g., latin, latin-ext, etc.)
  weight: ["300", "400", "700", "900"], // Specify the font weights you need
  style: ["normal", "italic"], // Specify styles if needed
});

export const great_Vibes = Great_Vibes({
  subsets: ["latin"], // Specify subsets (e.g., latin, latin-ext, etc.)
  weight: ["400"], // Specify the font weights you need
  style: ["normal"], // Specify styles if needed
});
