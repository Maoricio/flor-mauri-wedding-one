import React from "react";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { SectionWrapper } from "../../common/components";
import twoHearts from "../../common/assets/twoHearts.gif";

import AudioPlayer from "react-audio-player";
import music from "./assets/nothing-stop-us.mp3";

export const SubHeader = () => {
  return (
    <SectionWrapper>
      <VStack alignItems={"center"}>
        <Text size={"large"} fontSize={"24px"} letterSpacing={"8px"}>
          ¡Nos casamos!
        </Text>
        <Image src={twoHearts} alt="GIF" />
        <Heading fontFamily={"Sacramento"} size={"headline"}>
          Estás invitado!
        </Heading>
        <VStack gap={"25px"}>
          <VStack gap={0}>
            <Text>Queremos que seas parte</Text>
            <Text>de este momento tan especial</Text>
          </VStack>
          <AudioPlayer loop={true} src={music} autoPlay={false} controls />
        </VStack>
      </VStack>
    </SectionWrapper>
  );
};
