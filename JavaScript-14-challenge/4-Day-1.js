/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        functions.reverse().functions.forEach(item => {
            x = item(x);            
        })
        return x;
    }
};

var compose = function(functions) {
	return function(x) {
        return functions.reduceRight((acc, current) => current(acc), x)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */