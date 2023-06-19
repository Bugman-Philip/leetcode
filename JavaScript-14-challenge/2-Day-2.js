/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// one
var map = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {

        arr[i] = fn(arr[i],i)
    }
    return arr;
};

// two
var map = function(arr, fn) {
    const a = [];
    arr.forEach((element, index) => {
        a[index] = fn(arr[index], index)
    });
};