import { expect } from 'chai';

import { challenge1, challenge2 } from '../index';

const testInput = readFile('@/03/resources/test.txt');

const input = readFile('@/03/resources/input.txt');

describe('Day 03', () => {
    describe('Challenge 1', () => {
        it('should return the sum of number with adjacent to a symbol', () => {
            const result = challenge1(testInput);
            expect(result).equal(4361);
            
        });
    })

    describe('Challenge 2', () => {
        it('should return the sum of number with adjacent to a symbol', () => {
            const result = challenge2(input);
            expect(result).equal(451490);
        })
    })
})