import { SonicDate } from 'src/index';
import { clone } from 'src/methods';

describe(clone.name, () => {
	it('should clone date', () => {
		const date = new SonicDate();

		const result = date.clone();

		expect(result).toEqual(date);
		expect(result).not.toBe(date);
	});
});
