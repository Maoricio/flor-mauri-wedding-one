import React from "react";
import { Grid, GridItem, Image, VStack } from "@chakra-ui/react";
import { SectionWrapper } from "../../common/components";
import { imagesByRow } from "./assets";
import { AnimatedContent } from "../../common/components";

export const PhotosGallery = () => {
  return (
    <SectionWrapper>
      <VStack alignItems={"center"}>
        {imagesByRow.map((row, index) => (
          <AnimatedContent
            key={`animated-${index}`}
            defaultKey={`animated-${index}`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (index + 1) / 5, duration: 0.5 }}
          >
            <Grid
              key={`row-${index}`}
              templateRows="repeat(1, 0.5fr)"
              templateColumns="repeat(2, 0.5fr)"
              gap={1}
              maxW={"400px"}
            >
              {row.map((image, i) => (
                <GridItem
                  key={`row-${index}-item-${i}`}
                  rowSpan={image.rowSpan}
                  colSpan={image.colSpan}
                >
                  <Image
                    key={`row-${index}-item-${i}-image`}
                    src={image.src}
                    alt={image.alt}
                    borderRadius={"5px"}
                  />
                </GridItem>
              ))}
            </Grid>
          </AnimatedContent>
        ))}
      </VStack>
    </SectionWrapper>
  );
};
