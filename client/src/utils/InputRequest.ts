import messages from '../data/messages.json';

export function GetInputRequest(password: string): Promise<string> {
    password = password
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") 
        .replace(/ /g, "")
        .toLowerCase();
    console.log(password)
    const localmessages = messages as Record<string, string>;
    if (password in localmessages) {
        return Promise.resolve(localmessages[password]);
    }
    const url = "http://localhost:4000/api/" + password.toLowerCase();
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        if (!response.ok) {
            if (response.status === 429) {
                return "Too many requests, choď na to pomalšie :)";
            }
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        return data.message;
    });
}