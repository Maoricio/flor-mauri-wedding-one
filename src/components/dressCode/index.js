import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { SectionWrapper, AnimatedContent } from "../../common/components";
import vestido from "../../common/assets/vestido.png";
import traje from "../../common/assets/traje.png";

export const DressCode = () => {
  return (
    <SectionWrapper>
      <VStack alignItems={"center"} gap={"15px"}>
        <AnimatedContent>
          <VStack alignItems={"center"} gap={"15px"}>
            <HStack>
              <Image src={vestido} alt={"vestido"} h={"80px"} />
              <Image src={traje} alt={"traje"} h={"80px"} />
            </HStack>

            <Heading
              fontFamily={"Poppins"}
              fontWeight={900}
              size={"headline"}
              textTransform={"uppercase"}
              fontSize={"40px"}
              letterSpacing={"6px"}
            >
              Dress Code
            </Heading>
          </VStack>
        </AnimatedContent>

        <VStack gap={0}>
          <Heading fontFamily={"Nunito"}>Formal</Heading>
          <Text maxW={"400px"} textAlign={"center"}>
            Por favor, evitar vestirse de blanco y sus tonalidades
          </Text>
        </VStack>
      </VStack>
    </SectionWrapper>
  );
};
