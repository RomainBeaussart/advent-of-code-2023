import { NEWLINE } from '../libs/global'

function computeScore(input: string) {
    let [card, winningNumbers, numbersList] = input.split(/:|\|/g);

    const winnings = winningNumbers.trim().splitToNumbers(' ');
    const numbers = numbersList.trim().splitToNumbers(' ');

    let score = 0

    const isWinningNumbers = numbers.map(n => winnings.includes(n));

    for (const inWinningNumber of isWinningNumbers) {
        if (inWinningNumber) {
            if (!score) {
                score = 1
            } else {
                score = score * 2
            }
        }
    }

    return score
}

export function challenge1(input: string) {
    let result = 0;

    const lines = input.split(NEWLINE);

    for (const line of lines) {
        const [winningNumbers, numbers] = line.split(": ")[1].split(" | ").map(x => x.trim().split(" ").filter(x => x != "").map(y => parseInt(y)));
        let winningAmount = 0.5;
        for (const winningNumber of winningNumbers) {
            if (numbers.includes(winningNumber)) winningAmount *= 2;
        }
        if (winningAmount < 1) continue;
        result += winningAmount;
    }

    return input.split(NEWLINE)
        .map(computeScore)
        .sum()

}


export function challenge2(input: string) {

}