/* eslint-env mocha */

import assert from 'assert';
import { SonicDate } from 'src/index';

describe('addSeconds', () => {
	it('adds the given number of seconds', () => {
		const result = new SonicDate(2014, 6 /* Jul */, 10, 12, 45, 0).addSeconds(
			30,
		);
		assert.deepStrictEqual(
			result,
			new SonicDate(2014, 6 /* Jul */, 10, 12, 45, 30),
		);
	});

	it('should mutate the original date', () => {
		const date = new SonicDate(2014, 6 /* Jul */, 10, 12, 45, 0);
		date.addSeconds(15);
		assert.deepStrictEqual(
			date,
			new SonicDate(2014, 6 /* Jul */, 10, 12, 45, 15),
		);
	});

	it('returns `Invalid Date` if the given date is invalid', () => {
		const result = new SonicDate(NaN).addSeconds(30);
		assert(result instanceof Date && isNaN(result.getTime()));
	});

	it('returns `Invalid Date` if the given amount is NaN', () => {
		const result = new SonicDate(2014, 6 /* Jul */, 10, 12, 45, 0).addSeconds(
			NaN,
		);
		assert(result instanceof Date && isNaN(result.getTime()));
	});
});
