[![Actions Status](https://github.com/Codibre/sonic-date/workflows/build/badge.svg)](https://github.com/Codibre/sonic-date/actions)
[![Actions Status](https://github.com/Codibre/sonic-date/workflows/test/badge.svg)](https://github.com/Codibre/sonic-date/actions)
[![Actions Status](https://github.com/Codibre/sonic-date/workflows/lint/badge.svg)](https://github.com/Codibre/sonic-date/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/test_coverage)](https://codeclimate.com/github/Codibre/sonic-date/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/maintainability)](https://codeclimate.com/github/Codibre/sonic-date/maintainability)
[![Packages](https://david-dm.org/Codibre/sonic-date.svg)](https://david-dm.org/Codibre/sonic-date)
[![npm version](https://badge.fury.io/js/sonic-date.svg)](https://badge.fury.io/js/sonic-date)

Sonic that is a fluent implementation for some of the **date-fns** functions heavily focused on performance.
As you can see, sonic-date is more than 4 times faster than **date-fns**

```
moment x 136,114 ops/sec ±2.23% (90 runs sampled)
date-fns x 583,665 ops/sec ±0.54% (98 runs sampled)
sonic-date x 2,613,432 ops/sec ±0.73% (93 runs sampled)
```

The catch is that in our implementation is not immutable, and many of the type checking date-fns does we do not. So, although date-fns is safer for a general purpose use, sonic-date is really faster and best to be used in safer environments, like a back-end service.

We'll add more methods from date-fns by demand, always caring about performance and precision in the first place.

## How to Install

```
npm i sonic-date
```

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
