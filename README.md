# Excel Column ID

<!--
First publish:

```sh
npm publish --access public
```
-->

[![npm](https://img.shields.io/npm/v/excel-column-id.svg)](https://www.npmjs.com/package/excel-column-id)
![Downloads](https://img.shields.io/npm/dm/excel-column-id.svg)
[![Build Status](https://github.com/daidodo/excel-column-id/actions/workflows/node.js.yml/badge.svg)](https://github.com/daidodo/excel-column-id/actions)

Generate IDs similar to Excel column ID.

# Usage

```sh
npm i excel-column-id
```

```ts
import generateId from 'excel-column-id';

const A = generateId(0);   // 'A'
const B = generateId(1);   // 'B'
const AA = generateId(26); // 'AA'
```

# APIs

## generateId

▸ **generateId**(`index`): `string`

Generate IDs similar to Microsoft Excel column IDs:

```txt
  A, B, C, ...,
  AA, AB, AC, ...,
  BA, BB, BC, ...,
  ...
```

#### Parameters

| Name    | Type     | Description                       |
| :------ | :------- | :-------------------------------- |
| `index` | `number` | Index of the ID, starting from 0. |

#### Returns

`string`

ID string

# License

MIT © Zhao DAI <daidodo@gmail.com>
