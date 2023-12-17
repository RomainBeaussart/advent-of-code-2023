export type Hand = {
    cards: Card[]
    score: number
    type: HandType
}

export type CardValue = 'A' | 'K' | 'Q' | 'J' | 'T' | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2'

export enum HandType {
    FiveOfAKind = 7,
    FourOfAKind = 6,
    FullHouse = 5,
    ThreeOfAKind = 4,
    TwoPairs = 3,
    OnePair = 2,
    HighCard = 1
}

export interface Card { 
    value: CardValue,
    isHigherThan(card: Card): boolean
    isEqualTo(card: Card): boolean
    isLowerThan(card: Card): boolean
}



