export const ascending = (a: number, b: number): number => a - b
export const descending = (a: number, b: number): number => b - a

export const maxOf = (array: number[], count = 1): number | number[] => {
	return count === 1
		? array.reduce((a, b) => Math.max(a, b))
		: [...array].sort(descending).splice(0, count);
};

export const minOf = (array: number[], count = 1): number | number[] => {
	return count === 1
		? array.reduce((a, b) => Math.min(a, b), Number.POSITIVE_INFINITY)
		: [...array].sort(ascending).splice(0, count);
};

/**
 * 
 * @param array The array of numbers to sum
 * @returns The sum of the numbers
 * @example
 * [1, 2, 3].sum() // 6
 */

export const sum = (array: number[]):number => {
    return array.reduce((a, b) => a + b, 0);
}

export const avg = (array: number[]):number => {
    return sum(array) / array.length;
}

export const asc = (array: number[]): number[] => {
    return [...array].sort(ascending);
}

export const desc = (array: number[]): number[] => {
    return [...array].sort(descending);
}

export const chunk = (array: any[], size: number): any[][] => {
	return array.reduce((acc, _, i) => (i % size) ? acc : [...acc, array.slice(i, i + size)], []);
}

export type groupByFunction<T> = ((obj: T) => string | number) | string;

export const groupBy = <T>(array: T[], key?: groupByFunction<T>): { [key: string]: T[] } => {
	return array.reduce((acc, item) => {
		let value: any = '';
		if (!key) {
			value = item;
		} else if (typeof key === 'string') {
			value = (item as any)[key];
		} else {
			value = key(item);
		}
		
		if (!acc[value]) {
			acc[value] = [item];
		} else {
			acc[value].push(item);
		}
		return acc;
	}, {} as { [key: string]: T[] });
}