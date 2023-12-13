import { expect } from 'chai';

import { challenge1, challenge2 } from '../index';

const testInput = readFile('@/04/resources/test.txt');

const input = readFile('@/04/resources/input.txt');

describe('Day 04', () => {
    describe('Challenge 1', () => {
        it('should return the sum of scores of each cards', () => {
            const result = challenge1(testInput);
            expect(result).equal(13);
        });
    })

    describe('Challenge 2', () => {
        it('should return the sum of scores of each cards', () => {
            const result = challenge2(input);
            const result2 = result.sum()
            expect(result).deep.equal([1, 2, 4, 8, 14, 1]);
            debugger
        })
    })
})