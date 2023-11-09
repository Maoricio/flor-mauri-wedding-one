import React from "react";
import { Box, HStack, useBreakpointValue } from "@chakra-ui/react";
import { TimeBox } from "./timeBox";
import { useCountdown } from "./useCountdown";

export const Clock = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date("02-10-2024 18:00:00 GMT-0300")
  );
  return (
    <Box
      position={"relative"}
      minH={"1px"}
      pr={useBreakpointValue({ base: "5px", md: "15px", lg: "15px" })}
      pl={useBreakpointValue({ base: "5px", md: "15px", lg: "15px" })}
    >
      <HStack
        overflow={"hidden"}
        mt={useBreakpointValue({ base: "4px", md: "13px", lg: "13px" })}
        justifyContent={"center"}
        gap={useBreakpointValue({ base: "8px", md: "10px", lg: "10px" })}
      >
        {/* dias */}
        <TimeBox time={days} value={"días"} />

        {/* Horas */}
        <TimeBox time={hours} value={"horas"} />

        {/* minutos */}
        <TimeBox time={minutes} value={"minutos"} />

        {/* segundos */}
        <TimeBox time={seconds} value={"segundos"} />
      </HStack>
    </Box>
  );
};
