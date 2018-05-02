//题目描述
// 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
function square(arr) {
    var a = arr.map(function (a) {
        return a **2
    })
    return a
}

console.log(square([1, 2, 3, 4]))