### Big O Practice

## Instructions

Work on these problems in your fork of the AC-DSA repo.
Add the runtimes below, then push your commits up.  If
you have not yet made a pull request, make a pull
request against AC-DSA.

```javascript
function problemOne(arr) {
    for (var i=0; i<1000; i++) {
        console.log(i)
    }
}
```


```javascript
function problemTwo(arr) {
    for (var i=0; i<arr.length; i++) {
        for (var j=0; j<arr.length; j++) {
            console.log(i + ' ' + j)
        }
    }
}
```


```javascript
function problemThree() {
    for (var i=0; i<1000; i++) {
        problemOne()
    }
}
```


```javascript
function problemFour(arr) {
    for (var i=0; i<arr.length; i++) {
        problemTwo(arr)
    }
}
```


```javascript
function problemFive(arr) {
    for (var i=0; i<arr.length; i++) {
        problemTwo(arr)
    }
    for (var i=0; i<arr.length; i++) {
        problemTwo(arr)
    }
}
```


```javascript
func problemSix(arr) {
    for (var i=0; i<arr.length; i++) {
        for (var j=0; j<arr.length; j++) {
            problemTwo(arr)
        }
    }
}
```

