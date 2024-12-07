import { scales } from './constants';

function addMilliseconds<T extends Date>(this: T, amount: number): typeof this {
	this.setTime(this.getTime() + amount);
	return this;
}

const YEAR_MONTHS = 12;
function addYears<T extends Date>(this: T, amount: number): typeof this {
	this.setFullYear(this.getFullYear() + amount);

	return this;
}
function addMonths<T extends Date>(this: T, amount: number): typeof this {
	const monthSum = this.getMonth() + amount;
	const years =
		(monthSum < 0 ? -1 : 1) * Math.floor(Math.abs(monthSum) / YEAR_MONTHS);
	if (years !== 0) addYears.call(this, years);
	const month =
		monthSum < 0
			? YEAR_MONTHS - 1 - (monthSum % YEAR_MONTHS)
			: monthSum % YEAR_MONTHS;
	const currentDay = this.getDate();
	this.setMonth(month);
	const laterDay = this.getDate();
	if (currentDay !== laterDay) {
		addMilliseconds.call(this, -laterDay * scales.addDays);
	}

	return this;
}

const addFuncs = {} as unknown as Record<
	keyof typeof scales,
	typeof addMilliseconds
>;

(Object.keys(scales) as Array<keyof typeof scales>).forEach((key) => {
	const scale = scales[key];
	const wrapper = {
		[key]<T extends Date>(this: T, amount: number) {
			return addMilliseconds.apply(this, [amount * scale]) as T;
		},
	};
	addFuncs[key] = wrapper[key] as unknown as (typeof wrapper)[typeof key];
});

module.exports = {
	addMilliseconds,
	addMonths,
	addYears,
	...addFuncs,
};
