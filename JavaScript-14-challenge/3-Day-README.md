# 题目描述
1. 给定一个整数数组 arr 和一个过滤函数 fn，并返回一个过滤后的数组 filteredArr 。

    fn 函数接受一个或两个参数：

    arr[i] - arr 中的数字
    i - arr[i] 的索引
    filteredArr 应该只包含使表达式 fn(arr[i], i) 的值为 真值 的 arr 中的元素。真值 是指 Boolean(value) 返回参数为 true 的值。

    请在不使用内置的 Array.filter 方法的情况下解决该问题


---
2.请你编写一个函数，它的参数为一个整数数组 nums 、一个计算函数 fn 和初始值 init 。返回一个数组 归约后 的值。

你可以定义一个数组 归约后 的值，然后应用以下操作： val = fn(init, nums[0]) ， val = fn(val, nums[1]) ， val = fn(val, nums[2]) ，... 直到数组中的每个元素都被处理完毕。返回 val 的最终值。

如果数组的长度为 0，它应该返回 init 的值。

请你在不使用内置数组方法的 Array.reduce 前提下解决这个问题。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/array-reduce-transformation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

