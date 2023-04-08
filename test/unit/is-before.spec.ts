import { SonicDate } from 'src/index';
/* eslint-env mocha */

import assert from 'assert';
import { isBefore } from 'src/methods';

describe(isBefore.name, () => {
	it('returns true if the first date is before the second one', () => {
		const result = new SonicDate(1987, 1 /* Feb */, 11).isBefore(
			new SonicDate(1989, 6 /* Jul */, 10),
		);
		assert(result === true);
	});

	it('returns true if the first date is before the second one when second one is a string', () => {
		const result = new SonicDate(1987, 1 /* Feb */, 11).isBefore(
			new SonicDate(1989, 6 /* Jul */, 10).toISOString(),
		);
		assert(result === true);
	});

	it('returns false if the first date is after the second one', () => {
		const result = new SonicDate(1989, 6 /* Jul */, 10).isBefore(
			new SonicDate(1987, 1 /* Feb */, 11),
		);
		assert(result === false);
	});

	it('returns false if the first date is after the second one is a string', () => {
		const result = new SonicDate(1989, 6 /* Jul */, 10).isBefore(
			new SonicDate(1987, 1 /* Feb */, 11).toISOString(),
		);
		assert(result === false);
	});

	it('returns false if the first date is equal to the second one', () => {
		const result = new SonicDate(1989, 6 /* Jul */, 10).isBefore(
			new SonicDate(1989, 6 /* Jul */, 10),
		);
		assert(result === false);
	});

	it('should not mudate instance', () => {
		const date1 = new SonicDate(1987, 1 /* Feb */, 11);
		const date2 = new SonicDate(1989, 6 /* Jul */, 10);

		date1.isBefore(date2.getTime());

		expect(date1).toEqual(new SonicDate(1987, 1 /* Feb */, 11));
		expect(date2).toEqual(new SonicDate(1989, 6 /* Jul */, 10));
	});

	it('returns false if the first date is `Invalid Date`', () => {
		const result = new SonicDate(NaN).isBefore(
			new SonicDate(1989, 6 /* Jul */, 10),
		);
		assert(result === false);
	});

	it('returns false if the second date is `Invalid Date`', () => {
		const result = new SonicDate(1987, 1 /* Feb */, 11).isBefore(
			new SonicDate(NaN),
		);
		assert(result === false);
	});

	it('returns false if the both dates are `Invalid Date`', () => {
		const result = new SonicDate(NaN).isBefore(new SonicDate(NaN));
		assert(result === false);
	});
});
