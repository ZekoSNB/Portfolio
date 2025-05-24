import { useState, useEffect } from "react";
import { Password } from "../components/Password";
import { Text, Link, Box } from "@chakra-ui/react";

export function Quiz() {
  const [hiddenValue, setHiddenValue] = useState<string | undefined>('Tu dostanes spravu pri zadani spravneho hesla :)');
  const [showLink, setShowLink] = useState<boolean>(false);

  useEffect(() => {
    if (hiddenValue?.includes("docs.google.com")) {
      setShowLink(true);
      return;
    }
    setShowLink(false);
  }, [hiddenValue])
  return (
    <Box p={4} mt={6}  borderRadius={6} w={"75%"} className="flex--center flex--column"> 
      <Text textAlign={"left"} fontSize={{
          base: "l",
          md: "xl"
        }} color={"white"} fontStyle={'italic'} fontWeight={400} mb={4} >{
          showLink ? <Link href={hiddenValue} variant={"underline"} color={"white"} target="_blank" rel="noopener noreferrer">{"Klikni a čítaj :)"}</Link> : hiddenValue ? hiddenValue : null
        }</Text>
        <Password setter={setHiddenValue} />
    </Box>
  )
}
