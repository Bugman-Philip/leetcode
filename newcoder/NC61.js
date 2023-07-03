/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param numbers int整型一维数组 
 * @param target int整型 
 * @return int整型一维数组
 */
function twoSum( numbers ,  target ) {
    // write code here
    const map = new Map();
    const result = [];
    for(let i = 0; i < numbers.length; i ++) {
        if(map.has(target - numbers[i])) {
            const x = i + 1;
            result.push(x, map.get(target - numbers[i]))
            break;     
        } else {
            const x = i + 1;
            map.set(numbers[i], x);
        }
    }
    result.sort();
    return result;
}
module.exports = {
    twoSum : twoSum
};