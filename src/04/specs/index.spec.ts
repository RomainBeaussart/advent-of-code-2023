import { expect } from 'chai';

import { challenge1, challenge2 } from '../index';

const testInput = readFile('@/04/resources/test.txt');

const input = readFile('@/04/resources/input.txt');

describe('Day 04', () => {
    describe('Challenge 1', () => {
        it('should return the sum of scores of each cards', () => {
            const result = challenge1(input); // 22488
            expect(result).equal(22488);
            expect(result).equal(13);
        });
    })

    describe('Challenge 2', () => {
        
    })
})