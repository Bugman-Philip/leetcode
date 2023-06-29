/**
 * @param {Function} fn
 */
function memoize(fn) {
    const map = new Map();
    return function(...args) {
       if(map.has(args)) {
        return map.get(args);
       } else {
        if(args.length > 1) {
            const num = fn(...args);
            map.set(args, num);
            return num;
        } else {

        }
        }
    }
}


 
let callCount = 0;
const memoizedFn = memoize(function (a, b) {	 callCount += 1;
  return a + b;
})
memoizedFn(2, 2) // 5
memoizedFn(2, 2) // 5
console.log(callCount) // 1 
