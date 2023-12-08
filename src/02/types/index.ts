export type Set = {
    [key in Colors]: number
}

export type Colors = 'red' | 'green' | 'blue'

export type Game = {
    id: number
    catches: Array<Set>
    score: Set
    power: number
}


export type Record = Array<Game>