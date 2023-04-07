import { DATE_SIZE, scales } from './constants';

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

function toNumber(dateToCompare: number | Date | string) {
	switch (typeof dateToCompare) {
		case 'number':
			return dateToCompare;
		case 'string':
			dateToCompare = new Date(dateToCompare);
		// eslint-disable-next-line no-fallthrough
		default:
			return dateToCompare.getTime();
	}
}

function toDate(dateToCompare: number | Date | string) {
	return dateToCompare instanceof Date
		? dateToCompare
		: new Date(dateToCompare);
}

const utcTime = (SuperDate.prototype.utcTime = function utcTime() {
	return this.getTime() - this.getTimezoneOffset() * scales.addMinutes;
});

const clone = (SuperDate.prototype.clone = function clone() {
	return new SuperDate(this.getTime());
});

SuperDate.prototype.isAfter = function isAfter(
	dateToCompare: Date | number | string,
): boolean {
	return this.getTime() > toNumber(dateToCompare);
};

SuperDate.prototype.isBefore = function isBefore(
	dateToCompare: Date | number,
): boolean {
	return this.getTime() < toNumber(dateToCompare);
};

SuperDate.prototype.addMilliseconds = function addMilliseconds(amount: number) {
	this.setTime(this.getTime() + amount);
	return this;
};

(Object.keys(scales) as Array<keyof typeof scales>).forEach((key) => {
	const scale = scales[key];
	const wrapper = {
		[key](this: SuperDate, amount: number) {
			return this.addMilliseconds(amount * scale);
		},
	};
	SuperDate.prototype[key] = wrapper[
		key
	] as typeof SuperDate.prototype[typeof key];
});

const startOfDay = (SuperDate.prototype.startOfDay = function startOfDay<
	T extends Date,
>(this: T) {
	this.setHours(0, 0, 0, 0);
	return this;
});

function compareLocalAsc(dateLeft: Date, dateRight: Date) {
	const diff = utcTime.apply(dateLeft) - utcTime.apply(dateRight);
	return diff / Math.abs(diff);
}

function differenceInCalendarDays(
	dirtyDateLeft: Date,
	dirtyDateRight: Date,
): number {
	const startOfDayLeft = startOfDay.apply(clone.apply(dirtyDateLeft));
	const startOfDayRight = startOfDay.apply(clone.apply(dirtyDateRight));

	const timestampLeft = utcTime.apply(startOfDayLeft);
	const timestampRight = utcTime.apply(startOfDayRight);

	// Round the number of days to the nearest integer
	// because the number of milliseconds in a day is not constant
	// (e.g. it's different in the day of the daylight saving time clock shift)
	return Math.round((timestampLeft - timestampRight) / scales.addDays);
}

SuperDate.prototype.differenceInDays = function differenceInDays(
	dirtyDateRight: Date | number | string,
): number {
	const dateRight = toDate(dirtyDateRight);
	const sign = compareLocalAsc(this, dateRight);
	const difference = Math.abs(differenceInCalendarDays(this, dateRight));

	this.clone().setDate(this.getDate() - sign * difference);

	// Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
	// If so, result must be decreased by 1 in absolute value
	const isLastDayNotFull = Number(compareLocalAsc(this, dateRight) === -sign);
	const diff = difference - isLastDayNotFull;
	return diff ? sign * diff : diff;
};

SuperDate.prototype.toISODateString = function toISODateString(): string {
	return this.toISOString().substring(0, DATE_SIZE);
};
