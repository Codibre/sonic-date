export function toNumber(dateToCompare: number | Date | string) {
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
export function toDate(dateToCompare: number | Date | string) {
	return dateToCompare instanceof Date
		? dateToCompare
		: new Date(dateToCompare);
}
