# Sorting

## Sources

* [Array `sort` method - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* [Sorting Algorithms - Brilliant](https://brilliant.org/wiki/sorting-algorithms/)
* [Sorting Algorithm - Wikipedia](https://en.wikipedia.org/wiki/Sorting_algorithm)
* [Visual Algo Sorting](https://visualgo.net/en/sorting)

### Lesson

In JavaScript, we can sort an array using the built-in `sort` method. This method takes as argument a callback function that specifies - for every two elements, which should go to the left and which should go to the right. For example, given an array of numbers:

```js
const numbers = [10, 5, 8, 11, 2];
```

We may want to sort the array in an ascending order, from smallest to largest. For every two elements, we would want the smaller to be to the left (i.e. closer to the beginning of the array) and the larger to be on the right (closer to the end of the array).

The callback function, which we will call `compareFunction`, will be called multiple times (more on this later). Every time, this function will be given two elements in the array. The function's return value will determine how the two elements are sorted.

1. If `compareFunction(a, b)` returns a number smaller than `0`, sort `a` to an index lower than `b` (i.e. a comes first).
2. If `compareFunction(a, b)` returns a number greater than `0`, sort `b` to an index lower than `a` (i.e. b comes first).
3. If `compareFunction(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other.

To sort an array of numbers from smallest to largest, we will call the `sort` method as follows:

```js
const numbers = [10, 5, 8, 11, 2];
numbers.sort((num1, num2) => num1 - num2);
```

Let's look at the above callback for the `sort` method with two examples:

### First Case

```js
// num1 = 10
// num2 = 5
(num1, num2) => 10 - 5 = 5
```

Since the callback returned a value greater than 0, `num1` will go to the right (larger index) and `num2` will go to the left (smaller index).

### Second Case

```js
// num1 = 10
// num2 = 11
(num1, num2) => 10 - 11 = -1
```

Since the callback returned a value smaller than 0, `num1` will go to the left (smaller index) and `num2` will go to the right (larger index).

### Sorting is Done In-Place

It is important to know that sorting is done _in-place_. This means that sorting modifies (or _mutates_) the array it was called on. If we want to avoid changing the original array, we will need to copy it first.

```js
const copyOfNumbers = [...numbers];
```

Or:

```js
const copyOfNumbers = numbers.slice(0);
```

> Question: why would the following not work to copy an array:

```js
const copyOfNumbers = numbers;
```

### How Does Sorting Actually Work

There are two main types of sorting algorithms.

* Algorithms that work in O(n \* log(n)) time.
* Algorithms that work in O(n<sup>2</sup>) time

* Remember that in computer science, log(n) = log<sub>2</sub>(n)

We will begin by reviewing the common O(n<sup>2</sup>) algorithms because they are easier to understand.

| Sorting function | Runtime          |
| ---------------- | ---------------- |
| Insertion Sort   | O(n<sup>2</sup>) |
| Bubble Sort      | O(n<sup>2</sup>) |
| Merge Sort       | O(nlog(n))       |
| Quicksort        | O(nlog(n))       |

### First Attempt

Let's try and write our own sorting algorithm. We will pass through the array once, comparing each element and the element after it. If an element is larger than the one after, we will swap the two elements.

> Ex. Write a function `swap` that is given an array and two indexes, and swaps the values of the two indexes in the array.

The following is an implementation of the above description:

```js
function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
}
```

This first attempt will partially sort the array, but not completely. We can extend this idea to actually get a sorted array.

### Bubble Sort

[Bubble Sort Video](https://www.youtube.com/watch?v=yIQuKSwPlro)

Buble sort looks at at each pair of numbers. If they are ordered correctly, we keep them in the same order. Otherwise, we swap them. Then, we keep going until the array is sorted.

Here is a basic implementation of bubble sort:

```js
// This is a very basic implementation which is nice to understand the deep principle of bubble sort (going through all comparisons) but it can be greatly improved for performances
function bubbleSortBasic(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
```

> Ex. Extend bubble sort to take a `compareFunction` as argument and use the function when comparing elements.

Follows is a more efficient implementation of bubble sort:

```js
// correct implementation: this is the usual implementation of the bubble sort algorithm. Some loops execution are avoided if not they are not needed
function bubbleSort(array) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}
```
