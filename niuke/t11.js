//题目描述
// 统计数组 arr 中值等于 item 的元素出现的次数
function count(arr, item) {
    // var i = 0
    // for (a of arr) {
    //     if (a == item){
    //         i++
    //     }
    //
    // }
    // return i
    return arr.filter(function (t) { return t===item }).length;
}

a = count([1, 2, 4, 4, 3, 4, 3], 4)
console.log(a)