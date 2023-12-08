import { expect } from 'chai';

import { challenge1, challenge2 } from '../index';

const testInput = readFile('@/02/resources/test.txt');

const input = readFile('@/02/resources/input.txt');

describe('Day 02', () => {
    describe('Challenge 1', () => {
        it('should return all possibles games with only only 12 red cubes, 13 green cubes, and 14 blue cubes', () => {
            const result = challenge1(testInput, {red: 12, green: 13, blue: 14});
            expect(result).equal(8);
            
        });
    })

    describe('Challenge 2', () => {
        it('should return the sum of power', () => {
            const result = challenge2(testInput);
            expect(result).equal(2286);
        })
    })
})