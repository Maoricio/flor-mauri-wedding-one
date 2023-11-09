import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";
import { SectionWrapper } from "../../common/components";

export const NotBaby = () => {
  return (
    <SectionWrapper>
      <VStack alignItems={"center"} gap={"15px"}>
        <Heading
          size={"large"}
          fontFamily={"Nunito"}
          textTransform={"uppercase"}
        >
          No niños
        </Heading>
        <VStack alignItems={"center"} gap={0}>
          <Text>Amamos a sus pequeños, pero queremos</Text>
          <Text>que este día sólo tengan que preocuparse</Text>
          <Text>por pasarla increible</Text>
        </VStack>
      </VStack>
    </SectionWrapper>
  );
};
