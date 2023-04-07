import { SuperDate } from '../sonic-date';
import { scales } from './constants';

const DATE_SIZE = 10;
const { addMinutes } = scales;

export function clone(this: Date) {
	return new SuperDate(this.getTime());
}

export function startOfDay<T extends Date>(this: T) {
	this.setHours(0, 0, 0, 0);
	return this;
}

export function toISODateString(this: Date): string {
	return this.toISOString().substring(0, DATE_SIZE);
}

export function utcTime(this: Date) {
	return this.getTime() - this.getTimezoneOffset() * addMinutes;
}
