import { clone, startOfDay } from './base-methods';
import { differenceInMinutes } from './difference-in-minutes';

export function minutesFromMidnight<T extends Date>(this: T) {
	const start = startOfDay.apply(clone.apply(this));
	return differenceInMinutes.apply(this, [start]);
}
