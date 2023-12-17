import { NEWLINE } from '../libs/global'

import { Hand, Card, CardValue, HandType } from './types'

export function challenge1(input: string): number {
    const hands: Hand[] = input.split(NEWLINE)
        .map(hand => hand.split(' ') as [string, string])
        .map(([cardList, score]) => {
            const cards = cardList
                .split('')
                .map((value: string) => getCard(value as CardValue))
            return { cards, score: +score, type: getHandType(cards) }
        })
        
    const orderedCards = hands.groupBy<Hand>('type')

    for (const handType in orderedCards) {
        orderedCards[handType] = sortHands(orderedCards[handType])
    }

    const orderedHands = []
    
    const orderedHandTypes = Object.keys(HandType).sort((a, b) => +b - +a)

    for (const handType in orderedHandTypes) {
        const typesHandsList = orderedCards[handType] || []
        orderedHands.push(...typesHandsList)
    }

    const orderedScores = orderedHands.reduce((acc, hand, index) => acc + (hand.score * (index + 1)) , 0)

    return orderedScores
}

function sortHands(hands: Hand[]): Hand[] {
    return hands.sort((a, b) => {
        for (let i = 0; i < a.cards.length; i++) {
            const cardA = a.cards[i]
            const cardB = b.cards[i]
            if (cardA.isHigherThan(cardB)) {
                return -1
            }
            if (cardA.isLowerThan(cardB)) {
                return 1
            }
        }
        return 0
    })

}

function getHandType(cards: Card[]): HandType {
    const values: { [key in CardValue]?: number } = {}
    for (const card of cards) {
        values[card.value as CardValue] = (values[card.value as CardValue] ?? 0) + 1;
    }

    const numberOfPairs = Object.values(values).filter(value => value === 2).length
    const numberOfThrees = Object.values(values).filter(value => value === 3).length
    const numberOfFours = Object.values(values).filter(value => value === 4).length
    const numberOfFives = Object.values(values).filter(value => value === 5).length

    if (numberOfFives === 1) {
        return HandType.FiveOfAKind
    }
    if (numberOfFours === 1) {
        return HandType.FourOfAKind
    }
    if (numberOfThrees === 1 && numberOfPairs === 1) {
        return HandType.FullHouse
    }
    if (numberOfThrees === 1) {
        return HandType.ThreeOfAKind
    }
    if (numberOfPairs === 2) {
        return HandType.TwoPairs
    }
    if (numberOfPairs === 1) {
        return HandType.OnePair
    }
    return HandType.HighCard
    
}

function getCard(value: CardValue): Card {
    return {
        value,
        isHigherThan(card: Card): boolean {
            const order: CardValue[] = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
            return order.indexOf(this.value) > order.indexOf(card.value)
        },
        isEqualTo(card: Card): boolean {
            return this.value === card.value && this !== card
        },
        isLowerThan(card: Card): boolean {
            const order: CardValue[] = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
            return order.indexOf(this.value) < order.indexOf(card.value)
        },
    }
}

export function challenge2(input: string): number {
    return 0
}