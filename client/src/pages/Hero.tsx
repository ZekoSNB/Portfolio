import { GithubCalendarComp } from "../components/GithubCalendar";
import { Navigation } from "../components/Navigation";
import { Heading, Text, Box } from "@chakra-ui/react";

export function Hero() {
  return (
    <Box
      maxW={"breakpoint-xl"}
      position={"relative"}
      style={{
        backgroundColor: "black",
        padding: "20px",
        display: "flex",
        height: "100dvh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Heading
        as={"h1"}
        textAlign={"center"}
        color={"white"}
        size={{
          base: "4xl",
          md: "6xl",
        }}
      >
        MAROŠ TOMAŠOV
      </Heading>
      <Text
        textAlign={"center"}
        fontSize={{
          base: "xl",
          md: "3xl",
        }}
        color={"white"}
        fontWeight={600}
      >
        To som ja! Len finančne negramotný človek.
      </Text>
      <Navigation />
      <Heading
        className="calendar__heading"
        as={"h2"}
        mt={8}
        mb={0.5}
        textAlign={"center"}
        color={"white"}
        size={{
          base: "xl",
          md: "2xl",
        }}
      >
        GitHub Contributions
      </Heading>
      <GithubCalendarComp />
    </Box>
  );
}
