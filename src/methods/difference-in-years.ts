import { Dateable } from 'src/sonic-date';
import { isAfter } from './comparisons';

/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param this - The earlier date
 * @param refDate - The later date
 *
 * @returns The number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */
export function differenceInYears(this: Date, refDate: Dateable): number {
	if (!(refDate instanceof Date)) refDate = new Date(refDate);
	const [earlierDate, laterDate, adj] = isAfter.call(this, refDate)
		? [refDate, this, 1]
		: [this, refDate, -1];
	const diff = refDate.getFullYear() - this.getFullYear();
	const laterMonth = laterDate.getMonth();
	const earlierMonth = earlierDate.getMonth();
	if (laterMonth > earlierMonth) return diff;
	if (laterMonth < earlierMonth) return diff + adj;
	const laterDay = laterDate.getDate();
	const earlierDay = earlierDate.getDate();
	if (laterDay < earlierDay) return diff + adj;
	return diff;
}
