//题目描述
// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
function prepend(arr, item) {
    a=arr.slice()
    a.unshift(item)
    return a
}
a=prepend([1, 2, 3, 4], 10)
console.log(a)