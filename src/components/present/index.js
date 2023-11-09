import React from "react";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { SectionWrapper } from "../../common/components";
import present from "../../common/assets/present.gif";

export const Present = () => {
  return (
    <SectionWrapper>
      <VStack alignItems={"center"} gap={"15px"}>
        <VStack alignItems={"center"} gap={"15px"}>
          <Image src={present} alt={"present"} h={"80px"} />

          <Heading
            fontFamily={"Poppins"}
            fontWeight={900}
            size={"headline"}
            textTransform={"uppercase"}
            fontSize={"40px"}
            letterSpacing={"6px"}
          >
            Regalo
          </Heading>
        </VStack>

        <Text maxW={"325px"} textAlign={"center"}>
          Lo más importante es tu presencia, pero si queres ayudarnos con la
          luna de miel, te dejamos nuestros datos bancarios
        </Text>

        <VStack>
          <Heading
            fontFamily={"Poppins"}
            fontSize={"20px"}
            letterSpacing={"6px"}
          >
            Flor
          </Heading>
          <Text>
            <Text as={"span"} fontWeight={700}>
              Alias:
            </Text>{" "}
            PILETA.PAR.JUGO
          </Text>
          <Text>
            <Text as={"span"} fontWeight={700}>
              CBU:
            </Text>{" "}
            0170285140000032429231{" "}
          </Text>
        </VStack>

        <VStack>
          <Heading
            fontFamily={"Poppins"}
            fontSize={"20px"}
            letterSpacing={"6px"}
          >
            Mauri
          </Heading>
          <Text>
            <Text as={"span"} fontWeight={700}>
              Alias:
            </Text>{" "}
            MAO.MOLINA
          </Text>
          <Text>
            <Text as={"span"} fontWeight={700}>
              CBU:
            </Text>{" "}
            0720708488000001421136{" "}
          </Text>
        </VStack>
      </VStack>
    </SectionWrapper>
  );
};
