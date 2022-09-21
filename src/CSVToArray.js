const CSVToArray = (data, delimiter = ',', omitFirstRow = false) => {
    // IndexOf(/n) count chapter in string, from 1 to \n
    const a = data.slice(omitFirstRow ? data.indexOf('\n') + 1 : 0);
    const b = a.split('\n');
    const c = b.map((row) => row.split(delimiter));
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(c[0]);
    // if(omitFistRow){
    //     const arr = a.slice(data.indexOf('\n') + 1);
    //     console.log(arr);
    // }else{
    //     const arr = a.slice(0);
        
    // }
}

/*
---
title: CSV to array
tags: string,array
expertise: intermediate
cover: blog_images/keyboard-tea.jpg
firstSeen: 2018-06-27T20:57:54+03:00
lastUpdated: 2022-01-30T12:14:39+02:00
---

Converts a comma-separated values (CSV) string to a 2D array.

- Use `Array.prototype.indexOf()` to find the first newline character (`\n`).
- Use `Array.prototype.slice()` to remove the first row (title row) if `omitFirstRow` is `true`.
- Use `String.prototype.split()` to create a string for each row.
- Use `String.prototype.split()` to separate the values in each row, using the provided `delimiter`.
- Omit the second argument, `delimiter`, to use a default delimiter of `','`.
- Omit the third argument, `omitFirstRow`, to include the first row (title row) of the CSV string.

```js
const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));
```

```js
const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));

CSVToArray('a,b\nc,d'); // [['a', 'b'], ['c', 'd']];
CSVToArray('a;b\nc;d', ';'); // [['a', 'b'], ['c', 'd']];
CSVToArray('col1,col2\na,b\nc,d', ',', true); // [['a', 'b'], ['c', 'd']];
*/

CSVToArray('a;b\nc;d', ';');
