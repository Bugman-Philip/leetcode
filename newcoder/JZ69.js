/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param number int整型 
 * @return int整型
 */
function jumpFloor( number ) {
    // write code here
    if(number === 1) {
        return 1;
    } 
    if(number === 2) {
        return 2
    }
    return jumpFloor(number - 1) + jumpFloor(number - 2)
}
// 动态规划。dp
function jumpFloor2( number ) {
    // write code here
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= number; i ++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[number];
    
}

module.exports = {
    jumpFloor : jumpFloor
};