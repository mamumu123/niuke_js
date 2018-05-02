//题目描述
// 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
function append(arr) {
    a=arr.slice()
    a.pop()
    return a
}
a=append([1, 2, 3, 4])
console.log(a)