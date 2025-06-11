import { Image, Box, Text, Tabs } from "@chakra-ui/react";
import marosik from "../assets/images/maros-tomasov.webp";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";
import { History } from './tabs_content/History';
import { Character } from "./tabs_content/Character";
import { AboutMe } from "./tabs_content/AboutMe";
import '../styles/Lead.css';

export function LeadSection() {
  return (
    <Box 
      maxW="1200px" 
      mx="auto"
      bg="black"
      p="20px"
      display={{
        base: "none",
        md: "grid"
      }}
      gridTemplateColumns={{ base: "1fr", md: "400px 800px" }}
      gap="2rem"
      justifyContent="center"
      alignItems="start"
      background={"none"}
    >
        <Box pb={4} className="relative flex--center" w={"100%"}> 
            <Box borderRadius={"12px"} border={"2px solid rgba(200,200,200,0.5)"} mt={4} overflow={"hidden"} >
                <Image src={marosik} alt="Maros Tomášov" w={{ base: "100%", md: "350px" }}/>
            </Box>
            <Text className="image-caption">*Najlepší človek na svete</Text>
        </Box>
        <Box className="flex--center flex--column" width="100%">
            <Tabs.Root variant={"line"} defaultValue="history" width="100%">
                <Tabs.List>
                    <Tabs.Trigger value="history" _selected={{
                        color: "white",
                        borderBottom: "2px solid white"
                    }}>
                        <LuUser />
                        History
                    </Tabs.Trigger>
                    <Tabs.Trigger value="character" _selected={{
                        color: "white",
                        borderBottom: "2px solid white"
                    }}>
                        <LuFolder />
                        Characteristics
                    </Tabs.Trigger>
                    <Tabs.Trigger value="aboutme" _selected={{
                        color: "white",
                        borderBottom: "2px solid white"
                    }}>
                        <LuSquareCheck />
                        About Me
                    </Tabs.Trigger>
                </Tabs.List>
                <Box mt={4} width="100%">
                    <Tabs.Content value="history">
                        <Box className="tab-content-wrapper">
                            <History />
                        </Box>
                    </Tabs.Content>
                    <Tabs.Content value="character">
                        <Box className="tab-content-wrapper">
                            <Character />
                        </Box>
                    </Tabs.Content>
                    <Tabs.Content value="aboutme">
                        <Box className="tab-content-wrapper">
                            <AboutMe />
                        </Box>
                    </Tabs.Content>
                </Box>
            </Tabs.Root>
        </Box>
    </Box>
  )
}
