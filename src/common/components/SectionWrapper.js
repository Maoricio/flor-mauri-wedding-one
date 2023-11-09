import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

export const SectionWrapper = ({ children, ...rest }) => {
  return (
    <Box
      as={"section"}
      p={useBreakpointValue({
        base: "50px 20px 0px 20px",
        md: "0",
        lg: "60px 0 0 0",
      })}
      {...rest}
    >
      {children}
    </Box>
  );
};
