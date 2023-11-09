import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button/buttonTheme";

export const chakraTheme = extendTheme({
  fonts: {
    heading: `"Poppins", cursive`,
    body: `"Nunito", sans-serif`,
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "2rem", // 32px
    "4xl": "2.5rem", // 40px
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 400,
        lineHeight: "32px",
      },
      sizes: {
        small: {
          fontSize: "xl",
          lineHeight: "24px",
        },
        regular: {
          fontSize: "2xl",
          lineHeight: "32px",
        },
        large: {
          fontSize: "3xl",
          lineHeight: "40px",
        },
        headline: {
          fontSize: "4xl",
          lineHeight: "48px",
        },
      },
      defaultProps: {
        size: "regular",
      },
    },
    Text: {
      baseStyle: {
        fontWeight: 400,
      },
      sizes: {
        mini: {
          fontSize: "xs",
          lineHeight: "16px",
        },
        smallAlt: {
          fontSize: "sm",
          lineHeight: "20px",
          letterSpacing: "0.01em",
        },
        small: {
          fontSize: "sm",
          lineHeight: "16px",
          letterSpacing: "0.01em",
        },
        regular: {
          fontSize: "md",
          lineHeight: "24px",
        },
        large: {
          fontSize: "lg",
          lineHeight: "24px",
        },
      },
      defaultProps: {
        size: "regular",
      },
    },
    Button,
  },
});
