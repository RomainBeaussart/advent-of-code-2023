import { NEWLINE } from '../libs/global'
import { Game, Set, Colors } from './types'

export function challenge1(input: string, cubes: Set) {
    const games = input.split(NEWLINE)
        .map(formatGame)

    const possiblesGames = games.filter(
        game => {
            return Object.keys(cubes).every(
                color => game.score[color as Colors] <= cubes[color as Colors]
            )
        }
    )

    return possiblesGames.map(game => game.id).sum()
}

function parseCatch(catchString: string): Set {
    const [c1, c2, c3] = catchString.split(', ');
    const [c1v, c1n] = (c1?.trim()?.split(' ') ?? []) as [string, keyof Colors | undefined];
    const [c2v, c2n] = (c2?.trim()?.split(' ') ?? []) as [string, keyof Colors | undefined];
    const [c3v, c3n] = (c3?.trim()?.split(' ') ?? []) as [string, keyof Colors | undefined];

    const catchParsed: Set = {
        red: 0,
        green: 0,
        blue: 0,
    };

    if (c1n !== undefined) {
        catchParsed[c1n as keyof Set] = +c1v;
    }

    if (c2n !== undefined) {
        catchParsed[c2n as keyof Set] = +c2v;
    }

    if (c3n !== undefined) {
        catchParsed[c3n as keyof Set] = +c3v;
    }

    return catchParsed;
}


function formatGame(game: string): Game { // exemple: Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
    let [id, ...catchesString] = game.split(/\:|\;/g)

    id = id.replace('Game ', '')

    let catches = catchesString.map(parseCatch)

    const score: Set = catches.reduce(
        (score, set) => {
            score.red = [set.red, score.red].max()
            score.green = [set.green, score.green].max()
            score.blue = [set.blue, score.blue].max()
            return score
        },
        {
            red: 0,
            green: 0,
            blue: 0
        }
    )

    const power = Object.values(score).reduce((acc, value) => acc * value, 1)

    return {
        id: +id,
        catches,
        score,
        power
    }
}

export function challenge2(input: string) {
    const games = input.split(NEWLINE)
        .map(formatGame)

    return games.map(game => game.power).sum()
}