import { Image, Box, Text, Tabs } from "@chakra-ui/react";
import marosik from "../assets/images/maros-tomasov.webp";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";


export function LeadSection() {
  return (
    <Box maxW={"breakpoint-xl"} style={{ backgroundColor: 'black',
        padding: '20px',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        justifyContent: 'center',
        alignItems: 'center',
     }}>
            <Box pb={4} className="relative flex--center"> 
            <Box borderRadius={"12px"} border={"2px solid rgba(200,200,200,0.5)"} mt={4} overflow={"hidden"} >
                <Image src={marosik} alt="Maros Tomášov" w={"350px"}/>
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
        <Box className="flex--center flex--column">
            <Tabs.Root variant={"line"}>
                <Tabs.List>
                    <Tabs.Trigger value="members">
                        <LuUser />
                        Members
                    </Tabs.Trigger>
                    <Tabs.Trigger value="projects">
                        <LuFolder />
                        Projects
                    </Tabs.Trigger>
                    <Tabs.Trigger value="tasks">
                        <LuSquareCheck />
                        Tasks
                    </Tabs.Trigger>
                </Tabs.List>
            </Tabs.Root>
        </Box>
    </Box>
  )
}
