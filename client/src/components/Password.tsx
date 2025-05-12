import { Input, Button, VStack } from "@chakra-ui/react";
import { GetInputRequest } from "../utils/InputRequest";
import { useState } from "react";


export function Password({setter}: {setter: React.Dispatch<React.SetStateAction<string | undefined>>}) {
    const [value, setValue] = useState<string | undefined>(undefined);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) {
            setter("Nech si sa snažil, nič tam nie je... či?");
            return;
        }
        GetInputRequest(value).then((message) => {
            if (!message) {
                setter("Ideš na to rýchlo, skús to pomalšie :)");
                return;
            }
            setter(message);
        });
    }

    return (
        <div className="secret__wrapper">
            <form onSubmit={onSubmit}>
                <VStack alignItems={{
                    base: "center",
                    md: "start"
                }} rowGap={3}>
                    <Input className="secret__input" style={{ color: 'white' }} placeholder="Kto hľadá, ten nájde | Nikdy nevieš čo ťa čaká na druhej strane" variant={'flushed'} value={value} onChange={(e) => setValue(e.target.value)} />
                    <Button type="submit" variant={'outline'} className="secret__button">Skús štastie</Button>
                </VStack>
            </form>
        </div>
    )
}

