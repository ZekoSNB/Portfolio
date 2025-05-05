import { Input, Button, VStack } from "@chakra-ui/react";
import { InputRequest } from "../utils/InputRequest";
import { useState } from "react";


export function Password() {
    const [value, setValue] = useState<string | undefined>(undefined);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) return;
        InputRequest(value);
    }

    return (
        <div className="secret__wrapper">
            <form onSubmit={onSubmit}>
                <VStack alignItems={"start"} rowGap={3}>
                    <Input className="secret__input" style={{ color: 'white' }} placeholder="Kto hľadá, ten nájde | Nikdy nevieš čo ťa čaká na druhej strane" variant={'flushed'} value={value} onChange={(e) => setValue(e.target.value)} />
                    <Button type="submit" variant={'outline'} className="secret__button">Skús štastie</Button>
                </VStack>
            </form>
        </div>
    )
}

