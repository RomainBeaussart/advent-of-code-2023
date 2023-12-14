import { NEWLINE } from '../libs/global'

import { Run, RaceRecord } from './types'

export function challenge1(input: string): number {
    const [timesString, distancesString] = input.split(NEWLINE)

    const times = timesString.split(':')[1].splitToNumbers(' ')
    const distances = distancesString.split(':')[1].splitToNumbers(' ')

    const raceRecords: number[] = Array(times.length)
        .fill({ time: 0, distance: 0 })
        .map((_, index) => ({
            time: times[index]!,
            distance: distances[index]!
        }))
        .map((raceRecord, index) => {
            const { time, distance } = raceRecord
            return possibleRuns(time)
                .filter(run => run.distance > distance)
                .length
        })


    return raceRecords.reduce((acc: number, numberOfOptions: number) => {
        return acc * numberOfOptions;
    }, 1);
}

export function possibleRuns(racetime: number): RaceRecord[] {
    const result: RaceRecord[] = []
    for (let i = 0; i <= racetime; i++) {
        const runTime = racetime - i
        const speed = i
        const distance = speed * runTime
        const time = i
        result.push({
            time,
            distance
        })
    }
    return result
}

export function challenge2(input: string): number {
    const [timesString, distancesString] = input.split(NEWLINE)

    const times = +timesString.split(':')[1].split(' ').join('')
    const distances = +distancesString.split(':')[1].split(' ').join('')
    return possibleRuns(times)
        .filter(run => run.distance > distances)
        .length
}