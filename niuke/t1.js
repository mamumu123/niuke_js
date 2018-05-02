// 题目描述
// 找出元素 item 在给定数组 arr 中的位置
// 输出描述:
// 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
//
//1、如果直接用内置函数
function indexOf(arr, item) {
    return arr.indexOf(item)
}
//2、自己写
function indexOf(arr, item) {
    var flag=-1
    arr.forEach(function (a_value,a_index) {
        //console.log(a_index,a_value)
        console.log(a_value,item)
        if (a_value== item) {
            //console.log('---------------------')
            flag=a_index
        }

    })
    return flag
}

let arr = [5,10,15,20],
    item = 15
let b = indexOf(arr, item)
console.log(b)


