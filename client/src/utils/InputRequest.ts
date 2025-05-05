export function GetInputRequest(password: string): Promise<string> {
    password = password
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // replace diacritics with normal character
        .replace(/[^a-zA-Z0-9]/g, "");   // remove spaces and symbols
  
    const url = "http://localhost:3000/api/" + password.toLowerCase();
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        return data.message;
    });
}