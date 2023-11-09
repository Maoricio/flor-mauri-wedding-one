import React from "react";
import {
  Center,
  Divider,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SectionWrapper } from "../../common/components";
import party from "../../common/assets/party.gif";

export const Party = () => {
  return (
    <SectionWrapper>
      <VStack alignItems={"center"} gap={"15px"}>
        <Image src={party} alt={"GIF"} w={"50px"} h={"50px"} />
        <Heading
          fontFamily={"Poppins"}
          fontWeight={900}
          size={"headline"}
          textTransform={"uppercase"}
          fontSize={"40px"}
          letterSpacing={"6px"}
        >
          Fiesta
        </Heading>
        <VStack gap={0}>
          <Text>La Guadalupe</Text>
        </VStack>
        <HStack gap={0} mb={"20px"}>
          <Text fontWeight={600}>10 FEB</Text>
          <Center height="60px" margin={"0px 30px"}>
            <Divider orientation={"vertical"} borderColor={"#767878"} />
          </Center>
          <HStack gap={1}>
            <Text fontWeight={600}>7:00</Text>
            <Text size={"mini"}>P.M.</Text>
          </HStack>
        </HStack>

        <VStack gap={"20px"}>
          <Link
            href={
              "https://www.google.com/maps/dir/-32.9147405,-68.8466427/la+guadalupe/@-32.9835064,-68.8931384,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x967e0b1a81309d4b:0x588836c1de0b0390!2m2!1d-68.8083339!2d-33.0468159"
            }
            isExternal
            backgroundColor={"#5e9a8e"}
            color={"#fff"}
            padding={"10px 20px"}
            borderRadius={"5px"}
          >
            Ver ubicación
          </Link>
        </VStack>
      </VStack>
    </SectionWrapper>
  );
};
