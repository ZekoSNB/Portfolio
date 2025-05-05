import CryptoJS from 'crypto-js';



export function isValidHash(text: string): string{
    const return_values: Record<string, string | undefined> = {
        "MESSAGE_1": process.env.MESSAGE_1_RESULT,
        "MESSAGE_2": process.env.MESSAGE_2_RESULT,
        "MESSAGE_3": process.env.MESSAGE_3_RESULT,
    }
    const messages: Record<string, string | undefined> = {
        "MESSAGE_1": process.env.MESSAGE_1,
        "MESSAGE_2": process.env.MESSAGE_2,
        "MESSAGE_3": process.env.MESSAGE_3,
    };
    const hash = CryptoJS.SHA256(text).toString();
    for (const [key, value] of Object.entries(messages)) {
        if (value && hash === value) {
            return return_values[key] || "No message found";
        }
    }
    return "No message found";
}