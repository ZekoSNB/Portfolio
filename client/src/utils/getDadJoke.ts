
export async function getDadJoke(): Promise<string> {
    const response = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            "Accept": 'application/json'
        }
    })
    if (!response.ok) {
        throw new Error("something fucked up on the API, no dad jokes today :(");
    }
    const data = await response.json();
    console.log(data.joke)
    return data.joke;

}