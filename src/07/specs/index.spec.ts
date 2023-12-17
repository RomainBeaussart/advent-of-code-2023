import { expect } from 'chai';

import { challenge1, challenge2 } from '../index';

const testInput = readFile('@/07/resources/test.txt');

const input = readFile('@/07/resources/input.txt');

describe('Day 07', () => {
    describe('Challenge 1', () => {
        it('should return the result of all hands', () => {
            const result = challenge1(testInput);
            expect(result).equal(6440);
        });
    })

    describe('Challenge 2', () => {
        it('should return the number of options for the run', () => {
            // const result = challenge2(testInput);
            // expect(result).equal(71503);
        });
    })
})