import { NEWLINE } from '../libs/global'

function computeScore(input: string) {
    let [_card, winningNumbers, numbersList] = input.split(/:|\|/g);

    const winnings = winningNumbers.trim().splitToNumbers(' ', { allowEmpty: false });
    const numbers = numbersList.trim().splitToNumbers(' ', { allowEmpty: false });

    let score = 0

    for (const w of winnings) {
        if (numbers.includes(w)){
            score = (score * 2) || 1
        }
    }

    return score
}

export function challenge1(input: string) {
    return input.split(NEWLINE)
        .map(computeScore)
        .sum()
}


export function challenge2(input: string): number[] {
    let result = input.split(NEWLINE)
        .map(computeScore)

    result = result
        .map(Math.log2) // [4, 2, 2, 1, 0, 0]


    result = result
        .reduce((acc, curr, index) => {
            if (curr < 0) {
                return acc
            }
            const amountOfCopy = acc[index]
            for (let i = 1; i <= curr + 1; i++) {
                acc[index + i] = acc[index + i] + amountOfCopy || amountOfCopy + 1
            }
            return acc
        }, Array(result.length).fill(1))
        
    return result

}