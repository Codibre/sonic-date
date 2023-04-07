import { scales } from './constants';
import { toDate } from './internal';
import { clone, startOfDay, utcTime } from './base-methods';

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

export function differenceInDays(
	this: Date,
	dirtyDateRight: Date | number | string,
): number {
	const dateRight = toDate(dirtyDateRight);
	const sign = compareLocalAsc(this, dateRight);
	const difference = Math.abs(differenceInCalendarDays(this, dateRight));

	const dateLeft = clone.apply(this);
	dateLeft.setDate(this.getDate() - sign * difference);

	// Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
	// If so, result must be decreased by 1 in absolute value
	const isLastDayNotFull = Number(
		compareLocalAsc(dateLeft, dateRight) === -sign,
	);
	const diff = difference - isLastDayNotFull;
	return diff ? sign * diff : diff;
}
