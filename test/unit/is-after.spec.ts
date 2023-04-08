/* eslint-env mocha */

import assert from 'assert';
import { SonicDate } from 'src/index';
import { isAfter } from 'src/methods';

describe(isAfter.name, () => {
	it('returns true if the first date is after the second one', () => {
		const result = new SonicDate(1989, 6 /* Jul */, 10).isAfter(
			new SonicDate(1987, 1 /* Feb */, 11),
		);
		assert(result === true);
	});

	it('returns false if the first date is before the second one', () => {
		const result = new SonicDate(1987, 1 /* Feb */, 11).isAfter(
			new Date(1989, 6 /* Jul */, 10),
		);
		assert(result === false);
	});

	it('returns false if the first date is equal to the second one', () => {
		const result = new SonicDate(1989, 6 /* Jul */, 10).isAfter(
			new SonicDate(1989, 6 /* Jul */, 10),
		);
		assert(result === false);
	});

	it('should not mutate instances', () => {
		const date1 = new SonicDate(1989, 6 /* Jul */, 10);
		const date2 = new SonicDate(1987, 1 /* Feb */, 11);

		date1.isAfter(date2.getTime());

		expect(date1).toEqual(new SonicDate(1989, 6 /* Jul */, 10));
		expect(date2).toEqual(new SonicDate(1987, 1 /* Jul */, 11));
	});

	it('returns false if the first date is `Invalid Date`', () => {
		const result = new SonicDate(NaN).isAfter(new Date(1989, 6 /* Jul */, 10));
		assert(result === false);
	});

	it('returns false if the second date is `Invalid Date`', () => {
		const result = new SonicDate(1987, 1 /* Feb */, 11).isAfter(
			new SonicDate(NaN),
		);
		assert(result === false);
	});

	it('returns false if the both dates are `Invalid Date`', () => {
		const result = new SonicDate(NaN).isAfter(new SonicDate(NaN));
		assert(result === false);
	});
});
