# ts-type-utils

[![npm version](https://badge.fury.io/js/@nidomiro%2Fts-type-utils.svg)](https://www.npmjs.com/package/@nidomiro/ts-type-utils)

A library containing utilities for typescript.

## Content

### ModifyTypeOfProperty

Modifies the type of **existing** properties.

Correct:

```typescript
type A = {
	a: string
	b: string
}
type ModA = ModifyTypeOfProperty<A, { b: number }>
/*
ModA = {
    a: string,
	b: number,
}
 */
```

Incorrect:

```typescript
type A = {
	a: string
	b: string
}
type ModA = ModifyTypeOfProperty<A, { c: number }>
/*
Error:
TS2559: Type '{ c: number; }' has no properties in common with type 'Partial{ a: unknown; b: unknown; }>'.
 */
```

## Development

### Building

Run `nx build ts-type-utils` to build the library.

### Running unit tests

Run `nx test ts-type-utils` to execute the unit tests.

### Publish

Make sure you are logged into npm.

Run `nx publish ts-type-utils --tag latest --ver x.x.x` to publish to npm.
