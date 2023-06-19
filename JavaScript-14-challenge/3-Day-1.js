/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const a = [];
    arr.forEach((item, index) => {
        if(fn(item,index)) {
            a.push(item)
        }
    })
    return a;
};

var filter = function(arr, fn) {
    return arr.reduce((pre, current, index) => {
        if(fn(arr[index], index)){
            pre.push(current);
        }
        return pre;
    },[])
};