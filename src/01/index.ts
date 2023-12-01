import { NEWLINE } from '../libs/global'

export function challenge1(input: string) {
    return input.split(NEWLINE)
        .map(calibrationValue)
        .sum();
}

function calibrationValue(input: string): number {
    // get first number in string
    const numbersOfString = input.match(/-?\d/g);
    if (!numbersOfString) {
        throw new Error('No numbers found in string');
    }
    let result = `${numbersOfString[0]}${numbersOfString?.at(-1)}`

    console.log(result);
    return +result
}

export function challenge2(input: string) {
    return input.split(NEWLINE)
        .map(calibrationValueWithWords)
        .sum();
}

function calibrationValueWithWords(input: string): number {
    const matches = []
    const regex = /-?(one|two|three|four|five|six|seven|eight|nine|\d)/g

    let match

    while ((match = regex.exec(input))) {
        match = match[0];
        regex.lastIndex -= match.length - 1;
        matches.push(match);
    }

    return +`${matches[0].toFigure()}${matches?.at(-1)?.toFigure()}`
}