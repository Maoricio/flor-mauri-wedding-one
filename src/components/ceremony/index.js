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
import { SectionWrapper, AnimatedContent } from "../../common/components";
import rings from "../../common/assets/rings.png";

export const Ceremony = () => {
  return (
    <SectionWrapper>
      <VStack alignItems={"center"} gap={"15px"}>
        <AnimatedContent>
          <VStack alignItems={"center"} gap={"15px"}>
            <Image src={rings} alt={"rings"} h={"80px"} />
            <Heading
              fontFamily={"Poppins"}
              fontWeight={900}
              size={"headline"}
              textTransform={"uppercase"}
              fontSize={"40px"}
              letterSpacing={"6px"}
            >
              Ceremonia
            </Heading>
          </VStack>
        </AnimatedContent>

        <VStack gap={0}>
          <Text>Iglesia Nuestra Señora del Transito</Text>
        </VStack>
        <HStack gap={0} mb={"20px"}>
          <Text fontWeight={600}>10 FEB</Text>
          <Center height="60px" margin={"0px 30px"}>
            <Divider orientation={"vertical"} borderColor={"#767878"} />
          </Center>
          <HStack gap={1}>
            <Text fontWeight={600}>5:40</Text>
            <Text size={"mini"}>P.M.</Text>
          </HStack>
        </HStack>

        <VStack gap={"20px"}>
          <Text fontSize={"20px"} fontWeight={900} color={"#5e9a8e"}>
            Ser más que puntual, por favor!
          </Text>

          <Link
            href={
              "https://www.google.com/maps/dir/-32.9147405,-68.8466427/Iglesia+Nuestra+Se%C3%B1ora+del+Tr%C3%A1nsito/@-32.9834114,-68.9179321,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x967e756ce05e39cb:0xa7987c79a4946e1d!2m2!1d-68.8231289!2d-33.0520919"
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
