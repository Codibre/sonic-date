import { SonicDate } from 'src/index';
import { toISODateString } from 'src/methods';

describe(toISODateString.name, () => {
	it('should return date in YYYY-MM-DD format', () => {
		const date = new SonicDate(2022, 4, 14);

		const result = date.toISODateString();

		expect(result).toEqual('2022-05-14');
	});
});
