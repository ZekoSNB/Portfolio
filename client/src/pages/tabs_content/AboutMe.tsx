import { Heading, Link, Box, Text } from "@chakra-ui/react";
import '../../styles/AboutMe.css';


export function AboutMe() {
  return (
    <Box>
      <Box w={'100%'} className="mt-text__wrapper">
        <Text className="mt-text">Ahojteeee, ja som <strong>Maroš</strong>, niečo málo ste o mne už zistili z predošlého tabu v histórii, avšak to nie je všetko. Už dlhodobo si chcem písať niekam svoj príbeh a preto som sa vlastne rozhodol si spraviť aj svoj web, kde zdieľam nejaký ten svoj humor, ktorý je fakt suchý a možné blog posty, ktoré budem mať v pláne implementovať... No mám 18, ale stále si žijem svoj život, tak ako uznám za vhodné, niekedy trochu až moc šialené na môj vek <span className="mt-text--italic">(Žiadne nelegálne aktivity ani omamné látky)</span>. V skratke používam zastaraný webový prehliadač, na to aby som zdieľal svoj život :), pretože byť iný je základ :D</Text>
      </Box>
      <Heading>
        <Link color={"white"} variant={"underline"} href="https://ametica.sk">
          Silence is golden.
        </Link>
      </Heading>
    </Box>
  );
}
