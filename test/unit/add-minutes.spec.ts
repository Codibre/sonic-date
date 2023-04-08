/* eslint-env mocha */

import assert from 'assert';
import { SonicDate } from 'src/index';

describe('addMinutes', () => {
	it('adds the given number of minutes', () => {
		const result = new SonicDate(2014, 6 /* Jul */, 10, 12, 0).addMinutes(30);
		assert.deepStrictEqual(
			result,
			new SonicDate(2014, 6 /* Jul */, 10, 12, 30),
		);
	});

	it('should mutate the original date', () => {
		const date = new SonicDate(2014, 6 /* Jul */, 10, 12, 0);
		date.addMinutes(25);
		assert.deepStrictEqual(date, new SonicDate(2014, 6 /* Jul */, 10, 12, 25));
	});

	it('returns `Invalid Date` if the given date is invalid', () => {
		const result = new SonicDate(NaN).addMinutes(30);
		assert(result instanceof Date && isNaN(result.getTime()));
	});

	it('returns `Invalid Date` if the given amount is NaN', () => {
		const result = new SonicDate(2014, 6 /* Jul */, 10, 12, 0).addMinutes(NaN);
		assert(result instanceof Date && isNaN(result.getTime()));
	});
});
