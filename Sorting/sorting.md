# Sorting

## Sources

* [Array `sort` method - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* [Sorting Algorithms - Brilliant](https://brilliant.org/wiki/sorting-algorithms/)
* [Sorting Algorithm - Wikipedia](https://en.wikipedia.org/wiki/Sorting_algorithm)
* [Visual Algo Sorting](https://visualgo.net/en/sorting)
* [Algorithms For Beginners - Erica Millado](https://medium.com/yay-its-erica/algorithms-for-beginners-bubble-sort-insertion-sort-merge-sort-29bd5506cc48)
* [Insertion Sort - Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)

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
function bubbleSortBasic(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
```

> Ex. Extend bubble sort to take a `compareFunction` as argument and use the function when comparing elements.

Follows is a more efficient implementation of bubble sort:

```js
// Better implementation: some loops are avoided if not they are not needed
function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
}
```

### Insertion Sort

Insertion sort is similar to the way we'd sort a hand of cards. We first sort the first 2 cards. We then place the 3rd card in the right position relative to the 2 sorted cards. We then add a 4th card to the right place within the sorted card.

With insertion sort, we are creating a "sorted" subset of the array. Initially, the first card is sorted (an array with 1 element is sorted by default). Then we gradually add cards, putting each new card in the appropriate position (so that the subarray remains sorted). We continue doing this until the subset includes all the elements of the original array.

Consider the following visualization of insertion sort:

[insertion sort visualization](https://www.youtube.com/watch?v=8oJS1BMKE64)

![vis ins](https://cdn-images-1.medium.com/max/800/1*krA0OFxEDgi8hVHJffCi4w.gif)

The following is an implementation of insertion sort in javascript:

```js
function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
}
```

### Merge Sort

While we used a `swap` function for bubbleSort, mergeSort is the only one we'll be learning where the classic version of the algorithm includes two functions. Why is that, you might ask? Well, we are doing two discreet things when we use mergeSort:

* We separate the array into individual units (length 1)
* We *merge* these units together, comparing and sorting their elements.

This is more efficient than our earlier sorting algorithms, because we aren't traversing the entire array multiple times. In fact, the time complexity of merge sort is **O(nlog(n))**. We won't be traversing the array once, exactly - we'll be traversing cut-up subsections of the array once, which adds up to more than one entire run-through. That's OK, though - we aren't wizards here, and there isn't currently a perfect O(n) sorting algorithm for arrays.

This implementation is taken from [here](https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0), with more granular explanation available, as well:

```js
// Split the array into halves and merge them recursively
function mergeSort (arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
```

### Quicksort

QuickSort is a slick way of sorting an array with the same time complexity as mergeSort. QuickSort accomplishes its goal using recursion - it identifies a *pivot*, frequently the first element of the array. It then sorts the array into left (less than) and right (greater than) sub-arrays, and calls itself on those sub-arrays. It continues doing this until it reaches arrays of length 1.

This is similar, in many ways, to mergeSort, but its implementation is much more concise, and frankly, pretty cool. Take a look:

```js
function quick_Sort(origArray) {
	if (origArray.length <= 1) {
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var myArray = [3, 0, 2, 5, -1, 4, 1 ];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);
```

([Source](https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-1.php))
