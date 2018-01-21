function counterUpperOne( arrOfInts ) {
  let counterHash = {};
  arrOfInts.forEach(el => {
    if (counterHash[el] !== undefined) {
      counterHash[el] += 1;
    } else {
      counterHash[el] = 1;
    }
  });
  return counterHash;
}
let x = counterUpperOne([1,1,0,1,1,3,4,5,3])
console.log(x);

function counterUpperTwo( arrOfInts ) {
  let counterHash = {};
  for (let i=0; i<arrOfInts.length; i++) {
    if (!counterHash[arrOfInts[i]]) {
      counterHash[arrOfInts[i]] = 1;
    } else {
      counterHash[arrOfInts[i]] += 1;
    }
  }
  return counterHash;
}
let y = counterUpperTwo([1,1,0,1,1,3,4,5,3])
console.log(y);

function counterUpperThree( arrOfInts ) {
  let counterHash = {};
  for (let i=0; i<arrOfInts.length; i++) {
    if (!counterHash[arrOfInts[i]]) {
      counterHash[arrOfInts[i]] = 0;
    }
    counterHash[arrOfInts[i]] += 1;
  }
  return counterHash;
}
let z = counterUpperThree([1,1,0,1,1,3,4,5,3])
console.log(z);
let a = counterUpperThree([
'aj','aj','aj','mike','deborah',
'mike','thomas'
])
console.log(a);

// SECOND PART
function mostCommonWords( str ) {
  let arrOfStrs = str.split(' ');
  let count = counterUpperThree(arrOfStrs);
  let sortable = [];
  for (let k in count) {
    sortable.push([k, count[k]]);
  }
  let sorted = sortable.sort((a, b) => {
    return a[1] - b[1];
  });
  return sorted.slice(-5);
}
let b = mostCommonWords(`
rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`);
console.log(b);

