[sonic-date](../README.md) / [Exports](../modules.md) / SonicDate

# Class: SonicDate

## Hierarchy

- `Date`

  ↳ **`SonicDate`**

## Table of contents

### Constructors

- [constructor](SonicDate.md#constructor)

### Properties

- [getVarDate](SonicDate.md#getvardate)

### Methods

- [[toPrimitive]](SonicDate.md#[toprimitive])
- [addDays](SonicDate.md#adddays)
- [addHours](SonicDate.md#addhours)
- [addMilliseconds](SonicDate.md#addmilliseconds)
- [addMinutes](SonicDate.md#addminutes)
- [addSeconds](SonicDate.md#addseconds)
- [clone](SonicDate.md#clone)
- [differenceInDays](SonicDate.md#differenceindays)
- [getDate](SonicDate.md#getdate)
- [getDay](SonicDate.md#getday)
- [getFullYear](SonicDate.md#getfullyear)
- [getHours](SonicDate.md#gethours)
- [getMilliseconds](SonicDate.md#getmilliseconds)
- [getMinutes](SonicDate.md#getminutes)
- [getMonth](SonicDate.md#getmonth)
- [getSeconds](SonicDate.md#getseconds)
- [getTime](SonicDate.md#gettime)
- [getTimezoneOffset](SonicDate.md#gettimezoneoffset)
- [getUTCDate](SonicDate.md#getutcdate)
- [getUTCDay](SonicDate.md#getutcday)
- [getUTCFullYear](SonicDate.md#getutcfullyear)
- [getUTCHours](SonicDate.md#getutchours)
- [getUTCMilliseconds](SonicDate.md#getutcmilliseconds)
- [getUTCMinutes](SonicDate.md#getutcminutes)
- [getUTCMonth](SonicDate.md#getutcmonth)
- [getUTCSeconds](SonicDate.md#getutcseconds)
- [isAfter](SonicDate.md#isafter)
- [isBefore](SonicDate.md#isbefore)
- [setDate](SonicDate.md#setdate)
- [setFullYear](SonicDate.md#setfullyear)
- [setHours](SonicDate.md#sethours)
- [setMilliseconds](SonicDate.md#setmilliseconds)
- [setMinutes](SonicDate.md#setminutes)
- [setMonth](SonicDate.md#setmonth)
- [setSeconds](SonicDate.md#setseconds)
- [setTime](SonicDate.md#settime)
- [setUTCDate](SonicDate.md#setutcdate)
- [setUTCFullYear](SonicDate.md#setutcfullyear)
- [setUTCHours](SonicDate.md#setutchours)
- [setUTCMilliseconds](SonicDate.md#setutcmilliseconds)
- [setUTCMinutes](SonicDate.md#setutcminutes)
- [setUTCMonth](SonicDate.md#setutcmonth)
- [setUTCSeconds](SonicDate.md#setutcseconds)
- [startOfDay](SonicDate.md#startofday)
- [toDateString](SonicDate.md#todatestring)
- [toISODateString](SonicDate.md#toisodatestring)
- [toISOString](SonicDate.md#toisostring)
- [toJSON](SonicDate.md#tojson)
- [toLocaleDateString](SonicDate.md#tolocaledatestring)
- [toLocaleString](SonicDate.md#tolocalestring)
- [toLocaleTimeString](SonicDate.md#tolocaletimestring)
- [toString](SonicDate.md#tostring)
- [toTimeString](SonicDate.md#totimestring)
- [toUTCString](SonicDate.md#toutcstring)
- [utcTime](SonicDate.md#utctime)
- [valueOf](SonicDate.md#valueof)
- [UTC](SonicDate.md#utc)
- [now](SonicDate.md#now)
- [parse](SonicDate.md#parse)

## Constructors

### constructor

• **new SonicDate**()

#### Inherited from

Date.constructor

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:903

• **new SonicDate**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |

#### Inherited from

Date.constructor

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:904

• **new SonicDate**(`year`, `monthIndex`, `date?`, `hours?`, `minutes?`, `seconds?`, `ms?`)

Creates a new Date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year. |
| `monthIndex` | `number` | The month as a number between 0 and 11 (January to December). |
| `date?` | `number` | The date as a number between 1 and 31. |
| `hours?` | `number` | Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour. |
| `minutes?` | `number` | Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes. |
| `seconds?` | `number` | Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds. |
| `ms?` | `number` | A number from 0 to 999 that specifies the milliseconds. |

#### Inherited from

Date.constructor

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:915

• **new SonicDate**(`vd`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vd` | `VarDate` |

#### Inherited from

Date.constructor

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.scripthost.d.ts:322

• **new SonicDate**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `Date` |

#### Inherited from

Date.constructor

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es2015.core.d.ts:90

## Properties

### getVarDate

• **getVarDate**: () => `VarDate`

#### Type declaration

▸ (): `VarDate`

##### Returns

`VarDate`

#### Inherited from

Date.getVarDate

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.scripthost.d.ts:326

## Methods

### [toPrimitive]

▸ **[toPrimitive]**(`hint`): `string`

Converts a Date object to a string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hint` | ``"default"`` |

#### Returns

`string`

#### Inherited from

Date.\_\_@toPrimitive@15

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:114

▸ **[toPrimitive]**(`hint`): `string`

Converts a Date object to a string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hint` | ``"string"`` |

#### Returns

`string`

#### Inherited from

Date.\_\_@toPrimitive@15

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:118

▸ **[toPrimitive]**(`hint`): `number`

Converts a Date object to a number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hint` | ``"number"`` |

#### Returns

`number`

#### Inherited from

Date.\_\_@toPrimitive@15

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:122

▸ **[toPrimitive]**(`hint`): `string` \| `number`

Converts a Date object to a string or number.

**`Throws`**

If 'hint' was given something other than "number", "string", or "default".

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hint` | `string` | The strings "number", "string", or "default" to specify what primitive to return. |

#### Returns

`string` \| `number`

A number if 'hint' was "number", a string if 'hint' was "string" or "default".

#### Inherited from

Date.\_\_@toPrimitive@15

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:131

___

### addDays

▸ **addDays**(`amount`): [`SonicDate`](SonicDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`SonicDate`](SonicDate.md)

#### Defined in

[src/sonic-date.ts:14](https://github.com/Codibre/sonic-date/blob/d2c2d4c/src/sonic-date.ts#L14)

___

### addHours

▸ **addHours**(`amount`): [`SonicDate`](SonicDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`SonicDate`](SonicDate.md)

#### Defined in

[src/sonic-date.ts:13](https://github.com/Codibre/sonic-date/blob/d2c2d4c/src/sonic-date.ts#L13)

___

### addMilliseconds

▸ **addMilliseconds**(`amount`): [`SonicDate`](SonicDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`SonicDate`](SonicDate.md)

#### Defined in

[src/sonic-date.ts:10](https://github.com/Codibre/sonic-date/blob/d2c2d4c/src/sonic-date.ts#L10)

___

### addMinutes

▸ **addMinutes**(`amount`): [`SonicDate`](SonicDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`SonicDate`](SonicDate.md)

#### Defined in

[src/sonic-date.ts:12](https://github.com/Codibre/sonic-date/blob/d2c2d4c/src/sonic-date.ts#L12)

___

### addSeconds

▸ **addSeconds**(`amount`): [`SonicDate`](SonicDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`SonicDate`](SonicDate.md)

#### Defined in

[src/sonic-date.ts:11](https://github.com/Codibre/sonic-date/blob/d2c2d4c/src/sonic-date.ts#L11)

___

### clone

▸ **clone**(): [`SonicDate`](SonicDate.md)

#### Returns

[`SonicDate`](SonicDate.md)

#### Defined in

[src/sonic-date.ts:7](https://github.com/Codibre/sonic-date/blob/d2c2d4c/src/sonic-date.ts#L7)

___

### differenceInDays

▸ **differenceInDays**(`dateRight`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dateRight` | [`Dateable`](../modules.md#dateable) |

#### Returns

`number`

#### Defined in

[src/sonic-date.ts:16](https://github.com/Codibre/sonic-date/blob/d2c2d4c/src/sonic-date.ts#L16)

___

### getDate

▸ **getDate**(): `number`

Gets the day-of-the-month, using local time.

#### Returns

`number`

#### Inherited from

Date.getDate

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:775

___

### getDay

▸ **getDay**(): `number`

Gets the day of the week, using local time.

#### Returns

`number`

#### Inherited from

Date.getDay

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:779

___

### getFullYear

▸ **getFullYear**(): `number`

Gets the year, using local time.

#### Returns

`number`

#### Inherited from

Date.getFullYear

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:767

___

### getHours

▸ **getHours**(): `number`

Gets the hours in a date, using local time.

#### Returns

`number`

#### Inherited from

Date.getHours

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:783

___

### getMilliseconds

▸ **getMilliseconds**(): `number`

Gets the milliseconds of a Date, using local time.

#### Returns

`number`

#### Inherited from

Date.getMilliseconds

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:795

___

### getMinutes

▸ **getMinutes**(): `number`

Gets the minutes of a Date object, using local time.

#### Returns

`number`

#### Inherited from

Date.getMinutes

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:787

___

### getMonth

▸ **getMonth**(): `number`

Gets the month, using local time.

#### Returns

`number`

#### Inherited from

Date.getMonth

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:771

___

### getSeconds

▸ **getSeconds**(): `number`

Gets the seconds of a Date object, using local time.

#### Returns

`number`

#### Inherited from

Date.getSeconds

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:791

___

### getTime

▸ **getTime**(): `number`

Gets the time value in milliseconds.

#### Returns

`number`

#### Inherited from

Date.getTime

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:765

___

### getTimezoneOffset

▸ **getTimezoneOffset**(): `number`

Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).

#### Returns

`number`

#### Inherited from

Date.getTimezoneOffset

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:799

___

### getUTCDate

▸ **getUTCDate**(): `number`

Gets the day-of-the-month, using Universal Coordinated Time (UTC).

#### Returns

`number`

#### Inherited from

Date.getUTCDate

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:777

___

### getUTCDay

▸ **getUTCDay**(): `number`

Gets the day of the week using Universal Coordinated Time (UTC).

#### Returns

`number`

#### Inherited from

Date.getUTCDay

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:781

___

### getUTCFullYear

▸ **getUTCFullYear**(): `number`

Gets the year using Universal Coordinated Time (UTC).

#### Returns

`number`

#### Inherited from

Date.getUTCFullYear

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:769

___

### getUTCHours

▸ **getUTCHours**(): `number`

Gets the hours value in a Date object using Universal Coordinated Time (UTC).

#### Returns

`number`

#### Inherited from

Date.getUTCHours

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:785

___

### getUTCMilliseconds

▸ **getUTCMilliseconds**(): `number`

Gets the milliseconds of a Date object using Universal Coordinated Time (UTC).

#### Returns

`number`

#### Inherited from

Date.getUTCMilliseconds

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:797

___

### getUTCMinutes

▸ **getUTCMinutes**(): `number`

Gets the minutes of a Date object using Universal Coordinated Time (UTC).

#### Returns

`number`

#### Inherited from

Date.getUTCMinutes

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:789

___

### getUTCMonth

▸ **getUTCMonth**(): `number`

Gets the month of a Date object using Universal Coordinated Time (UTC).

#### Returns

`number`

#### Inherited from

Date.getUTCMonth

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:773

___

### getUTCSeconds

▸ **getUTCSeconds**(): `number`

Gets the seconds of a Date object using Universal Coordinated Time (UTC).

#### Returns

`number`

#### Inherited from

Date.getUTCSeconds

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:793

___

### isAfter

▸ **isAfter**(`dateToCompare`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dateToCompare` | [`Dateable`](../modules.md#dateable) |

#### Returns

`boolean`

#### Defined in

[src/sonic-date.ts:8](https://github.com/Codibre/sonic-date/blob/d2c2d4c/src/sonic-date.ts#L8)

___

### isBefore

▸ **isBefore**(`dateToCompare`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dateToCompare` | [`Dateable`](../modules.md#dateable) |

#### Returns

`boolean`

#### Defined in

[src/sonic-date.ts:9](https://github.com/Codibre/sonic-date/blob/d2c2d4c/src/sonic-date.ts#L9)

___

### setDate

▸ **setDate**(`date`): `number`

Sets the numeric day-of-the-month value of the Date object using local time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `number` | A numeric value equal to the day of the month. |

#### Returns

`number`

#### Inherited from

Date.setDate

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:862

___

### setFullYear

▸ **setFullYear**(`year`, `month?`, `date?`): `number`

Sets the year of the Date object using local time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | A numeric value for the year. |
| `month?` | `number` | A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified. |
| `date?` | `number` | A numeric value equal for the day of the month. |

#### Returns

`number`

#### Inherited from

Date.setFullYear

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:886

___

### setHours

▸ **setHours**(`hours`, `min?`, `sec?`, `ms?`): `number`

Sets the hour value in the Date object using local time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hours` | `number` | A numeric value equal to the hours value. |
| `min?` | `number` | A numeric value equal to the minutes value. |
| `sec?` | `number` | A numeric value equal to the seconds value. |
| `ms?` | `number` | A numeric value equal to the milliseconds value. |

#### Returns

`number`

#### Inherited from

Date.setHours

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:849

___

### setMilliseconds

▸ **setMilliseconds**(`ms`): `number`

Sets the milliseconds value in the Date object using local time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | A numeric value equal to the millisecond value. |

#### Returns

`number`

#### Inherited from

Date.setMilliseconds

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:809

___

### setMinutes

▸ **setMinutes**(`min`, `sec?`, `ms?`): `number`

Sets the minutes value in the Date object using local time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | A numeric value equal to the minutes value. |
| `sec?` | `number` | A numeric value equal to the seconds value. |
| `ms?` | `number` | A numeric value equal to the milliseconds value. |

#### Returns

`number`

#### Inherited from

Date.setMinutes

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:834

___

### setMonth

▸ **setMonth**(`month`, `date?`): `number`

Sets the month value in the Date object using local time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `month` | `number` | A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. |
| `date?` | `number` | A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used. |

#### Returns

`number`

#### Inherited from

Date.setMonth

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:873

___

### setSeconds

▸ **setSeconds**(`sec`, `ms?`): `number`

Sets the seconds value in the Date object using local time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sec` | `number` | A numeric value equal to the seconds value. |
| `ms?` | `number` | A numeric value equal to the milliseconds value. |

#### Returns

`number`

#### Inherited from

Date.setSeconds

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:821

___

### setTime

▸ **setTime**(`time`): `number`

Sets the date and time value in the Date object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT. |

#### Returns

`number`

#### Inherited from

Date.setTime

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:804

___

### setUTCDate

▸ **setUTCDate**(`date`): `number`

Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `number` | A numeric value equal to the day of the month. |

#### Returns

`number`

#### Inherited from

Date.setUTCDate

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:867

___

### setUTCFullYear

▸ **setUTCFullYear**(`year`, `month?`, `date?`): `number`

Sets the year value in the Date object using Universal Coordinated Time (UTC).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | A numeric value equal to the year. |
| `month?` | `number` | A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied. |
| `date?` | `number` | A numeric value equal to the day of the month. |

#### Returns

`number`

#### Inherited from

Date.setUTCFullYear

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:893

___

### setUTCHours

▸ **setUTCHours**(`hours`, `min?`, `sec?`, `ms?`): `number`

Sets the hours value in the Date object using Universal Coordinated Time (UTC).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hours` | `number` | A numeric value equal to the hours value. |
| `min?` | `number` | A numeric value equal to the minutes value. |
| `sec?` | `number` | A numeric value equal to the seconds value. |
| `ms?` | `number` | A numeric value equal to the milliseconds value. |

#### Returns

`number`

#### Inherited from

Date.setUTCHours

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:857

___

### setUTCMilliseconds

▸ **setUTCMilliseconds**(`ms`): `number`

Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | A numeric value equal to the millisecond value. |

#### Returns

`number`

#### Inherited from

Date.setUTCMilliseconds

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:814

___

### setUTCMinutes

▸ **setUTCMinutes**(`min`, `sec?`, `ms?`): `number`

Sets the minutes value in the Date object using Universal Coordinated Time (UTC).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | A numeric value equal to the minutes value. |
| `sec?` | `number` | A numeric value equal to the seconds value. |
| `ms?` | `number` | A numeric value equal to the milliseconds value. |

#### Returns

`number`

#### Inherited from

Date.setUTCMinutes

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:841

___

### setUTCMonth

▸ **setUTCMonth**(`month`, `date?`): `number`

Sets the month value in the Date object using Universal Coordinated Time (UTC).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `month` | `number` | A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. |
| `date?` | `number` | A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used. |

#### Returns

`number`

#### Inherited from

Date.setUTCMonth

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:879

___

### setUTCSeconds

▸ **setUTCSeconds**(`sec`, `ms?`): `number`

Sets the seconds value in the Date object using Universal Coordinated Time (UTC).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sec` | `number` | A numeric value equal to the seconds value. |
| `ms?` | `number` | A numeric value equal to the milliseconds value. |

#### Returns

`number`

#### Inherited from

Date.setUTCSeconds

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:827

___

### startOfDay

▸ **startOfDay**(): [`SonicDate`](SonicDate.md)

#### Returns

[`SonicDate`](SonicDate.md)

#### Defined in

[src/sonic-date.ts:15](https://github.com/Codibre/sonic-date/blob/d2c2d4c/src/sonic-date.ts#L15)

___

### toDateString

▸ **toDateString**(): `string`

Returns a date as a string value.

#### Returns

`string`

#### Inherited from

Date.toDateString

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:753

___

### toISODateString

▸ **toISODateString**(): `string`

#### Returns

`string`

#### Defined in

[src/sonic-date.ts:17](https://github.com/Codibre/sonic-date/blob/d2c2d4c/src/sonic-date.ts#L17)

___

### toISOString

▸ **toISOString**(): `string`

Returns a date as a string value in ISO format.

#### Returns

`string`

#### Inherited from

Date.toISOString

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:897

___

### toJSON

▸ **toJSON**(`key?`): `string`

Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `any` |

#### Returns

`string`

#### Inherited from

Date.toJSON

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:899

___

### toLocaleDateString

▸ **toLocaleDateString**(): `string`

Returns a date as a string value appropriate to the host environment's current locale.

#### Returns

`string`

#### Inherited from

Date.toLocaleDateString

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:759

▸ **toLocaleDateString**(`locales?`, `options?`): `string`

Converts a date to a string by using the current or specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locales?` | `string` \| `string`[] | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. |
| `options?` | `DateTimeFormatOptions` | An object that contains one or more properties that specify comparison options. |

#### Returns

`string`

#### Inherited from

Date.toLocaleDateString

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:4518

▸ **toLocaleDateString**(`locales?`, `options?`): `string`

Converts a date to a string by using the current or specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locales?` | `LocalesArgument` | A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. |
| `options?` | `DateTimeFormatOptions` | An object that contains one or more properties that specify comparison options. |

#### Returns

`string`

#### Inherited from

Date.toLocaleDateString

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es2020.date.d.ts:36

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a value as a string value appropriate to the host environment's current locale.

#### Returns

`string`

#### Inherited from

Date.toLocaleString

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:757

▸ **toLocaleString**(`locales?`, `options?`): `string`

Converts a date and time to a string by using the current or specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locales?` | `string` \| `string`[] | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. |
| `options?` | `DateTimeFormatOptions` | An object that contains one or more properties that specify comparison options. |

#### Returns

`string`

#### Inherited from

Date.toLocaleString

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:4512

▸ **toLocaleString**(`locales?`, `options?`): `string`

Converts a date and time to a string by using the current or specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locales?` | `LocalesArgument` | A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. |
| `options?` | `DateTimeFormatOptions` | An object that contains one or more properties that specify comparison options. |

#### Returns

`string`

#### Inherited from

Date.toLocaleString

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es2020.date.d.ts:29

___

### toLocaleTimeString

▸ **toLocaleTimeString**(): `string`

Returns a time as a string value appropriate to the host environment's current locale.

#### Returns

`string`

#### Inherited from

Date.toLocaleTimeString

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:761

▸ **toLocaleTimeString**(`locales?`, `options?`): `string`

Converts a time to a string by using the current or specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locales?` | `string` \| `string`[] | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. |
| `options?` | `DateTimeFormatOptions` | An object that contains one or more properties that specify comparison options. |

#### Returns

`string`

#### Inherited from

Date.toLocaleTimeString

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:4525

▸ **toLocaleTimeString**(`locales?`, `options?`): `string`

Converts a time to a string by using the current or specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locales?` | `LocalesArgument` | A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. |
| `options?` | `DateTimeFormatOptions` | An object that contains one or more properties that specify comparison options. |

#### Returns

`string`

#### Inherited from

Date.toLocaleTimeString

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es2020.date.d.ts:43

___

### toString

▸ **toString**(): `string`

Returns a string representation of a date. The format of the string depends on the locale.

#### Returns

`string`

#### Inherited from

Date.toString

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:751

___

### toTimeString

▸ **toTimeString**(): `string`

Returns a time as a string value.

#### Returns

`string`

#### Inherited from

Date.toTimeString

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:755

___

### toUTCString

▸ **toUTCString**(): `string`

Returns a date converted to a string using Universal Coordinated Time (UTC).

#### Returns

`string`

#### Inherited from

Date.toUTCString

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:895

___

### utcTime

▸ **utcTime**(): `number`

#### Returns

`number`

#### Defined in

[src/sonic-date.ts:18](https://github.com/Codibre/sonic-date/blob/d2c2d4c/src/sonic-date.ts#L18)

___

### valueOf

▸ **valueOf**(): `number`

Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

#### Returns

`number`

#### Inherited from

Date.valueOf

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:763

___

### UTC

▸ `Static` **UTC**(`year`, `monthIndex`, `date?`, `hours?`, `minutes?`, `seconds?`, `ms?`): `number`

Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year. |
| `monthIndex` | `number` | The month as a number between 0 and 11 (January to December). |
| `date?` | `number` | The date as a number between 1 and 31. |
| `hours?` | `number` | Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour. |
| `minutes?` | `number` | Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes. |
| `seconds?` | `number` | Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds. |
| `ms?` | `number` | A number from 0 to 999 that specifies the milliseconds. |

#### Returns

`number`

#### Inherited from

Date.UTC

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:933

___

### now

▸ `Static` **now**(): `number`

Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).

#### Returns

`number`

#### Inherited from

Date.now

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:935

___

### parse

▸ `Static` **parse**(`s`): `number`

Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `string` | A date string |

#### Returns

`number`

#### Inherited from

Date.parse

#### Defined in

node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:922
