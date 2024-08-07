"use client";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import NextLink from "next/link";
import { keyframes } from "@emotion/react"; // Import keyframes from emotion/react

// Define bounce animation
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) scaleY(1);
  }
  40% {
    transform: translateY(-15px) scaleY(0.8);
  }
  60% {
    transform: translateY(-5px) ;
  }
`;

export default function Hero() {
  return (
    <Box position={"relative"} w="full" minH="100vh">
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          minHeight: "100svh",
          maxHeight: "100svh",
          objectFit: "cover",
        }}
      >
        <source src="/montagne3.mp4" type="video/mp4" />
      </video>
      <Flex
        justifyContent={"center"}
        textAlign="center"
        w={"100%"}
        h="100%"
        top={{ base: -2, lg: 10 }}
      ></Flex>
      <Box
        position="absolute"
        width="100%"
        bottom="0"
        minH={{ base: "100svh", lg: "100svh" }}
        background="linear-gradient(180deg, rgba(0, 0, 0, 0.005), rgba(18, 19, 22, 0.95))"
        zIndex={1}
      ></Box>
    </Box>
  );
}
