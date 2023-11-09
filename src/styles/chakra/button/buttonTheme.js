import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    fontFamily: "body",
    borderRadius: "5px",
    backgroundColor: "#5e9a8e",
    color: "#fff",
  },
  variants: {
    submit: {
      fontSize: "15px",
      mt: "25px",
      background: "#5e9a8e",
      color: "#fff",
      _hover: {
        background: "#5e9a8e",
        _disabled: {
          bg: "#5e9a8e",
        },
      },
      _disabled: {
        background: "#5e9a8e",
        _hover: {
          bg: "#5e9a8e",
        },
      },
    },
    add: {
      fontSize: "10px",
      p: "5px 20px",
      background: "#5e9a8e",
      color: "#fff",
      _hover: {
        background: "#5e9a8e",
        _disabled: {
          bg: "#5e9a8e",
        },
      },
      _disabled: {
        background: "#5e9a8e",
        _hover: {
          bg: "#5e9a8e",
        },
      },
    },
    delete: {
      fontSize: "10px",
      p: "5px 18px",
      ml: "10px",
      background: "#cb3234",
      color: "#fff",
      _hover: {
        background: "#cb3234",
        _disabled: {
          bg: "#cb3234",
        },
      },
      _disabled: {
        background: "#cb3234",
        _hover: {
          bg: "#cb3234",
        },
      },
    },
  },
});
