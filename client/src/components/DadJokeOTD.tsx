import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getDadJoke } from "../utils/getDadJoke";


export function DadJoke() {
    const [joke, setJoke] = useState<String | undefined>(undefined);
    useEffect(() => {
        getDadJoke()
            .then(setJoke)
            .catch(() => setJoke("No dad jokes today :("))
    }, [])
    return (
        <Heading style={{
            position: "absolute",
            zIndex: 999,
            display: 'block',
            top: "1%",
            left: "50%",
            transform: 'translateX(-50%)',
            color: "white",
            width: '90%',
        }}
        textAlign={{
            base: "justify",
            md: "center"
        }}>
            Dad Joke:
            {joke ? " " + joke : ''}
        </Heading>
    )
}