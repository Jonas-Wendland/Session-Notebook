import { createGlobalStyle } from "styled-components";
import { Lora } from "next/font/google";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${lora.style.fontFamily}, serif, system-ui;
  }
`;

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});
