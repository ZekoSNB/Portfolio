import { Heading, Text } from '@chakra-ui/react';

export function Hero() {
  return (
    <section>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to My Website
      </Heading>
      <Text fontSize="lg" color="gray.600">
        This is a simple hero section with a heading and some text.
      </Text>       
    </section>
  )
}
