import React from "react";
import { Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { SectionWrapper } from "../../common/components";
import camera from "../../common/assets/camera2.png";

export const SharePhotos = () => {
  return (
    <SectionWrapper padding={"50px 0px 0px 0px"}>
      <VStack
        padding={"40px 10px"}
        alignItems={"center"}
        gap={"15px"}
        backgroundColor={"#5e9a8e"}
      >
        <VStack alignItems={"center"} gap={"15px"}>
          <Image src={camera} alt={"vestido"} h={"80px"} />

          <Heading
            fontFamily={"Poppins"}
            fontWeight={500}
            textTransform={"uppercase"}
            fontSize={"30px"}
            letterSpacing={"4px"}
            color={"#fff"}
          >
            comparte fotos
          </Heading>
        </VStack>

        <Text color={"#fff"}>Sube fotos al álbum compartido</Text>
        <Link
          href="https://photos.app.goo.gl/76Gmxz2x2Vbeuqxw6"
          isExternal
          backgroundColor={"#5e9a8e"}
          color={"#fff"}
          padding={"10px 20px"}
          border={"2px solid #fff"}
        >
          Subir fotos
        </Link>
      </VStack>
    </SectionWrapper>
  );
};
