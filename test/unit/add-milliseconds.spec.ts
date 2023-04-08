/* eslint-env mocha */

import assert from 'assert';
import { SonicDate } from 'src/index';

describe('addMilliseconds', () => {
	it('adds the given number of milliseconds', () => {
		const result = new SonicDate(
			2014,
			6 /* Jul */,
			10,
			12,
			45,
			30,
			0,
		).addMilliseconds(750);
		assert.deepStrictEqual(
			result,
			new SonicDate(2014, 6 /* Jul */, 10, 12, 45, 30, 750),
		);
	});

	it('should mutate the original date', () => {
		const date = new SonicDate(2014, 6 /* Jul */, 10, 12, 45, 30, 0);
		date.addMilliseconds(250);
		assert.deepStrictEqual(
			date,
			new SonicDate(2014, 6 /* Jul */, 10, 12, 45, 30, 250),
		);
	});

	it('returns `Invalid Date` if the given date is invalid', () => {
		const result = new SonicDate(NaN).addMilliseconds(750);
		assert(result instanceof Date && isNaN(result.getTime()));
	});

	it('returns `Invalid Date` if the given amount is NaN', () => {
		const result = new SonicDate(
			2014,
			6 /* Jul */,
			10,
			12,
			45,
			30,
			0,
		).addMilliseconds(NaN);
		assert(result instanceof Date && isNaN(result.getTime()));
	});
});
