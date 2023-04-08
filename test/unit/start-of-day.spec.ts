/* eslint-env mocha */

import assert from 'assert';
import { SonicDate } from 'src/index';

describe('startOfDay', () => {
	it('returns the date with the time set to 00:00:00', () => {
		const date = new SonicDate(2014, 8 /* Sep */, 2, 11, 55, 0);
		const result = date.startOfDay();
		assert.deepStrictEqual(
			result,
			new SonicDate(2014, 8 /* Sep */, 2, 0, 0, 0, 0),
		);
	});

	it('should mutate the original date', () => {
		const date = new SonicDate(2014, 8 /* Sep */, 2, 11, 55, 0);
		date.startOfDay();
		assert.deepStrictEqual(date, new SonicDate(2014, 8 /* Sep */, 2, 0, 0, 0));
	});

	it('returns `Invalid Date` if the given date is invalid', () => {
		const result = new SonicDate(NaN).startOfDay();
		assert(result instanceof Date && isNaN(result.getTime()));
	});
});
