
export function GetInputRequest(password: string): Promise<string> {
    password = password
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") 
        .replace(/ /g, "")
        .toLowerCase();
    
    const url = "https://newapi.marosik.sk/api/" + encodeURIComponent(password);
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