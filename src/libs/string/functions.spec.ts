import { expect } from 'chai';
import '../global'

describe('Lib: String functions', () => {
    it('should split a string and convert to numbers', () => {
        const a: string = '1.2.3.4.5';
        expect(a.splitToNumbers('.')).to.eql([1, 2, 3, 4, 5]);
    })

    it('should check if a string is lower case', () => {
        const a: string = 'text';
        expect(a.isLowerCase()).to.be.true;

        const b: string = 'Text';
        expect(b.isLowerCase()).to.be.false;
    })

    it('should check if a string is upper case', () => {
        const a: string = 'TEXT';
        expect(a.isUpperCase()).to.be.true;

        const b: string = 'Text';
        expect(b.isUpperCase()).to.be.false;
    })

    it('should convert a string to a figure', () => {
        const a: string = 'one';
        expect(a.toFigure()).to.equal('1');

        const b: string = 'notAFigure';
        expect(b.toFigure()).to.equal('notAFigure');
    })

    it('should reverse a string', () => {
        const a: string = '12345';
        expect(a.reverse()).to.equal('54321');
    })
})