export const splitToNumbers = (str: string, separator = ',', options: { allowEmpty?: boolean} = { allowEmpty: false }) => {
    const { allowEmpty } = options;
    const numbers = str.split(separator).filter(x => allowEmpty ? true : !!x).map(x => +x);
    if (!allowEmpty) {
        return numbers.filter(x => !isNaN(x));
    }
    return numbers;
}

export const isLowerCase = (str: string) => {
    return str === str.toLowerCase();
}

export const isUpperCase = (str: string) => {
    return str === str.toUpperCase();
}

export const toFigure = (str: string): string => {
    const lwrCase = str.toLowerCase();
    switch (lwrCase) {
        case 'one':
            return '1';
        case 'two':
            return '2';
        case 'three':
            return '3';
        case 'four':
            return '4';
        case 'five':
            return '5';
        case 'six':
            return '6';
        case 'seven':
            return '7';
        case 'eight':
            return '8';
        case 'nine':
            return '9';
        default:
            return str
    }
}

export const reverse = (str: string) => {
    return str.split('').reverse().join('');
}
