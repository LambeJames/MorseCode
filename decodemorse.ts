import { morseToEnglish } from './morse-dictionary';
export function decodeMorse(morseCode: string): string {   
    return morseCode.split("   ").map(DecodeWord).join(" ");
}

function DecodeWord(word: string): string {
    return word.split(" ").map(DecodeChar).join(""); 
}

function DecodeChar(splitChar: string): string {
    return morseToEnglish[splitChar];
}