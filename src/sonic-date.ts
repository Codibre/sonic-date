import * as methods from './methods';

export type Dateable = Date | number | string;

export class SuperDate extends Date {
	constructor(date?: Dateable) {
		if (date) super(date);
		else super();
	}
}
export interface SuperDate {
	clone(): SuperDate;
	isAfter(dateToCompare: Dateable): boolean;
	isBefore(dateToCompare: Dateable): boolean;
	addMilliseconds(amount: number): this;
	addSeconds(amount: number): this;
	addMinutes(amount: number): this;
	addHours(amount: number): this;
	addDays(amount: number): this;
	startOfDay(): this;
	differenceInDays(dateRight: Dateable): number;
	toISODateString(): string;
	utcTime(): number;
}

(Object.keys(methods) as Array<keyof typeof methods>).forEach((method) => {
	(SuperDate.prototype[
		method
	] as unknown as typeof SuperDate.prototype[typeof method]) = methods[method];
});
