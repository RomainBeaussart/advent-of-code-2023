import { expect } from 'chai';

import { challenge1, challenge2 } from '../index';

const testInput = readFile('@/05/resources/test.txt');

const input = readFile('@/05/resources/input.txt');

describe('Day 05', () => {
    describe('Challenge 1', () => {
        it('should return the lowest location number that corresponds to any of the initial seed', () => {
            const result = challenge1(testInput);
            expect(result).equal(35);
        });
    })

    describe('Challenge 2', () => {
        it('should return the lowest location number that corresponds to any of the initial seed', () => {
            const result = challenge2(testInput);
            expect(result).equal(46);
        });
    })
})