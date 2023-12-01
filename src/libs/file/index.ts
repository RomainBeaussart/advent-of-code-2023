import { readFile } from "./functions"

declare global {
    function readFile(path: string): string;
}

global.readFile = readFile;