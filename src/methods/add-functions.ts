import { scales } from './constants';

function addMilliseconds<T extends Date>(this: T, amount: number): typeof this {
	this.setTime(this.getTime() + amount);
	return this;
}

const addFuncs = {} as unknown as Record<
	keyof typeof scales,
	typeof addMilliseconds
>;

(Object.keys(scales) as Array<keyof typeof scales>).forEach((key) => {
	const scale = scales[key];
	const wrapper = {
		[key]<T extends Date>(this: T, amount: number) {
			return addMilliseconds.apply(this, [amount * scale]) as T;
		},
	};
	addFuncs[key] = wrapper[key] as unknown as typeof wrapper[typeof key];
});

module.exports = {
	addMilliseconds,
	...addFuncs,
};
