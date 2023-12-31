import { splitToNumbers } from './functions';
import { isLowerCase } from './functions';
import { isUpperCase } from './functions';
import { toFigure } from './functions';
import { reverse } from './functions';

declare global {
    interface String {
        /**
         * 
         * @param separator The separator to split the | string by
         * @returns An array of numbers
         * @example
         * '1,2,3'.splitToNumbers() // [1, 2, 3]
         */
        splitToNumbers(separator?: | string, options?: {
            /**
             * 
             * @default false
             */
            allowEmpty: boolean | undefined;
        }): Array<number | null>;
        isLowerCase(): boolean;
        isUpperCase(): boolean;
        toFigure(): string;
        reverse(): string;
    }
}

String.prototype.splitToNumbers = function (this: | string, separator: | string, options?: {
    /**
     * 
     * @default false
     */
    allowEmpty: boolean | undefined;
}) {
    return splitToNumbers(this, separator, options);
}

String.prototype.isLowerCase = function (this: | string) {
    return isLowerCase(this);
}

String.prototype.isUpperCase = function (this: | string) {
    return isUpperCase(this);
}

String.prototype.toFigure = function (this: | string) {
    return toFigure(this);
}

String.prototype.reverse = function (this: | string) {
    return reverse(this);
}