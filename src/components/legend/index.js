import React from "react";
import { SectionWrapper } from "../../common/components";
import { Image, Heading, VStack } from "@chakra-ui/react";
import startQuote from "./assets/start-quote.png";
import endQuote from "./assets/end-quote.png";

export const Legend = () => {
  return (
    <SectionWrapper>
      <VStack alignItems={"center"}>
        <VStack maxW={"400px"} gap={"0px"} position={"relative"}>
          <Image
            src={startQuote}
            alt={"start-quote"}
            h={"30px"}
            alignSelf={"start"}
          />
          <Heading
            maxW={"350px"}
            textAlign={"center"}
            fontFamily={"Sacramento"}
            lineHeight={"50px"}
            letterSpacing={"2px"}
            fontSize={"50px"}
          >
            Llegué tarde para ser tu primer amor, pero justo a tiempo para ser
            el de toda la vida
          </Heading>
          <Image
            position={"absolute"}
            src={endQuote}
            alt={"start-quote"}
            h={"30px"}
            bottom={"20px"}
            right={"70px"}
          />
        </VStack>
      </VStack>
    </SectionWrapper>
  );
};
