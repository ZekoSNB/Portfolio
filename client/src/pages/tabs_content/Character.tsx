import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

export function Character() {
    const characteristics = {
        physical: {
            vytrvalosť: 5,
            sila: 65,
            staroba: 17
        },
        mental: {
            múdrosť: 60,
            pamäť: 0,
            Logické_myslenie: 90
        },
        skills: {
            lezenie: 20,
            spánok: 0,
            profesionálna_prokrastinácia: 999
        }
    };

    const ProgressBar = ({ value, colorScheme }: { value: number; colorScheme: string }) => (
        <Box
            w="100%"
            h="8px"
            bg="gray.700"
            borderRadius="full"
            overflow="hidden"
        >
            <Box
                w={`${value}%`}
                h="100%"
                bg={`${colorScheme}.400`}
                transition="width 0.3s ease-in-out"
            />
        </Box>
    );

    return (
        <Box p={4}>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
                {/* Physical Characteristics */}
                <GridItem>
                    <Box
                        bg="gray.800"
                        p={3}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="gray.700"
                        boxShadow="lg"
                    >
                        <Heading size="md" mb={3} color="white">
                            Telové štatistiky
                        </Heading>
                        <Box display="flex" flexDirection="column" gap={3}>
                            {Object.entries(characteristics.physical).map(([key, value]) => (
                                <Box key={key}>
                                    <Text textTransform="capitalize" mb={1} color="gray.300">
                                        {key}
                                    </Text>
                                    <ProgressBar value={value} colorScheme="blue" />
                                    <Text fontSize="sm" color="gray.400" mt={1}>
                                        {value}%
                                    </Text>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </GridItem>

                {/* Mental Characteristics */}
                <GridItem>
                    <Box
                        bg="gray.800"
                        p={3}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="gray.700"
                        boxShadow="lg"
                    >
                        <Heading size="md" mb={3} color="white">
                            Mozog
                        </Heading>
                        <Box display="flex" flexDirection="column" gap={3}>
                            {Object.entries(characteristics.mental).map(([key, value]) => (
                                <Box key={key}>
                                    <Text textTransform="capitalize" mb={1} color="gray.300">
                                        {key.replace("_", " ")}
                                    </Text>
                                    <ProgressBar value={value} colorScheme="purple" />
                                    <Text fontSize="sm" color="gray.400" mt={1}>
                                        {value}%
                                    </Text>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </GridItem>

                {/* Skills */}
                <GridItem>
                    <Box
                        bg="gray.800"
                        p={3}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="gray.700"
                        boxShadow="lg"
                    >
                        <Heading size="md" mb={3} color="white">
                            Skills
                        </Heading>
                        <Box display="flex" flexDirection="column" gap={3}>
                            {Object.entries(characteristics.skills).map(([key, value]) => (
                                <Box key={key}>
                                    <Text textTransform="capitalize" mb={1} color="gray.300">
                                        {key.replace("_", " ")}
                                    </Text>
                                    <ProgressBar value={value} colorScheme="green" />
                                    <Text fontSize="sm" color="gray.400" mt={1}>
                                        {value}%
                                    </Text>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
}