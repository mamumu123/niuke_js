//题目描述
// 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
function append(arr, item) {
    a=arr.slice()
    a.push(item)
    return a
}
a=append([1, 2, 3, 4],  10)
console.log(a)