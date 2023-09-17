import { scales } from './constants';

export function differenceInMinutes<T extends Date, R extends Date>(
	this: T,
	start: R,
) {
	return Math.floor((this.getTime() - start.getTime()) / scales.addMinutes);
}
