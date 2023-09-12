/* eslint-env mocha */

import assert from 'assert';
import { SonicDate } from 'src/index';
import { minutesFromMidnight } from 'src/methods';

describe(minutesFromMidnight.name, () => {
	it('returns the date with the time set to 00:00:00', () => {
		const date = new SonicDate(2014, 8 /* Sep */, 2, 11, 55, 0);

		const result = date.minutesFromMidnight();

		expect(result).toEqual(715);
	});

	it('should not mutate the original date', () => {
		const date = new SonicDate(2014, 8 /* Sep */, 2, 11, 55, 0);
		date.minutesFromMidnight();
		assert.deepStrictEqual(
			date,
			new SonicDate(2014, 8 /* Sep */, 2, 11, 55, 0),
		);
	});

	it('returns `NaN` if the given date is invalid', () => {
		const result = new SonicDate(NaN).minutesFromMidnight();

		expect(result).toBeNaN();
	});
});
