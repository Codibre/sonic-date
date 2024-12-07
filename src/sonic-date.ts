import * as methods from './methods';

export type Dateable = Date | number | string;

export class SonicDate extends Date {}
export interface SonicDate {
	clone(): SonicDate;
	isAfter(dateToCompare: Dateable): boolean;
	isBefore(dateToCompare: Dateable): boolean;
	addMilliseconds(amount: number): this;
	addSeconds(amount: number): this;
	addMinutes(amount: number): this;
	addHours(amount: number): this;
	addDays(amount: number): this;
	addMonths(amount: number): this;
	addYears(amount: number): this;
	startOfDay(): this;
	minutesFromMidnight(): number;
	differenceInMinutes(dateRight: Dateable): number;
	differenceInDays(dateRight: Dateable): number;
	differenceInYears(dateRight: Dateable): number;
	toISODateString(): string;
	utcTime(): number;
}

(Object.keys(methods) as Array<keyof typeof methods>).forEach((method) => {
	(SonicDate.prototype[
		method
	] as unknown as (typeof SonicDate.prototype)[typeof method]) =
		methods[method];
});
