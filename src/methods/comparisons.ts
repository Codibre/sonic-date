import { toNumber } from './internal';

export function isAfter(
	this: Date,
	dateToCompare: Date | number | string,
): boolean {
	return this.getTime() > toNumber(dateToCompare);
}
export function isBefore(this: Date, dateToCompare: Date | number): boolean {
	return this.getTime() < toNumber(dateToCompare);
}
