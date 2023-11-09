import React from "react";
import {
  Box,
  Heading,
  Image,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
const fotoJuntos = require("./assets/foto-juntos.jpeg");

export const HeaderPhoto = () => {
  return (
    <VStack
      as={"section"}
      h={useBreakpointValue({ base: "30vh", md: "85vh", lg: "85vh" })}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      <Box overflow={"hidden"} position={"relative"} w={"100%"} h={"100%"}>
        <Image
          src={fotoJuntos}
          alt={"foto juntos"}
          backgroundSize={"cover"}
          width={"100%"}
          objectFit={"100%"}
          h={useBreakpointValue({ base: "auto", md: "", lg: "" })}
        />
      </Box>
      <VStack
        position={"absolute"}
        bottom={0}
        marginBottom={useBreakpointValue({
          base: "20px",
          md: "70px",
          lg: "100px",
        })}
        filter={"drop-shadow(5px 4px 3px black)"}
      >
        <Heading
          fontFamily={"Satisfy"}
          fontSize={useBreakpointValue({
            base: "40px",
            md: "70px",
            lg: "90px",
          })}
          lineHeight={"48px"}
          color={"#fff"}
          m={0}
          mb={useBreakpointValue({
            md: "20px",
            lg: "20px",
          })}
          textShadow={useBreakpointValue({
            base: "1px 2px 2px rgba(0, 0, 0, 1)",
            md: "3px 5px 3px rgba(0, 0, 0, 1)",
            lg: "3px 5px 3px rgba(0, 0, 0, 1)",
          })}
        >
          Flor & Mauri
        </Heading>
        <Heading
          fontFamily={"Satisfy"}
          fontSize={useBreakpointValue({
            base: "32px",
            md: "60px",
            lg: "60px",
          })}
          lineHeight={"40px"}
          color={"#fff"}
          m={0}
          textShadow={useBreakpointValue({
            base: "1px 2px 2px rgba(0, 0, 0, 1)",
            md: "3px 5px 3px rgba(0, 0, 0, 1)",
            lg: "3px 5px 3px rgba(0, 0, 0, 1)",
          })}
        >
          10 - 02 - 2024
        </Heading>
      </VStack>
    </VStack>
  );
};
