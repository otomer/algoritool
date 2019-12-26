<h1 align="center">
    <br><br>
	 <a href="https://github.com/otomer/algoritool"><img src="https://i.ibb.co/NLb9BxZ/algoritool.png" alt="algoritool - A sort of glorified dice-throwing" width=200"></a>
     <br><br>
</h1>
<h2 align="center">
algoritool - tech tools for algorithm design
</h2>

[![npm](https://img.shields.io/npm/v/algoritool.svg)](https://www.npmjs.com/package/algoritool) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/algoritool.svg)](https://www.npmjs.com/package/algoritool) [![npm dependents](https://badgen.net/npm/dependents/algoritool)](https://www.npmjs.com/package/algoritool?activeTab=dependents) [![Downloads](https://badgen.net/npm/dt/algoritool)](https://www.npmjs.com/package/algoritool)

---

## Introduction

Algorithm Tools are useful small algorithms packaged in a way that make it easy to re-use them in other Algorithms.

## Install

```
$ npm install algoritool
```

## Usage

```javascript
const algoritool = require("algoritool");

// Specific example:
const { ArrayManipulation } = require("algoritool");
const mySort = array => ArrayManipulation.clone(array).sort();
```

---

## Methods

#### Array Creation

```typescript
sequence: (len: any, from?: number) => number[]
```

#### Array Conversion

```typescript
toObject: (arr: any) => any;
```

#### Array Manipulation

```typescript
chunksSplit: (arr: any, chunkSize: any) => any[]
clone: (arr: any) => any[]
empty: (arr: any) => any
permutations: (arr: any) => any
removeDuplicates: (arr: any) => any[]
```

#### Array Sorting

```typescript
byAttribute: (arr: any, attr: any, asc?: boolean) => any;
```

#### Array Validation

```typescript
isArray: (value: any) => boolean;
```

#### String Manipulation

```typescript
repeat: (str: any, times: any) => string;
```

---

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/otomer/algoritool)
