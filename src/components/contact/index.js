import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";
import { SectionWrapper } from "../../common/components";

export const Contact = () => {
  return (
    <SectionWrapper padding={"50px 0px 0px 0px"}>
      <VStack
        padding={"40px 10px"}
        alignItems={"center"}
        gap={"15px"}
        backgroundColor={"#5e9a8e"}
      >
        <Text color={"#fff"}>Tenes alguna duda?</Text>
        <Text color={"#fff"}>No dudes en contactarnos</Text>

        <VStack gap={"5px"}>
          <Text color={"#fff"}>Flor: 2615631516 </Text>
          <Text color={"#fff"}>Mauri: 2616857853</Text>
        </VStack>

        <Heading
          fontFamily={"Poppins"}
          fontWeight={500}
          textTransform={"uppercase"}
          fontSize={"30px"}
          letterSpacing={"4px"}
          color={"#fff"}
        >
          gracias!!
        </Heading>

        <Text color={"#5e9a8e"}>icons by "https://icons8.com"</Text>
      </VStack>
    </SectionWrapper>
  );
};
