import { expect } from 'chai';

import { challenge1, challenge2, possibleRuns } from '../index';

const testInput = readFile('@/06/resources/test.txt');

const input = readFile('@/06/resources/input.txt');

describe('Day 06', () => {
    describe('Challenge 1', () => {
        it('should return the number of options for all runs', () => {
            const result = challenge1(testInput);
            expect(result).equal(288);
        });
    })

    describe('Challenge 2', () => {
        it('should return the number of options for the run', () => {
            const result = challenge2(testInput);
            expect(result).equal(71503);
        });
    })
})