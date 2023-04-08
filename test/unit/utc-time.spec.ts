import { SonicDate } from 'src/index';
import { utcTime } from 'src/methods';

describe(utcTime.name, () => {
	it('should return getTime but in UTC', () => {
		const date = new SonicDate(2022, 4, 14);
		jest.spyOn(date, 'getTimezoneOffset').mockReturnValue(1000);

		const result = date.utcTime();

		expect(result).toEqual(date.getTime() - 1000 * 60000);
	});
});
