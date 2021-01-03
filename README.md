### Fork notice
This fork is a TypeScript implementation of [dlv](https://github.com/developit/dlv).


# UPDATE

Now includes pre-build module and commonjs!


# `dlv(obj, keypath)`
![npm (scoped)](https://img.shields.io/npm/v/@paxperscientiam/dlv.ts?style=for-the-badge)
![Travis (.org)](https://img.shields.io/travis/paxperscientiam/dlv.ts?style=for-the-badge)

> Safely get a dot-notated path within a nested object, with ability to return a default if the full key path does not exist or the value is "undefined".


### Installation

`pnpm i @paxperscientiam/dlv.ts`

or ...

`npm i @paxperscientiam/dlv.ts`

or ...

`yarn add @paxperscientiam/dlv.ts`


`@paxperscientiam/dlv.ts` uses a default export.


```js
import delve from '@paxperscientiam/dlv.ts';

let obj = {
	a: {
		b: {
			c: 1,
			d: undefined,
			e: null
		}
	}
};

//use string dot notation for keys
delve(obj, 'a.b.c') === 1;

//or use an array key
delve(obj, ['a', 'b', 'c']) === 1;

delve(obj, 'a.b') === obj.a.b;

//returns undefined if the full key path does not exist and no default is specified
delve(obj, 'a.b.c.f') === undefined;

//optional third parameter for default if the full key in path is missing
delve(obj, 'a.b.c.f', 'foo') === 'foo';

//or if the key exists but the value is undefined
delve(obj, 'a.b.c.d', 'foo') === 'foo';

//Non-truthy defined values are still returned if they exist at the full keypath
delve(obj, 'a.b.c.e', 'foo') === null;

//undefined obj or key returns undefined, unless a default is supplied
delve(undefined, 'a.b.c') === undefined;
delve(undefined, 'a.b.c', 'foo') === 'foo';
delve(obj, undefined, 'foo') === 'foo';
```


### Setter Counterparts

- [dset](https://github.com/lukeed/dset) by [@lukeed](https://github.com/lukeed) is the spiritual "set" counterpart of `dlv` and very fast.
- [bury](https://github.com/kalmbach/bury) by [@kalmbach](https://github.com/kalmbach) does the opposite of `dlv` and is implemented in a very similar manner.


### License

[MIT](https://oss.ninja/mit/developit/)


[preact]: https://github.com/developit/preact
[tests]: https://github.com/developit/dlv/blob/master/test.js
