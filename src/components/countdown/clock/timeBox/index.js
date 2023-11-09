import React from "react";
import { Text, VStack, useBreakpointValue } from "@chakra-ui/react";

export const TimeBox = ({ time, value }) => {
  return (
    <VStack
      background={"rgba(255, 255, 255, 0.9)"}
      width={useBreakpointValue({ base: "25%", md: "15%", lg: "10%" })}
      float={"left"}
      textAlign={"center"}
      padding={useBreakpointValue({ base: "10px", md: "15px", lg: "15px" })}
      borderRadius={"5px"}
      border={"5px solid rgba(0, 0, 0, 0.1)"}
    >
      <Text
        size={"large"}
        color={"#5e9a8e"}
        fontWeight={600}
        lineHeight={"1em"}
      >
        {time}
      </Text>
      <Text
        fontSize={"0.5em"}
        fontWeight={600}
        color={"#5e9a8e"}
        textTransform={"uppercase"}
      >
        {value}
      </Text>
    </VStack>
  );
};
