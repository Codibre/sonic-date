/* eslint-env mocha */

import assert from 'assert';
import { SonicDate } from 'src/index';

describe('addHours', () => {
	it('adds the given numbers of hours', () => {
		const result = new SonicDate(2014, 6 /* Jul */, 10, 23, 0).addHours(2);
		assert.deepStrictEqual(result, new SonicDate(2014, 6 /* Jul */, 11, 1, 0));
	});

	it('should mutate the original date', () => {
		const date = new SonicDate(2014, 6 /* Jul */, 10, 23, 0);
		date.addHours(10);
		assert.deepStrictEqual(date, new SonicDate(2014, 6 /* Jul */, 11, 9, 0));
	});

	it('returns `Invalid Date` if the given date is invalid', () => {
		const result = new SonicDate(NaN).addHours(2);
		assert(result instanceof Date && isNaN(result.getTime()));
	});

	it('returns `Invalid Date` if the given amount is NaN', () => {
		const result = new SonicDate(2014, 6 /* Jul */, 10, 23, 0).addHours(NaN);
		assert(result instanceof Date && isNaN(result.getTime()));
	});
});
