function sortedArray(arr1, arr2) {
  let sortedArr = [...arr1, ...arr2].sort((a, b) => a - b);
  return sortedArr;
}
console.log(sortedArray([1, 3, 5], [2, 4, 6]));
