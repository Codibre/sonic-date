import Benchmark = require('benchmark');
import { utc } from 'moment';
import { addDays, startOfDay } from 'date-fns';
import { SonicDate } from 'src/index';

const benchmarkSuite = new Benchmark.Suite();

describe('General benchmark', () => {
	it('moment x date-fns', async () => {
		const baseDate = new Date();
		function usingMoment(date?: Date) {
			return utc(date).add(10, 'days').startOf('day').toISOString();
		}
		function usingDateFns(date = new Date()) {
			return startOfDay(addDays(date, 10)).toISOString();
		}
		function usingCustom(date?: Date) {
			// date ??= new Date();
			return new SonicDate(date).addDays(10).startOfDay().toISOString();
		}

		expect(usingMoment(baseDate)).toBe(usingDateFns(baseDate));
		expect(usingMoment(baseDate)).toBe(usingCustom(baseDate));

		let log = '';
		const candidates: any[] = [];
		benchmarkSuite
			.add('moment', () => usingMoment())
			.add('date-fns', () => usingDateFns())
			.add('sonic-date', () => usingCustom())
			.on('cycle', function (event: any) {
				const { target } = event;
				candidates.push(target);
				log += `${target}\n`;
			})
			.on('complete', function (this: any) {
				console.log(log);
				candidates.sort((a, b) => b.hz - a.hz);
				expect(candidates[0].name).toBe('sonic-date');
				expect(candidates[0].hz / candidates[1].hz).toBeGreaterThan(3);
			})
			.run();
	});
});
