//题目描述
// 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
function concat(arr1, arr2) {
    var s=arr1.concat(arr2)
    return s
}
a=concat([1, 2, 3, 4], ['a', 'b', 'c', 1])
console.log(a)