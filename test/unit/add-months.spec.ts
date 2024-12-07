import { SonicDate } from 'src/index';

describe('addMonths', () => {
	it('adds the given number of months', () => {
		const result = new SonicDate(2014, 8 /* Sep */, 1).addMonths(5);
		expect(result).toEqual(new Date(2015, 1 /* Feb */, 1));
	});

	it('does mutate the original date', () => {
		const date = new SonicDate(2014, 8 /* Sep */, 1);
		date.addMonths(12);
		expect(date).toEqual(new Date(2015, 8 /* Sep */, 1));
	});

	it('works well if the desired month has fewer days and the provided date is in the last day of a month', () => {
		const date = new SonicDate(2014, 11 /* Dec */, 31);
		date.addMonths(2);
		expect(date).toEqual(new Date(2015, 1 /* Feb */, 28));
	});

	it('handles dates before 100 AD', () => {
		const initialDate = new SonicDate(0);
		initialDate.setFullYear(0, 0 /* Jan */, 31);
		initialDate.setHours(0, 0, 0, 0);
		const expectedResult = new SonicDate(0);
		expectedResult.setFullYear(0, 1 /* Feb */, 29);
		expectedResult.setHours(0, 0, 0, 0);
		initialDate.addMonths(1);
		expect(initialDate).toEqual(expectedResult);
	});

	it('returns `Invalid Date` if the given date is invalid', () => {
		const result = new SonicDate(NaN).addMonths(5);
		expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
	});

	it('returns `Invalid Date` if the given amount is NaN', () => {
		const result = new SonicDate(2014, 8 /* Sep */, 1).addMonths(NaN);
		expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
	});
});
