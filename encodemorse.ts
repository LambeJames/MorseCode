import { englishToMorse } from './morse-dictionary';
export function encodeMorse(input: string): string {  
    return input.trim().split(" ").map(DecodeWord).join("   ");
}

function DecodeWord(word: string): string {
    return word.split("").map(DecodeChar).join(" "); 
}

function DecodeChar(splitChar: string): string {
    return englishToMorse[splitChar];
}