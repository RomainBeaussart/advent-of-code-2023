import { NEWLINE } from '../libs/global'
import { FindedNumber, FindedGear } from './types'

export function challenge1(input: string) {
    const map = processMapChal1(input.split(NEWLINE))

    const findedNumbers = map.filter(
        findedNumber => findedNumber.partNumbers.length > 0
    )

    return findedNumbers.map(findedNumber => findedNumber.number).sum()
}

function getChunck(map: string[], { x, y, size }: { x: number, y: number, size: number }) {
    let topLine = ''
    let currentLine = ''
    let bottomLine = ''

    let startChunck = 0
    let endChunck = map[y].length

    if (x > 0) {
        startChunck = x - 1
    }

    if (x + size + 1 < map[y].length) {
        endChunck = x + size + 1
    }

    if (y > 0) {
        topLine = map[y - 1].slice(startChunck, endChunck)
    }
    if (y < map.length - 1) {
        bottomLine = map[y + 1].slice(startChunck, endChunck)
    }
    currentLine = map[y].slice(startChunck, endChunck)

    return [topLine, currentLine, bottomLine]
}

function getPartNumber(map: string[], { x, y, size }: { x: number, y: number, size: number }): { x: number, y: number }[] {
    const [topLine, currentLine, bottomLine] = getChunck(map, { x, y, size })

    const regex = /[^\d\.\n]/g
    const partPosition = []

    if (topLine.length > 0) {
        let match = null
        while((match = regex.exec(topLine))) {
            partPosition.push({ x: match.index + x - 1, y: y - 1 })
        }
    }
    if (bottomLine.length > 0) {
        let match = null
        while((match = regex.exec(bottomLine))) {
            partPosition.push({ x: match.index + x - 1, y: y + 1 })
        }
    }
    if (currentLine.length > 0) {
        let match = null
        while((match = regex.exec(currentLine))) {
            partPosition.push({ x: match.index + x - 1, y })
        }
    }

    return partPosition
}

function processMapChal1(map: string[]) {
    const numberRegex = /\d+/g
    let match = null

    const findedNumbers: FindedNumber[] = []
    for (let y = 0; y < map.length; y++) {
        while((match = numberRegex.exec(map[y]))) {
            const findedNumber = {
                number: +match[0],
                x: match.index,
                y,
                lenght: match[0].length,
                partNumbers: getPartNumber(map, { x: match.index, y, size: match[0].length })
            }
            findedNumbers.push(findedNumber)
        }
    }

    return findedNumbers
}

// ___________ CHALLENGE 2 ___________

function getPartNumbers(map: string[], { x, y }: { x: number, y: number }): number[] {
    const numbers = processMapChal1(map)
    const filteredNumbers = numbers.filter(
        num => num.partNumbers.some(
            partNumber => partNumber.x === x && partNumber.y === y
        )
    )
    return filteredNumbers.map(num => num.number)
}

function processMapChal2(map: string[]) {
    const numberRegex = /\*/g
    let match = null

    const findedGears: FindedGear[] = []
    for (let y = 0; y < map.length; y++) {
        while((match = numberRegex.exec(map[y]))) {
            const partNumbers = getPartNumbers(map, { x: match.index, y })
            if (partNumbers.length !== 2) continue
            const findedGear: FindedGear = {
                x: match.index,
                y,
                partNumbers
            }
            findedGears.push(findedGear)
        }
    }

    return findedGears
}


export function challenge2(input: string) {
    return processMapChal2(input.split(NEWLINE))
        .map(gear => gear.partNumbers.reduce((acc, partNumber) => acc * partNumber, 1))
        .sum()
}