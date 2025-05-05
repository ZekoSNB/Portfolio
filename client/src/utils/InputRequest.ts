export function GetInputRequest(password: string): Promise<string> {
    password = password
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") 
        .replace(/ /g, "");  
    const url = "http://localhost:3000/api/" + password.toLowerCase();
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