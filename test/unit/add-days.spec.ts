import { SonicDate } from 'src/index';
import { getDstTransitions } from 'test/helpers/tz-offset-transitions';

describe('addDays', () => {
	it('adds the given number of days', () => {
		const result = new SonicDate(2014, 8 /* Sep */, 1).addDays(10);
		expect(result).toEqual(new Date(2014, 8 /* Sep */, 11));
	});

	it('should mutate the original date', () => {
		const date = new SonicDate(2014, 8 /* Sep */, 1);
		date.addDays(11);
		expect(date).toEqual(new Date(2014, 8 /* Sep */, 12));
	});

	it('returns `Invalid Date` if the given date is invalid', () => {
		const result = new SonicDate(NaN).addDays(10);

		expect(result).toBeInstanceOf(Date);
		expect(result.getTime()).toBeNaN();
	});

	it('returns `Invalid Date` if the given amount is NaN', () => {
		const result = new SonicDate(2014, 8 /* Sep */, 1).addDays(NaN);

		expect(result).toBeInstanceOf(Date);
		expect(result.getTime()).toBeNaN();
	});

	const dstTransitions = getDstTransitions(2017);
	if (dstTransitions.start && dstTransitions.end) {
		const tz =
			Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;
		const HOUR = 1000 * 60 * 60;
		const MINUTE = 1000 * 60;
		// It's usually 1 hour, but for some timezones, e.g. Australia/Lord_Howe, it is 30 minutes
		const dstOffset =
			dstTransitions.start && dstTransitions.end
				? (dstTransitions.end.getTimezoneOffset() -
						dstTransitions.start.getTimezoneOffset()) *
					MINUTE
				: NaN;

		it(`works at DST-start boundary in local timezone: ${
			tz || '(unknown)'
		}`, () => {
			const date = new SonicDate(dstTransitions.start!);
			const result = date.addDays(1);
			expect(result).toEqual(new Date(date.getTime() + 24 * HOUR));
		});

		it(`works at DST-start - 30 mins in local timezone: ${
			tz || '(unknown)'
		}`, () => {
			const date = new SonicDate(dstTransitions.start!.getTime() - 0.5 * HOUR);
			const result = date.addDays(1);
			// started before the transition so will only be 23 hours later in local time
			expect(result).toEqual(new Date(date.getTime() + 24 * HOUR - dstOffset));
		});

		it(`works at DST-start - 60 mins in local timezone: ${
			tz || '(unknown)'
		}`, () => {
			const date = new SonicDate(dstTransitions.start!.getTime() - 1 * HOUR);
			const result = date.addDays(1);
			// started before the transition so will only be 23 hours later in local time
			expect(result).toEqual(new Date(date.getTime() + 24 * HOUR - dstOffset));
		});

		it(`works at DST-end boundary in local timezone: ${
			tz || '(unknown)'
		}`, () => {
			const date = new SonicDate(dstTransitions.end!);
			const result = date.addDays(1);
			expect(result).toEqual(new Date(date.getTime() + 24 * HOUR));
		});

		it(`works at DST-end - 30 mins in local timezone: ${
			tz || '(unknown)'
		}`, () => {
			const date = new SonicDate(dstTransitions.end!.getTime() - 0.5 * HOUR);
			const result = date.addDays(1);
			// started before the transition so will be 25 hours later in local
			// time because one hour repeats after DST ends.
			expect(result).toEqual(new Date(date.getTime() + 24 * HOUR + dstOffset));
		});

		it(`works at DST-end - 60 mins in local timezone: ${
			tz || '(unknown)'
		}`, () => {
			const date = new SonicDate(dstTransitions.end!.getTime() - 1 * HOUR);
			const result = date.addDays(1);
			// started before the transition so will be 25 hours later in local
			// time because one hour repeats after DST ends.
			expect(result).toEqual(new Date(date.getTime() + 24 * HOUR + dstOffset));
		});

		it(`doesn't mutate if zero increment is used: ${tz || '(unknown)'}`, () => {
			const date = new SonicDate(dstTransitions.end!);
			const result = date.addDays(0);
			expect(result).toEqual(date);
		});
	}
});
