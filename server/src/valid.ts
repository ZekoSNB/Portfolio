import CryptoJS from 'crypto-js';
import { sendEmail } from './mailer';
import invmessages from './messages.json';


export function isValidHash(text: string): string{
    const return_values: Record<string, string | undefined> = {
        "MESSAGE_1": process.env.MESSAGE_1_RESULT,
        "MESSAGE_2": process.env.MESSAGE_2_RESULT,
        "MESSAGE_3": process.env.MESSAGE_3_RESULT,
        "MESSAGE_4": process.env.MESSAGE_4_RESULT,
        "MESSAGE_5": process.env.MESSAGE_5_RESULT,
        "MESSAGE_6": process.env.MESSAGE_6_RESULT,
        "MESSAGE_7": process.env.MESSAGE_7_RESULT,
        "MESSAGE_8": process.env.MESSAGE_8_RESULT,
    }
    const messages: Record<string, string | undefined> = {
        "MESSAGE_1": process.env.MESSAGE_1,
        "MESSAGE_2": process.env.MESSAGE_2,
        "MESSAGE_3": process.env.MESSAGE_3,
        "MESSAGE_4": process.env.MESSAGE_4,
        "MESSAGE_5": process.env.MESSAGE_5,
        "MESSAGE_6": process.env.MESSAGE_6,
        "MESSAGE_7": process.env.MESSAGE_7,
        "MESSAGE_8": process.env.MESSAGE_8,
    };
    if (text in invmessages) {
        sendEmail('invalid@marosik.sk', 'Invalid hash', 'Invalid hash: ' + text);
        return invmessages[text as keyof typeof invmessages] || "Dojebalo sa";
    }      
    const hash = CryptoJS.SHA256(text).toString();
    for (const [key, value] of Object.entries(messages)) {
        if (value && hash === value) {
            sendEmail('maros3845@gmail.com', 'SOMEONE GUESSED IT?!?', 'Correct Hash: ' + text);
            return return_values[key] || "No message found";
        }
    }
    return "No message found";
}