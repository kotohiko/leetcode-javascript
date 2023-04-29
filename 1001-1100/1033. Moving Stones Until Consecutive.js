/**
 * <h2>1033. 移动石子直到连续</h2>
 * <a href="https://leetcode.cn/problems/moving-stones-until-consecutive/">LeetCode link</a>
 *
 * @author Jacob Suen
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function (a, b, c) {
    let x = Math.min(Math.min(a, b), c)
    let z = Math.max(Math.max(a, b), c)
    let y = a + b + c - x - z
    let ans = [2, z - x - 2]
    if (y - x === 1 && z - y === 1) {
        ans[0] = 0;
    } else if (z - y <= 2 || y - x <= 2) {
        ans[0] = 1;
    }
    return ans
};