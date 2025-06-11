import { Image, Box, Text, Tabs } from "@chakra-ui/react";
import styled from 'styled-components';
import marosik from "../assets/images/maros-tomasov.webp";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";
import { History } from './tabs_content/History';
import { Character } from "./tabs_content/Character";
import { AboutMe } from "./tabs_content/AboutMe";

const TabContentWrapper = styled.div`
  min-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

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
            <Text style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'TranslateX(-50%)',
                textAlign: 'center',
                color: 'white',
                fontSize: '8px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontFamily: 'monospace',
                whiteSpace: 'nowrap',
            }}>*Najlepší človek na svete</Text>
        </Box>
        <Box className="flex--center flex--column" width="100%">
            <Tabs.Root variant={"line"} defaultValue="history" width="100%">
                <Tabs.List>
                    <Tabs.Trigger  value="history" _selected={{
                        color: "white",
                        borderBottom: "2px solid white"
                    }}>
                        <LuUser />
                        History
                    </Tabs.Trigger>
                    <Tabs.Trigger value="character"_selected={{
                        color: "white",
                        borderBottom: "2px solid white"
                    }}>
                        <LuFolder />
                        Characteristics
                    </Tabs.Trigger>
                    <Tabs.Trigger value="aboutme"_selected={{
                        color: "white",
                        borderBottom: "2px solid white"
                    }}>
                        <LuSquareCheck />
                        About Me
                    </Tabs.Trigger>
                </Tabs.List>
                <Box mt={4} width="100%">
                    <Tabs.Content value="history">
                        <TabContentWrapper>
                            <History />
                        </TabContentWrapper>
                    </Tabs.Content>
                    <Tabs.Content value="character">
                        <TabContentWrapper>
                            <Character />
                        </TabContentWrapper>
                    </Tabs.Content>
                    <Tabs.Content value="aboutme">
                        <TabContentWrapper>
                            <AboutMe />
                        </TabContentWrapper>
                    </Tabs.Content>
                </Box>
            </Tabs.Root>
        </Box>
    </Box>
  )
}
