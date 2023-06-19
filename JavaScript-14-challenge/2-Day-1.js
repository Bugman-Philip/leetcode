/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// one
var createCounter = function(init) {
    let current = init;
    function increment() {
        return ++ current
    }

    function decrement() {
        return -- current
    }
    function reset() {
        current = init
        return current
    }
    return {increment, decrement, reset}
};
// two. more efficent
var createCounter = function(init) {
    return {
        current: init,
        increment() {
            return ++this.current;
        }, 
        decrement() {
            return --this.current; 
        }, 
        reset() {
            this.current = init
            return this.current; 
        }}
}; 
/**
 * const counter = createCounter(5)
 * {counter}.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */