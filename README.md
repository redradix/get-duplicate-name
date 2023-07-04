<!--
SPDX-FileCopyrightText: 2023 Redradix - development@redradix.com

SPDX-License-Identifier: MIT
-->

# get-duplicate-name

Returns the corresponding name when duplicating an element of a list of elements. The result will be a string with the original name, the string provided to identify a duplicate (e.g. "Copy") and, if duplicates already exist, a number in brackets starting with 2. Example: "Element Copy (4)".

## Installation

```
npm install --save get-duplicate-name
```

or

```
yarn add get-duplicate-name
```

## Usage

```js
import getDuplicateName from 'get-duplicate-name'
// or const getDuplicateName = require('get-duplicate-name')

const elements = [
  { name: 'Element' },
  { name: 'Element Copy' },
  { name: 'Element Copy (1)' },
  { name: 'Element Copy (2)' },
  { name: 'Element Copy (3)' },
]
const duplicateString = 'Copy'

const result = getDuplicateName(elements, elements[2].name, duplicateString)
// 'Element Copy (4)'
```
