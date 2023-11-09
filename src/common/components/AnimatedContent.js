import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box } from "@chakra-ui/react";

export const AnimatedContent = ({
  children,
  initial = { opacity: 0, y: 30 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 2 },
  observerView = {
    triggerOnce: true,
    threshold: 0.3,
  },
  defaultKey,
}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [ref, inView] = useInView(observerView);

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    }
  }, [inView]);

  return (
    <Box key={defaultKey}>
      <motion.div
        ref={ref}
        initial={initial}
        animate={isAnimated ? animate : {}}
        transition={transition}
      >
        {children}
      </motion.div>
    </Box>
  );
};
