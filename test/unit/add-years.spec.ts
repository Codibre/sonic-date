import { SonicDate } from 'src/sonic-date';

describe('addYears', () => {
	it('adds the given number of years', () => {
		const result = new SonicDate(2014, 8 /* Sep */, 1).addYears(5);
		expect(result).toEqual(new Date(2019, 8 /* Sep */, 1));
	});

	it('does mutate the original date', () => {
		const date = new SonicDate(2014, 8 /* Sep */, 1);
		date.addYears(12);
		expect(date).toEqual(new Date(2026, 8 /* Sep */, 1));
	});

	it('handles the leap years properly', () => {
		const result = new SonicDate(2016, 1 /* Feb */, 29).addYears(1);
		expect(result).toEqual(new Date(2017, 1 /* Feb */, 28));
	});

	it('handles dates before 100 AD', () => {
		const initialDate = new SonicDate(0);
		initialDate.setFullYear(0, 1 /* Feb */, 29);
		initialDate.setHours(0, 0, 0, 0);
		const expectedResult = new Date(0);
		expectedResult.setFullYear(1, 1 /* Feb */, 28);
		expectedResult.setHours(0, 0, 0, 0);
		const result = initialDate.addYears(1);
		expect(result).toEqual(expectedResult);
	});

	it('returns `Invalid Date` if the given date is invalid', () => {
		const result = new SonicDate(NaN).addYears(5);
		expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
	});

	it('returns `Invalid Date` if the given amount is NaN', () => {
		const result = new SonicDate(2014, 8 /* Sep */, 1).addYears(NaN);
		expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
	});
});
