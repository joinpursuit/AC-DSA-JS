# Exercises

### One
Write a function that moves every element in an array one space
to the left.

```js
function moveOneLeft(arr) { return; }

moveOneLeft([0,1,2,3,4,5,0])
// returns [1,2,3,4,5,0]
```

### Two
Write a function that moves every element in an array (n)
spaces to the left.

```js
function moveNLeft(arr) { return; }

moveNLeft([0,1,2,3,4,5], 3);
// returns [3,4,5,0,1,2]
```

### Three
Write a function that accepts two strings, and returns true if
one string is a rotation of the other.

A string rotation is when you take a string, remove some
letters from its end, and prepend them to the front. For
example, "JavaScript" rotated by two characters would be "ptJavaScri".

```js
function isRotation(str1, str2) { return; }

isRotation('abcde', 'deabc');
// returns true
isRotation('abcde', 'abced');
// returns false
isRotation('abc', 'a');
// returns false
```

### Four
Given a square matrix of size 3x3, calculate the absolute value of the
difference between the sum of its diagonals.

```js
function absSumDiff3(twoDArray) { return; }

absSumDiff3([[1,2,3], [4,5,6], [7,8,9]]);
// returns 4
```

### Five
Given a square matrix of size NxN, calculate the absolute value of the
difference between the sum of its diagonals.

```js
function absSumDiffN(twoDArray) { return; }

absSumDiffN([[4,1,2,5], [3,1,9,2], [4,1,3,8], [9,2,4,3]]);
// returns 13
```
