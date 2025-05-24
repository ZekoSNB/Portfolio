import { useState, useEffect } from "react";
import { Password } from "../components/Password";
import { Text, Link } from "@chakra-ui/react";

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
    <>
      <Text textAlign={"left"} fontSize={{
          base: "l",
          md: "2xl"
        }} color={"white"} fontStyle={'italic'} fontWeight={400} mt={8}>{
          showLink ? <Link href={hiddenValue} variant={"underline"} color={"white"} target="_blank" rel="noopener noreferrer">{"Klikni a čítaj :)"}</Link> : hiddenValue ? hiddenValue : null
        }</Text>
        <Password setter={setHiddenValue} />
    </>
  )
}
