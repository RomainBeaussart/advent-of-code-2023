import { expect } from 'chai';
import '../global'

describe('Lib: Array functions', () => {
    it('should return the max values', () => {
        const a: Array<number> = [1, 2, 3, 4, 5];
        expect(a.max(2)).to.eql([5, 4]);
        expect(a.max()).to.eql(5);
    });

    it('should return the min values', () => {
        const a: Array<number> = [1, 2, 3, 4, 5];
        expect(a.min(2)).to.eql([1, 2]);
        expect(a.min()).to.eql(1);
    })

    it('should return the sum of the values', () => {
        const a: Array<number> = [1, 2, 3, 4, 5];
        expect(a.sum()).to.eql(15);
    })

    it('should return the average of the values', () => {
        const a: Array<number> = [1, 2, 3, 4, 5];
        expect(a.avg()).to.eql(3);
    })

    it('should return the array in ascending order', () => {
        const a: Array<number> = [5, 4, 3, 2, 1];
        expect(a.asc()).to.eql([1, 2, 3, 4, 5]);
    })

    it('should return the array in descending order', () => {
        const a: Array<number> = [1, 2, 3, 4, 5];
        expect(a.desc()).to.eql([5, 4, 3, 2, 1]);
    })

    it('should return an object with grouped values', () => {
        const a: Array<number> = [1, 2, 3, 4, 5];
        expect(a.groupBy((x: number) => x % 2)).to.eql({ 0: [2, 4], 1: [1, 3, 5] });
    })
})