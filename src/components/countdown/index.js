import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import { SectionWrapper } from "../../common/components";
import { Clock } from "./clock";
const eventPlace = require("./assets/la-guadalupe.jpeg");

export const Countdown = () => {
  return (
    <SectionWrapper
      backgroundImage={`url(${eventPlace})`}
      backgroundPosition={useBreakpointValue({
        base: "20% -110.7143px",
        md: "50% -21.7143px",
        lg: "50% -21.7143px",
      })}
      backgroundSize={useBreakpointValue({
        base: "",
        md: "cover",
        lg: "cover",
      })}
      position={"relative"}
      padding={useBreakpointValue({
        base: "75px 20px",
        md: "150px 0px",
        lg: "150px 0px",
      })}
      mt={"50px"}
      sx={{
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
      }}
    >
      <Clock />
    </SectionWrapper>
  );
};
